"use client";
import { deleteCategoryAction } from "@/actions/categories";
import {
  ICategory,
  IProperty,
  PaginatedResultApi,
} from "@/api/server-api/types";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton, Box } from "@mui/material";
import Link from "next/link";

export function CategoriesTable({
  categories,
}: {
  categories: PaginatedResultApi<ICategory>;
}) {
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/dashboard/categories/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteAlertDialog
              onConfirm={async () => deleteCategoryAction(p.id)}
            >
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
      subTable={{
        header: "ویژگی ها",
        key: "properties",
        schema: [
          {
            title: "شماره",
            render: (row: IProperty) => row.id,
          },
          {
            title: "برچسب",
            render: (row) => row.label,
          },
          {
            title: "نام",
            render: (row) => row.name,
          },
          {
            title: "نوع داده",
            render: (row) => row.type,
          },
        ],
      }}
      data={categories}
      schema={[
        // {
        //   title: "آیکون",
        //   render: (row) =>
        //     <Box
        //       component="img"
        //       sx={{
        //         height: 80,
        //         width: 80,
        //         maxHeight: { xs: 233, md: 167 },
        //         maxWidth: { xs: 350, md: 250 },
        //       }}
        //       alt="The house from the offer."
        //       src={row.icon}
        //     />
        // },
        {
          title: "ویژگی ها",
          render: (row) => row.properties?.map((item) => (
            <Box 
              key={item.id}
              sx={{
                display: 'inline-block',
                p: 0.5,
                m: 0.2,
                bgcolor: '#f5f5f5',
                borderRadius: 1
              }}
            >
              {item.name}
            </Box>
          )) || "-",
        },
        {
          title: "نشانک",
          render: (row) => row.slug || "-",
        },
        {
          title: "دسته بندی مادر",
          render: (row) => row.parent?.slug ?? "-",
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
          title: "ایجاد",
          render: (row) => row.createdAt ? 
            new Date(row.createdAt).toLocaleDateString("fa") : "-",
        },
        {
          title: "بروزرسانی",
          render: (row) => row.updatedAt ? 
            new Date(row.updatedAt).toLocaleDateString("fa") : "-",
        },
        {
          title: "شرایط بازگشت",
          render: (row) => row.returnReasonAlert,
        },
      ]}
    />
  );
}
