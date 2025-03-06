"use client"
  import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // میتوانید اینجا درخواست API اضافه کنید
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen w-full py-16 px-4 md:px-8 dark:bg-[#21242D] bg-[#FCF8F5]">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-playfair text-center mb-12 text-[#6BB0A9] ">
          با ما در ارتباط باشید
        </h2>

        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl p-8 shadow-lg dark:bg-[#383a40]">
          {/* فرم تماس */}
          <div className="flex-1 space-y-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2 font-medium dark:text-white">نام شما</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2" 
                  style={{borderColor: '#6BB0A9', focusBorderColor: '#6BB0A9'}}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium dark:text-white">ایمیل</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2" 
                  style={{borderColor: '#6BB0A9', focusBorderColor: '#6BB0A9'}}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium dark:text-white">پیام شما</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2" 
                  style={{borderColor: '#6BB0A9', focusBorderColor: '#6BB0A9'}}
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 text-white font-medium rounded-lg transition-all hover:opacity-90"
                style={{backgroundColor: '#6BB0A9'}}
              >
                ارسال پیام
              </button>
            </form>
          </div>

          {/* اطلاعات تماس */}
          <div className="flex-1 space-y-8 p-6 rounded-lg justify-between bg-[#fcede3] dark:bg-[#586b69]/50">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: '#6BB0A9'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#6BB0A9'}}>آدرس</h3>
                    <p className="text-gray-700 dark:text-white">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                  </div>
                </div>
  
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: '#6BB0A9'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#6BB0A9'}}>تلفن</h3>
                    <p className="text-gray-700 dark:text-white">۰۲۱-۱۲۳۴۵۶۷۸</p>
                  </div>
                </div>
  
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: '#6BB0A9'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{color: '#6BB0A9'}}>ایمیل</h3>
                    <p className="text-gray-700 dark:text-white">bioaqua@gmail.com</p>
                  </div>
                </div>
              </div>
  
              <div className="flex gap-4 justify-center items-center pt-36 ">
                <a href="#" className="p-2 rounded-full hover:bg-white transition-all">
                  <svg className="w-6 h-6" style={{color: '#6BB0A9'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-white transition-all">
                  <svg className="w-6 h-6" style={{color: '#6BB0A9'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-white transition-all">
                  <svg className="w-6 h-6" style={{color: '#6BB0A9'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;