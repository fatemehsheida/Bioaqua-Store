'use client'
import { cn } from "@/lib/cn";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { loginAction } from "@/actions/auth/login";
import CreateButton from "../createButton";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [state, action, pending] = useActionState(loginAction, {
    message: "",
    errors: {},
  });
  return (
    <div className={cn("flex flex-col gap-6 pt-10 pb-20", className)} {...props}>
      <Card className="flex flex-col justify-center items-center w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold my-5">ورود</CardTitle>
        </CardHeader>
        <CardContent className="pt-10">
          <form action={action}>
            <div className="flex flex-col gap-6">
              <div className="gap-2 w-full">
                <Input
                  className=" focus:bg-white px-5 py-5 text-left flex h-9 w-full bg-white  file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  style={{
                    WebkitTextFillColor: "inherit",
                    transition: "background-color 5000s  0s",
                  }}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ایمیل"
                  required
                />
              </div>
              <div className=" gap-2">
                <div className="w-full flex justify-between items-center">
                  <div className="">
                  </div>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="رمزعبور"
                  required
                  className=" focus:bg-white p-5 text-left flex h-9 w-full bg-white  file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  style={{
                    WebkitTextFillColor: "inherit",
                    transition: "background-color 5000s  0s",
                  }}
                />
                  <CreateButton
                    text="رمز عبور خود را فراموش کرده اید؟"
                    href="#"
                   className="ml-auto pr-5 inline-block text-gray-600 text-xs underline-offset-4 hover:underline"
                />
              </div>
              <CreateButton
                    type='submit'
                    text="ورود"
                    href="/"
                   className="w-24 mx-auto py-1.5 rounded-xl text-slate-50 bg-Minty hover:bg-Teal transition-all duration-300"
                />
              
            </div>
            <CreateButton
                    type='submit'
                    text="ثبت نام"
                    href="register"
                   className="underline text-gray-600 underline-offset-4 mr-1 text-center text-sm mx-auto w-full mt-4"
                />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
