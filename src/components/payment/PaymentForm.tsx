import React from 'react';
import { PiCreditCardThin } from 'react-icons/pi';
import { MdAddCard } from 'react-icons/md';

interface PaymentFormProps {
  totalAmount: number;
  onSubmit: () => void;
}

const PaymentForm = ({ totalAmount, onSubmit }: PaymentFormProps) => {
  return (
    <div className="w-full xl:w-1/2 xl:pl-20 xl:pr-10 flex flex-col">
      <div className="w-full">
        <div className="border border-gray-200 flex flex-col gap-6 px-6 py-5 xl:mt-10 mt-3 rounded-lg bg-white shadow-sm">
          {/* Payment Method Selection */}
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="card"
              id="card"
              className="accent-[#612FFF] mr-2"
            />
            <PiCreditCardThin className="size-5 text-gray-600" />
            <span className="text-gray-800 text-base font-medium">کارت</span>
          </div>

          {/* Card Information */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-gray-700 text-sm font-medium">اطلاعات کارت</span>

            {/* Card Number Input */}
            <div className="w-full flex items-center border border-gray-300 hover:border-gray-400 focus-within:border-[#612FFF] rounded-t-md transition-all">
              <input
                dir="rtl"
                type="text"
                placeholder="****  ****  ****  ****"
                className="w-full px-3 py-2 outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
              />
              <div className="flex items-center pl-8 gap-1">
                <img
                  src="http://localhost:8000/uploads/image-1740779945479-522914529.png"
                  className="w-5"
                />
                <img
                  src="http://localhost:8000/uploads/image-1740779815693-619555251.png"
                  className="w-5"
                />
                <img
                  src="http://localhost:8000/uploads/image-1740779970542-419344239.png"
                  className="w-5"
                />
                <img
                  src="http://localhost:8000/uploads/image-1740779740671-101775695.png"
                  className="w-5"
                />
              </div>
            </div>

            {/* CVV and Expiry Date Inputs */}
            <div className="flex items-center w-full gap-2">
              <div className="w-full flex items-center border border-gray-300 hover:border-gray-400 focus-within:border-[#612FFF] rounded-bl-md transition-all">
                <input
                  type="password"
                  placeholder="CVV2"
                  className="w-full px-3 py-2 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
                />
                <MdAddCard className="ml-3 text-gray-500" />
              </div>

              <div className="w-full border border-gray-300 hover:border-gray-400 focus-within:border-[#612FFF] rounded-br-md transition-all">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-full px-3 py-2 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Cardholder Name Input */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-gray-700 text-sm font-medium">نام روی کارت</span>
            <input
              type="text"
              name="Name"
              id="name"
              className="w-full px-3 py-2 rounded-md border border-gray-300 hover:border-gray-400 focus:border-[#612FFF] outline-none text-sm text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <div
            onClick={onSubmit}
            className="flex items-center justify-center bg-[#612FFF] hover:bg-[#5f2fffda] transition-all duration-300 text-white py-2.5 rounded-md cursor-pointer"
          >
            <button type="button" className="text-sm font-medium">
              پرداخت {totalAmount.toLocaleString()}.000 تومان
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;