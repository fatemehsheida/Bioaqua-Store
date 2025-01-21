import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="m-auto items-center flex justify-center flex-col content-center w-full h-screen">
      <div
        className={cn("md:w-1/2 xl:w-1/4 flex flex-col gap-6", className)}
        {...props}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">ورود</CardTitle>
            <CardDescription>
              ایمیل خود را در زیر وارد کنید تا وارد حساب کاربری خود شوید.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input
                    className="bg-transparent w-full outline-none focus:bg-transparent"
                    style={{
                      WebkitBoxShadow: "0 0 0px 1000px transparent inset",
                      WebkitTextFillColor: "inherit",
                      transition: "background-color 5000s ease-in-out 0s",
                    }}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Label htmlFor="password">پسورد</Label>
                    <div>
                      <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        رمز عبور خود را فراموش کرده اید؟{" "}
                      </Link>
                    </div>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="bg-transparent w-full outline-none focus:bg-transparent"
                    style={{
                      WebkitBoxShadow: "0 0 0px 1000px transparent inset",
                      WebkitTextFillColor: "inherit",
                      transition: "background-color 5000s ease-in-out 0s",
                    }}
                  />
                </div>
                <Button
                  asChild
                  className=""
                  type="submit"
                >
                  ورود
                </Button>
                <Button variant="outline" className="w-full">
                  ورود به سیستم با Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                حساب کاربری ندارید?{" "}
                <a href="#" className="underline underline-offset-4">
                  ثبت نام
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
