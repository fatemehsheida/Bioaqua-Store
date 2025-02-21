"use server";
import { Skeleton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";

type Props = {
  colCount: number;
};
export default async function TableLoading({ colCount }: Props) {
  const array = new Array(colCount).fill(0);
  return (
    <Table id="12">
      <TableBody>
        <TableRow>
          {array.map((k, i) => (
            <TableCell key={i} sx={{ minHeight: 10 }}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
