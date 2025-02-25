"use client";
import { deleteSellerAction } from "@/actions/sellers";
import { ISeller, PaginatedResultApi } from "@/api/server-api/types";
import AlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function SellerTable({
  sellers,
}: {
  sellers: Promise<PaginatedResultApi<ISeller>>;
}) {
  const allSeller = use(sellers);
  return (
    <>
      <AITable
        actions={(p) => (
          <Stack direction={"row"}>
            <Tooltip title="ویرایش">
              <IconButton
                color="secondary"
                component={Link}
                href={"/dashboard/sellers/update/" + p.id}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            {/* <Tooltip title="حذف">
              <AlertDialog onConfirm={async () => deleteSellerAction(p.id)}>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </AlertDialog>
            </Tooltip> */}
          </Stack>
        )}
        data={allSeller}
        schema={[
          {
            title: "شناسه",
            render: (row) => row.id,
          },
          {
            title: "نام فروشگاه",
            render: (row) => row.name,
          },
          {
            title: "کد فروشگاه",
            render: (row) => row.code,
          },
        //  TODO: need
          // {
          //   title: "نام فروشنده",
          //   render: (row) => row.user.firstName,
          // },
          // {
          //   title: "نام خانوادگی فروشنده",
          //   render: (row) => row.user.lastName,
          // },
          // {
          //   title: "ایمیل فروشنده",
          //   render: (row) => row.user.email,
          // },
          {
            title: "ایجاد",
            render: (row) => new Date(row.createdAt).toLocaleDateString("fa"),
          },
          {
            title: "بروزرسانی",
            render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
          },
        ]}
      />
    </>
  );
}
export const RoleMap = ["مشتری", "فروشنده", "ادمین"];
