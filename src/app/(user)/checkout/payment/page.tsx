
import PaymentProfile from '@/components/payment/payment-profile';
import LeftPayment from '@/components/payment/LeftPayment';
import RightPayment from '@/components/payment/RightPayment';

const Payment = () => {
  return (
    <div  className='w-full flex flex-row justify-center items-center content-center text-[#2E2A39]'>
    <div className=" w-full ">
      {/* Payment Card */}
      <div className=" mx-auto">
        <img
          src="https://preview.cruip.com/mosaic/images/pay-bg.jpg"
          alt="Payment background"
          className="rounded-t shadow-lg w-full h-96"
        />
      </div>
      <PaymentProfile />
          <div className='w-full bg-white flex flex-col items-center'>
          <div className=" w-full flex">
           {/* <RightPayment/> */}
      <LeftPayment/>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Payment;