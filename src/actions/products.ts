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
  state: any,
  formData: FormData
) {
  // Validate input and ensure authentication
  await ensureAuthenticated();
  const id = formData.get("id");
  console.log(formData)
  const parsed = ProductSchemaZod.safeParse(formDataToObject(formData));
  console.log({parsed})

  if (!parsed.success) {
  console.log('error')
  console.log(parsed.error)
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Separate the price field from the rest of the product data.
  console.log({parsed})
  const { price, ...productData } = parsed.data;
  try {
    if (id) {
      await updateProduct(id.toString(), productData);
    } else {
      await createProduct(productData);
    }
    // If a price is provided and a product code exists, post the price to the separate endpoint.
    if (price !== undefined && productData.code) {
      await addProductPrice(productData.code, price);
    }
  } catch (e) {
    console.log(e);
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body?.errors,
      };
    } else {
      return {
        message: "failed with call api",
        success: false,
      };
    }
  }
  redirect("/dashboard/products");
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
