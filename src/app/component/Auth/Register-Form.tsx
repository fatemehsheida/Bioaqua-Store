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
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl">ثبت نام</CardTitle>
        <CardDescription>
          برای ایجاد حساب کاربری اطلاعات خود را وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">اسم کامل</Label>
          <Input
            id="full-name"
            placeholder="John Doe"
            required
            className=" focus:bg-transparent text-left flex h-9 w-full bg-transparent  file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            style={{
              WebkitTextFillColor: "inherit",
              transition: "background-color 5000s  0s",
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">ایمیل</Label>
          <Input
            className=" focus:bg-transparent text-left flex h-9 w-full bg-transparent  file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            style={{
              WebkitTextFillColor: "inherit",
              transition: "background-color 5000s 0s",
            }}
            id="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">رمزعبور</Label>
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
        <div className="space-y-2">
          <Label htmlFor="confirm-password">تکرار رمزعبور</Label>
          <Input
            id="confirm-password"
            type="password"
            required
            className=" focus:bg-transparent text-left flex h-9 w-full bg-transparent  file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            style={{
              WebkitTextFillColor: "inherit",
              transition: "background-color 5000s  0s",
            }}
          />
        </div>
        <Button className="w-full">ثبت نام</Button>
        <div className="mt-4 text-center text-sm">
          حساب کاربری دارید؟
          <Link href="login" className="underline underline-offset-4">
            ورود
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
