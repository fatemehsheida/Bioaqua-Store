"use server";
import "server-only"
import { LoginFormSchema, LoginFormState } from "@/lib/validations";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { AUTH_BASE_URL } from "@/config.server";
import { formDataToObject } from "@/lib/utils";
import Swal from 'sweetalert2'

export async function loginAction(state: LoginFormState, formData: FormData) {
  /// validate input
  const validatedFields = LoginFormSchema.safeParse(formDataToObject(formData));
  console.log(validatedFields.error)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log(validatedFields)
  const res = await fetch(`${AUTH_BASE_URL}/auth/login`, {
    method: "post",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data)
  if (!res.ok) {
    return {
      message: data.message,
      errors: data.errors,
    };
  }

  await createSession({
    accessToken: data.tokens.accessToken,
    refreshToken: data.tokens.refreshToken,
  });
   Swal.fire({
            text: 'ورود شما موفقیت آمیز بود',
            timer: 2000,
            icon: 'success',
          })
  redirect("/dashboard");
}
