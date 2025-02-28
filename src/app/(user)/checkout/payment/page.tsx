import { PiCreditCardThin } from "react-icons/pi";
import { MdAddCard } from "react-icons/md";
import Link from "next/link";


const Payment = () => {
  return (
    <div className="w-full flex items-center">
 <div className="w-1/2 xl:pr-56 pl-10 pr-32">
    <span className="text-[#1A1D21]">خلاصه سفارش</span>
    <div>
        <span className="text-[#6C747F]">نام محصول</span>
        <div>
            <span className="text-[#6C747F]">×</span>
            <span className="text-[#6C747F]">1</span>
        </div>
        <span className="text-[#42474D]">5.59 دلار</span>
    </div>
    <hr />
    <div>
        <span className="text-[#6C747F]">جمع جزء</span>
        <span className="text-[#42474D]">28.16 دلار</span>
    </div>
    <hr />
    <div>
        <span className="text-[#42474D]">مجموع قابل پرداخت</span>
        <span className="text-[#1A1D21]">28.16 دلار</span>
    </div>
</div>

      <div className="w-1/2 xl:pl-56 pr-10 pl-32 flex flex-col">
        {/* <span className="text-[#1A1D21]">BIOAQUA OFFICIAL STORE</span> */}
<Link href="/checkout">
        <div className="flex items-center gap-2 justify-end cursor-pointer">
          <span className="text-[#612FFF] hover:underline text-xs font-normal">بازگشت به تسویه حساب</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-[#612FFF]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          </span>
        </div>
</Link>

        <div className="border border-[#5153559d] flex flex-col gap-7 px-7 py-4 mt-10 rounded-md">
          <div className="flex items-center gap-1 ">
            <input type="radio" name="card" id="card" className="accent-[#612FFF] mr-2" />
            <PiCreditCardThin className="size-5 opacity-65" />
            <span className="text-[#42474D] text-base font-medium">کارت</span>

          </div>

          <div className="flex flex-col items-start gap-3">
            <span className="text-[#42474D] text-sm font-normal">اطلاعات کارت</span>

            <div className="flex flex-col items-center w-full">
              <div className="w-full flex items-center border border-[#51535548] hover:border-[#45494dae] focus:border-[#612FFF] outline-none rounded-t-md bg-white">
                <input
                  dir="rtl"
                  type="text"
                  placeholder="****  ****  ****  ****"
                  className="w-full px-3 py-2  outline-none bg-transparent text-sm"
                />
                <div className="flex items-center pl-8 gap-0.5">
                  <img src="http://localhost:8000/uploads/image-1740779945479-522914529.png" className="w-5" />
                  <img src="http://localhost:8000/uploads/image-1740779815693-619555251.png" className="w-5" />
                  <img src="http://localhost:8000/uploads/image-1740779970542-419344239.png" className="w-5" />
                  <img src="http://localhost:8000/uploads/image-1740779740671-101775695.png" className="w-5" />
                </div>
              </div>
              <div className="flex items-center w-full ">

                <div className="w-full flex items-center justify-between border border-[#51535548] hover:border-[#45494dae] focus:border-[#612FFF] outline-none rounded-br-md bg-white">
                  <input
                    type="password"
                    placeholder="CVV2"
                    className="w-full px-3 py-2  outline-none text-sm bg-transparent"
                  />
                  <MdAddCard className="ml-3 opacity-50" />
                </div>

                <div className="w-full border border-[#51535548] hover:border-[#45494dae] focus:border-[#612FFF] outline-none rounded-bl-md bg-white ">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="w-full px-3 py-2  outline-none text-sm bg-transparent"
                  />
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col items-start">
            <span className="text-[#42474D] text-sm font-normal my-3" >نام روی کارت</span>
            <input type="text" name="Name" id="name" className="w-full px-3 rounded-md py-1.5 border border-[#51535548] hover:border-[#45494dae] focus:border-[#612FFF] outline-none " />
          </div>



          <div className="flex items-center justify-center bg-[#612FFF] hover:bg-[#5f2fffda] transition-all duration-500 text-slate-50 py-2 rounded-md cursor-pointer">
            <button type="submit">پرداخت 54 تومان</button>
          </div>
        </div>


      </div>

    </div>
  );
};

export default Payment;