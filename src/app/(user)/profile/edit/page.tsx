'use client'
import { Order, UserInfoResponse } from '@/types/type';
import { getOrders, getUserData } from '@/utils/apiClient';
import { useState, useEffect } from 'react';
import { FaCakeCandles } from 'react-icons/fa6'
import CreateButton from '@/components/createButton';
import Image from 'next/image'

const EditProfile = () => {
    const [userData, setUserData] = useState<UserInfoResponse | null>(null);
    const [order, setOrder] = useState<Order | null>(null);
    const [status, setStatus] = useState<Order[]>([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [birthDate, setBirthDate] = useState('1382/11/28'); // مقدار اولیه فرضی

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const userdata = await getUserData();
                const data = await getOrders();
                const foundOrder = data[1].results.find((o: Order) => o.id);
                setOrder(foundOrder);
                setStatus(data[1].results);
                setUserData(userdata[1]);

                setFirstName(userdata[1].user.firstName || '');
                setLastName(userdata[1].user.lastName || '');
                setEmail(userdata[1].user.email || '');
                setCity(foundOrder?.shippingAddress.city || '');
                setStreet(foundOrder?.shippingAddress.street || '');
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };
        fetchOrder();
    }, []);

    return (
<div className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-950 shadow-2xl rounded-3xl px-6 sm:px-10 py-10 sm:py-14 space-y-10 transition-all duration-500">
  {/* Header Section */}
  <div className="flex flex-col sm:flex-row items-center gap-8">
   <div className="relative w-32 h-32 sm:w-40 sm:h-40">
    <Image
      src="/cute_profile.jpg"
      width={160}
      height={160}
      alt="profile"
      className="rounded-full object-cover shadow-lg ring-4 ring-Minty transition duration-300 w-full h-full"
    />

    <Image
      src="/camera.png"
      width={35}
      height={35}
      alt="Edit"
      className="absolute bottom-1 right-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md bg-white p-1 sm:p-1.5 cursor-pointer hover:bg-emerald-300/50 hover:ring-1 hover:ring-black/30"
    />

      </div>
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="نام خانوادگی"
        className="flex-1 text-2xl font-bold border-b-2 border-gray-300 dark:border-gray-600 focus:border-Minty bg-transparent outline-none transition-colors duration-300 dark:text-white placeholder-gray-400"
      />
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="نام"
        className="flex-1 text-2xl font-bold border-b-2 border-gray-300 dark:border-gray-600 focus:border-Minty bg-transparent outline-none transition-colors duration-300 dark:text-white placeholder-gray-400"
      />
    </div>
  </div>

  {/* Form Inputs */}
  <div className="grid sm:grid-cols-7 gap-x-4 gap-y-6 items-center text-sm sm:text-base text-gray-800 dark:text-gray-300">
    <label className="col-span-2 font-semibold text-right sm:text-left">ایمیل</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="example@email.com"
      className="col-span-5 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-Minty outline-none transition duration-300 dark:text-white placeholder-gray-400 py-1"
    />

    <label className="col-span-2 font-semibold text-right sm:text-left">آدرس</label>
    <input
      type="text"
      value={`${city} - ${street}`}
      onChange={(e) => {
        const [newCity, newStreet] = e.target.value.split(' - ');
        setCity(newCity || '');
        setStreet(newStreet || '');
      }}
      placeholder="شهر - خیابان"
      className="col-span-5 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-Minty outline-none transition duration-300 dark:text-white placeholder-gray-400 py-1"
    />

    <label className="col-span-2 font-semibold text-right sm:text-left">تاریخ تولد</label>
    <input
      type="text"
      value={birthDate}
      onChange={(e) => setBirthDate(e.target.value)}
      placeholder="روز/ماه/سال"
      className="col-span-5 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-Minty outline-none transition duration-300 dark:text-white placeholder-gray-400 py-1"
    />
  </div>

  {/* Submit Button */}
  <CreateButton
    type="submit"
    text="تایید"
    href="/profile"
    className="block w-full sm:w-1/2 lg:w-1/3 mx-auto py-3 rounded-xl bg-Minty text-white font-semibold text-lg hover:bg-Minty/80 hover:shadow-lg transition-all duration-300 text-center"
  />
</div>

    );
};

export default EditProfile;
