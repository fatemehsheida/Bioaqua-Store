"use client";
import { deleteBrandAction } from "@/actions/brands";
import { IBrand, PaginatedResultApi } from "@/api/server-api/types";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton, Box } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function BrandsTable({
  brands,
}: {
  brands: Promise<PaginatedResultApi<IBrand>>;
}) {
  const brandsList = use(brands);
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/dashboard/brands/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="حذف">
            <DeleteAlertDialog onConfirm={async () => deleteBrandAction(p.id)}>
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
      data={brandsList}
      schema={[
        {
          title: "آیکون",
          render: (row) =>
          <Link href={row.logo} target="_blank">
          <Box
          component="img"
          sx={{
            height: 80,
            width: 80,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={row.logo}
          />

          </Link>
        },
        {
          title: "نشانک",
          render: (row) => row.slug,
        },
        {
          title: "نام فارسی",
          render: (row) => row.titleFa,
        },
        {
          title: "نام انگلیسی",
          render: (row) => row.titleEn,
        },
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
  );
}
