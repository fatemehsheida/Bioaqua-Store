import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const footerLinks = [
    {
      title: "درباره",
      links: [
        { text: "درباره ما", href: "/aboutme" },
        { text: "تماس با ما", href: "/contact" },
        { text: "عمده‌فروشی", href: "/wholesale" }
      ]
    },
    {
      title: "خدمات مشتریان",
      links: [
        { text: "سوالات متداول", href: "/faq" },
        { text: "جستجو", href: "/search" },
        { text: "گواهی‌ها (FDA, ISO)", href: "/certificates" },
        { text: "سیاست حفظ حریم خصوصی", href: "/privacy" },
        { text: "ارسال و تحویل", href: "/shipping" },
        { text: "سیاست بازپرداخت و مرجوعی", href: "/refund" }
      ]
    },
    {
      title: "اصلی",
      links: [
        { text: "خانه", href: "/" },
        { text: "جدید", href: "/new" },
        { text: "پرفروش‌ترین‌ها", href: "/bestsellers" },
        { text: "مراقبت پوست", href: "/skincare" },
        { text: "آرایش", href: "/makeup" },
        { text: "همه محصولات", href: "/products" }
      ]
    }
  ]

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-5">
              <h3 className="text-lg font-semibold text-gray-600 dark:text-slate-300/80 border-b pb-2 border-gray-200 dark:border-gray-700">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-slate-300/50 dark:hover:text-gray-400 transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* اطلاعات تماس و حقوق قانونی */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center font-normal">
          <p className="text-sm text-zinc-500 dark:text-slate-400">
            © {new Date().getFullYear()} تمام حقوق محفوظ است
          </p>
          <div className="mt-4 flex justify-center space-x-6 space-x-reverse">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-300"
            >
              حریم خصوصی
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-300"
            >
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer