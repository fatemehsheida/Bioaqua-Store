"use client";
import { deleteProductAction } from "@/actions/products";
import { IProduct, PaginatedResultApi } from "@/api/server-api/types";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/tables/AITable";
import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import Link from "next/link";

export function ProductTable({
  products,
}: {
  products: PaginatedResultApi<IProduct>;
}) {
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/dashboard/products/update/" + p.code}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteAlertDialog
              onConfirm={async () => deleteProductAction(p.id)}
            >
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
      data={products}
      schema={[
        {
          title: "کد",
          render: (row) => row.code,
        },
        {
          title: "آیکون",
          render: (row) => row.images?.main ? (
            <Link href={row.images.main} target="_blank">
              <Box
                component="img"
                sx={{
                  height: 50,
                  width: 50,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="Product image"
                src={row.images.main}
              />
            </Link>
          ) : "-",
        },
        {
          title: "نام فارسی",
          render: (row) => row.titleFa || "-",
        },
        {
          title: "نام انگلیسی",
          render: (row) => row.titleEn || "-",
        },
        {
          title: "وضعیت فروش",
          render: (row) => row.status,
        },
        {
          title: "رنگ ها",
          render: (row) => row.colors?.map((item) => (
            <Box
              key={item.hexCode}
              sx={{
                bgcolor: item.hexCode,
                height: 20,
                width: 20,
                display: 'inline-block',
                mx: 0.5,
                border: "1px solid #ccc"
              }}
            />
          )) || "-",
        },
        {
          title: "برچسب ها",
          render: (row) => row.badges
            ?.join("، ") || "-",
        },
        {
          title: "دسته بندی",
          render: (row) => row.category?.titleFa || "-",
        },
        {
          title: "برند",
          render: (row) => row.brand?.titleFa || "-",
        },
        {
          title: "توضیحات",
          render: (row) => row.review || "-",
        },
        {
          title: "توضیحات تخصصی",
          render: (row) => row.expert_review || "-",
        },
        {
          title: "بروزرسانی",
          render: (row) => row.updatedAt ? 
            new Date(row.updatedAt).toLocaleDateString("fa") : "-",
        },
      ]}
    />
  );
}
