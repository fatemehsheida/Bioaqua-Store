"use server";
import "server-only";

import { RegisterFormState, RegisterFormSchema } from "@/lib/validations";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { AUTH_BASE_URL } from "@/config.server";
import { formDataToObject } from "@/lib/utils";
import Swal from 'sweetalert2'

export async function register(state: RegisterFormState, formData: FormData) {
  /// validate input
  const validatedFields = RegisterFormSchema.safeParse(
    formDataToObject(formData)
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {

    const res = await fetch(`${AUTH_BASE_URL}/register`, {
      method: "post",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      return {
        message: data.message,
        errors: data.errors,
      };
    } else {
      await createSession({
        accessToken: data.tokens.accessToken,
        refreshToken: data.tokens.refreshToken,
      });
      Swal.fire({
        text: 'ثبت نام شما موفقیت آمیز بود',
        timer: 2000,
        icon: 'success',
      })
    }
  } catch (err) {
    console.log(err);
    return {
      message: "register failed",
    };
  }
  redirect("/dashboard");
}
