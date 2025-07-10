"use server";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  addProductPrice,
} from "@/api/server-api/products";
import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { ProductFormState, ProductSchemaZod } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";

export async function createOrUpdateProductAction(
  state: ProductFormState,
  formData: FormData
) {
  console.log('start updating product')
  await ensureAuthenticated();
  const id = formData.get("id");
  
  // Convert FormData to object and validate
  const parsed = ProductSchemaZod.safeParse(formDataToObject(formData));
  
  if (!parsed.success) {
    console.log(parsed.error)

    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  console.log(parsed)

  // Separate price from product data
  const { price, ...productData } = parsed.data;

  try {
    // Create/update product
    const result = id 
      ? await updateProduct(id.toString(), productData)
      : await createProduct(productData);

    // Handle price update if provided
    if (typeof price === "number" && productData.code) {
      await addProductPrice(productData.code, price);
    }

    return result;
  } catch (e) {
    console.error(e);
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body?.errors as ProductFormState["errors"],
      };
    }
    return {
      message: "An unexpected error occurred",
      success: false,
    };
  } finally {
    revalidatePath("/dashboard/products");
  }
}

export async function deleteProductAction(id: string) {
  await ensureAuthenticated();
  try {
    await deleteProduct(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/products");
}