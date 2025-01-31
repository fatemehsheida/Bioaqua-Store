import Component from "@/components/Auth/Register-Form";

export default function Page() {
  return (
    <div className="flex h-[90%] w-full bg-[#F0F4F2]  
    items-center justify-center p-6 md:p-10">
      <div className="md:w-[30%] ">
        <Component />
      </div>
    </div>
  );
}
