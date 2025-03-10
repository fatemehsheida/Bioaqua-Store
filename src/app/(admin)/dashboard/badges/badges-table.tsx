"use client";
import { deleteBadgeAction } from "@/actions/badges";
import { IBadge, PaginatedResultApi } from "@/api/server-api/types";
import AlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton, Box } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function BadgesTable({
  badges,
}: {
  badges: Promise<PaginatedResultApi<IBadge>>;
}) {
  const allBadges = use(badges);
  return (
    <>
      <AITable
        actions={(p) => (
          <Stack direction={"row"}>
            <Tooltip title="ویرایش">
              <IconButton
                color="secondary"
                component={Link}
                href={"/dashboard/badges/update/" + p.id}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="حذف">
              <AlertDialog onConfirm={async () => deleteBadgeAction(p.id)}>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </AlertDialog>
            </Tooltip>
          </Stack>
        )}
        data={allBadges}
        schema={[
          {
            title: "شناسه",
            render: (row) => row.id,
          },
          {
            title: "عنوان",
            render: (row) => row.title,
          },
          {
            title: "icon",
            render: (row) =>
            <Link href={row.icon} target="_blank">
            <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={row.icon}
            />

            </Link>
          },
          // {
          //     title: "بروزرسانی",
          //   render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
          // },
        ]}
      />
    </>
  );
}
