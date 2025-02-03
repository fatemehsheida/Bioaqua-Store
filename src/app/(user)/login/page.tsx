import { LoginForm } from "@/components/Auth/Login-Form";

export default function Page() {
  return (
    <div className="flex h-[90%] w-full bg-[#F0F4F2] items-center justify-center p-6 md:p-10">
      <div className=" md:w-[30%] ">
        <LoginForm />
      </div>
    </div>
  );
}
