"use client";
import { useCategoriesQuery } from "@/api/client-api/categories";
import { ICategory } from "@/api/server-api/types";
import React, { useState } from "react";
import AsyncListField from "./async-list-filed";

type Props = {
  name: string;
  defaultValue?: ICategory;
  error?: boolean;
  helperText?: string | string[];
  onChange?: (value: ICategory | null) => void;
};

export default function CategoryField({
  name,
  defaultValue,
  error,
  helperText,
  onChange,
}: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useCategoriesQuery(query);
  return (
    <AsyncListField
      error={error}
      onChange={onChange}
      helperText={helperText}
      options={data?.results ?? []}
      getOptionLabel={(o) => o.titleFa}
      groupBy={(o) => o.parent?.titleFa ?? "root"}
      isLoading={isLoading}
      label="دسته بندی"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
