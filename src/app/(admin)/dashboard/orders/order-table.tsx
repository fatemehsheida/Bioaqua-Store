"use client";
import { IOrder, IOrderItem, PaginatedResultApi } from "@/api/server-api/types";
import AITable from "@/components/tables/AITable";
import { Box, Typography } from "@mui/material";
import { use } from "react";
export function OrdersTable({
  orders,
}: {
  orders: Promise<PaginatedResultApi<IOrder>>;
}) {
  const allOrders = use(orders);
  return (
    <>
      <AITable
        data={allOrders}
        schema={[
          {
            title: "شناسه",
            render: (row) => row.id,
          },
          {
            title: "کاربر",
            render: (row) => row.user.email,
          },
          {
            title: "آدرس ارسال",
            render: (row) => `شهر:${row.shippingAddress.city  }    ,     خیابان:${ row.shippingAddress.street}`
        },
        {
            // TODO:price
            title: "مبلغ کل سفارش",
            render: (row) => row.price,
          },
          {
            title: "اقلام خریداری شده",
            render: (row) => row.orderItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  // استایل‌های معتبر برای سیستم طراحی MUI
                  mx: 2,
                  borderColor: 'divider', // رنگ حاشیه
                  borderRadius: 1, // انحنا
                  bgcolor: 'background.paper', // رنگ پس‌زمینه
                  display: "inline",

                }}
              >
                {/* نمایش اطلاعات محصول */}
                {item.productSeller.product.titleFa}
              </Box>
            ))
          },
          {
            title: "ایجاد",
            render: (row) => new Date(row.createdAt).toLocaleDateString("fa"),
          },
          {
            title: "زمان تحویل",
            render: (row) => {
              if (!row.createdAt) return "-";
              const deliveryDate = new Date(row.createdAt);
              deliveryDate.setDate(deliveryDate.getDate() + 2);
              return deliveryDate.toLocaleDateString("fa");
            },
          },
          {
            title: "وضعیت",
            render: (row) => row.orderStatus,
          },
          // {
          //   title: "شهر",
          //   render: (row) => row.shippingAddress.city,
          // },
        ]}
        subTable={{
          header: "کالاها",
          key: "orderItems",
          schema: [
            {
              title: "کالا",
              render: (row: IOrderItem) => row.productSeller.product.titleFa,
            },
            {
              title: "فروشنده",
              render: (row: IOrderItem) => row.seller.name,
            },
            {
              title: "تعداد",
              render: (row: IOrderItem) => row.quantity,
            },
            {
              title: "قیمت",
              render: (row: IOrderItem) => row.productSeller.price,
            },
          ],
        }}
      />
    </>
  );
}
export const RoleMap = ["مشتری", "فروشنده", "ادمین"];
