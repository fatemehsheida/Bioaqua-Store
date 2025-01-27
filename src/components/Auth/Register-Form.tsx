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

export default function Component() {
  return (
    <div className="flex flex-col gap-6 pt-10 pb-20">

      <Card className="flex flex-col justify-center items-center w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold my-5">ثبت نام</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 mt-10">
          <div className="space-y-2">
            <Input
              id="full-name"
              placeholder="اسم کامل"
              required
              className=" focus:bg-white text-left flex h-9 w-full bg-white  file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              style={{
                WebkitTextFillColor: "inherit",
                transition: "background-color 5000s  0s",
              }}
            />
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
              placeholder="ایمیل"
              required
            />
          </div>
          <div className="flex flex-row w-full gap-3 ">

            <div className="space-y-2 w-1/2">
              <Input
                id="password"
                type="password"
                placeholder="رمزعبور"
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
                id="confirm-password"
                type="password"
                placeholder="تکرار رمزعبور "

                required
                className="focus:bg-white text-left flex h-9 w-full bg-white  file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                style={{
                  WebkitTextFillColor: "inherit",
                  transition: "background-color 5000s  0s",
                }}
              />
            </div>
          </div>


          <div className="pt-6 mx-auto">
            <div className="w-40 mx-auto">
              <Button asChild className="w-full bg-[#94D2BD] hover:bg-[#75B2A9] transition-all duration-300">
                <Link href="/products">ثبت نام</Link>
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              حساب کاربری دارید؟
              <Link href="login" className="underline underline-offset-4">
                ورود
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

  );
}
