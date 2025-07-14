import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const OrderPayment = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const shipping = 1;
  const totalPrice = totalAmount + shipping;

  return (
    <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <span className="text-xl font-semibold text-gray-900">
        خلاصه سفارش
      </span>
      <div className="flex flex-col justify-between h-full w-full mt-6">
        <div className="flex flex-col items-center w-full space-y-4">
          {items.map((item) => (
            <div key={item.id} className="w-full">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  {item.titleFa}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-600">
                    {item.quantity}
                  </span>
                  <span className="text-gray-600">×</span>
                </div>
              </div>
              <span className="text-gray-800 flex justify-end">
                {item.totalPrice.toLocaleString()}.000 تومان
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <hr className="border-gray-200" />
          <div className="my-4 flex justify-between">
            <span className="text-gray-600">جمع جزء</span>
            <span className="text-gray-800">
              {totalAmount.toLocaleString()}.000 تومان
            </span>
          </div>
          <hr className="border-gray-200" />
          <div className="my-4 flex justify-between">
            <span className="text-gray-600">حمل و نقل</span>
            <span className="text-gray-800">
              {shipping.toLocaleString()}.000 تومان
            </span>
          </div>
          <hr className="border-gray-200" />
          <div className="my-4 flex justify-between font-semibold">
            <span className="text-gray-900">مجموع قابل پرداخت</span>
            <span className="text-gray-900">
              {totalPrice.toLocaleString()}.000 تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;