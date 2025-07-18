'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { register } from "@/actions/auth/register";
import CreateButton from "../createButton";

export default function Component() {
  const [state, action, pending] = useActionState(register, {
    message: "",
  });
  console.log({state})
  return (
    <div className="flex flex-col gap-6 pt-10 pb-20">
      <form action={action}>
        <Card className="flex flex-col justify-center items-center w-full">
          <CardHeader>
            <CardTitle className="text-3xl  my-5 text-gray-800 font-bold">ثبت نام</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 mt-10">
            <div className="flex gap-2">

              <div className="space-y-2 w-1/2">
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="نام"
                  required
                  className=" focus:bg-white text-left flex h-9 w-full bg-white  file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  style={{
                    WebkitTextFillColor: "inherit",
                    transition: "background-color 5000s  0s",
                  }}
                />
              </div>
              <div className="space-y-2 w-1/2">
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="نام خانوادگی"
                  required
                  className=" focus:bg-white text-left flex h-9 w-full bg-white  file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  style={{
                    WebkitTextFillColor: "inherit",
                    transition: "background-color 5000s  0s",
                  }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input
                className=" focus:bg-white text-left flex h-9 w-full bg-white  file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                style={{
                  WebkitTextFillColor: "inherit",
                  transition: "background-color 5000s 0s",
                }}
                id="email"
                type="email"

                name="email"
                placeholder="ایمیل"
                required
              />
            </div>
            <div className="flex flex-row w-full gap-3 ">

              <div className=" w-full">
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="رمزعبور"
                  required
                  className=" focus:bg-white text-left flex h-9 w-full bg-white  file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  style={{
                    WebkitTextFillColor: "inherit",
                    transition: "background-color 5000s  0s",
                  }}
                />
              </div>

            </div>


            <div className="pt-6 mx-auto">

              <div className="w-40 mx-auto">
              <CreateButton
                text="ثبت نام"
                href="#"
                type="submit"
                className="w-full py-1.5 rounded-xl text-slate-50 bg-Minty hover:bg-Teal transition-all duration-300"
              />
              </div>



              <div className="mt-4 text-center text-sm text-gray-600">
                حساب کاربری دارید؟

                <CreateButton
                text="ورود"
                href="login"
                type="submit"
                className="underline underline-offset-4"
              />
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
