"use client";
import { IUser, PaginatedResultApi } from "@/api/server-api/types";
import AITable from "@/components/tables/AITable";
import { Edit } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function UsersTable({
  users,
}: {
  users: Promise<PaginatedResultApi<IUser>>;
}) {
  const allUsers = use(users);
  return (
    <>
      <AITable
        actions={(p) => (
          <Stack direction={"row"}>
            <Tooltip title="ویرایش">
              <IconButton
                color="secondary"
                component={Link}
                href={"/dashboard/users/update/" + p.id}
              >
                <Edit />
              </IconButton>
            </Tooltip>
          </Stack>
        )}
        data={allUsers}
        schema={[
          {
            title: "شناسه",
            render: (row) => row.id,
          },
          {
            title: "نام",
            render: (row) => row.firstName,
          },
          {
            title: "نام خانوادگی",
            render: (row) => row.lastName,
          },
          {
            title: "ایمیل",
            render: (row) => row.email,
          },
          {
            title: "وضعیت",
            render: (row) => (row.isActive ? "فعال" : "غیرفعال"),
          },
          {
            title: "نقش",
            render: (row) => RoleMap[row.role - 1],
          },
          {
            title: "ایجاد",
            render: (row) => new Date(row.createdAt).toLocaleDateString("fa"),
          },
          {
            title: "بروزرسانی",
            render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
          },,
        ]}
      />
    </>
  );
}
const RoleMap = ["مشتری", "فروشنده", "ادمین"];
