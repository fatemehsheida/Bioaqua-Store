'use client';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { cartAction } from '@/lib/slice';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const dispatch = useDispatch();
  const { items, totalQty } = useSelector((state: RootState) => state.cart);
  const prevTotalQty = useRef(totalQty);

  useEffect(() => {
    if (totalQty > prevTotalQty.current && !isOpen) {
      onClose();
    }
    prevTotalQty.current = totalQty;
  }, [totalQty, isOpen, onClose]);

  const totalAmount = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);
  console.log(totalAmount)
  const handleIncrement = (id: string) => {
    dispatch(cartAction.IncrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(cartAction.DecrementQuantity(id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black cart-overlay" onClick={onClose}>
      <div className=" right-0 h-full w-full max-w-md z-50 bg-yellow-700 cart-modal"
       onClick={(e) => e.stopPropagation()}
       >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-bold">سبد خرید ({totalQty})</h2>
            <button
              onClick={onClose}
              className="rounded p-2 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-center text-gray-500">سبد خرید شما خالی است</p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex items-center justify-between border-b pb-4"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.titleFa}</h3>
                    {/* <p className="text-gray-600">
                      {item.price} تومان
                    </p> */}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="h-8 w-8 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="h-8 w-8 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t p-4">
            <div className="mb-4 flex justify-between text-lg font-bold">
              <span>جمع کل:</span>
              <span>{totalAmount} تومان</span>
            </div>
            <button
              className="w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
              onClick={() => {
                console.log('Checkout', items);
                onClose();
              }}
            >
              پرداخت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;