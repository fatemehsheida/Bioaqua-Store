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

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">ورود</CardTitle>
          <CardDescription>
            ایمیل خود را در زیر وارد کنید تا وارد حساب کاربری خود شوید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">ایمیل</Label>
                <Input
                  className=" focus:bg-transparent text-left flex h-9 w-full bg-transparent  file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  style={{
                    WebkitTextFillColor: "inherit",
                    transition: "background-color 5000s  0s",
                  }}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="w-full flex justify-between items-center">
                  <div className="">
                    <Label htmlFor="password">رمزعبور</Label>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-xs underline-offset-4 hover:underline"
                    >
                      رمز عبور خود را فراموش کرده اید؟
                    </Link>
                  </div>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className=" focus:bg-transparent text-left flex h-9 w-full bg-transparent  file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  style={{
                    WebkitTextFillColor: "inherit",
                    transition: "background-color 5000s  0s",
                  }}
                />
              </div>

              <Button asChild>
                <Link href="/login">ورود</Link>
              </Button>

              <Button variant="outline" className="w-full">
                ورود به سیستم با Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              حساب کاربری ندارید؟
              <Link href="register" className="underline underline-offset-4">
                ثبت نام
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
