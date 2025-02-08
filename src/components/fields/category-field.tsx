"use client";
import { useCategoriesQuery } from "@/api/client-api/categories";
import { ICategory } from "@/api/server-api/types";
import React, { useState } from "react";
import AsyncListField from "./async-list-filed";

type Props = {
  name: string;
  defaultValue?: ICategory;
<<<<<<< Updated upstream
  error?: boolean;
  helperText?: string | string[];
};

=======
<<<<<<< Updated upstream
};

export default function CategoryField({ name, defaultValue }: Props) {
=======
  error?: boolean;
  helperText?: string | string[];
  onChange?: (value: ICategory | null) => void;
};

>>>>>>> Stashed changes
export default function CategoryField({
  name,
  defaultValue,
  error,
  helperText,
<<<<<<< Updated upstream
}: Props) {
=======
  onChange,
}: Props) {
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  const [query, setQuery] = useState("");
  const { data, isLoading } = useCategoriesQuery(query);
  return (
    <AsyncListField
<<<<<<< Updated upstream
      error={error}
      helperText={helperText}
=======
<<<<<<< Updated upstream
=======
      error={error}
      onChange={onChange}
      helperText={helperText}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
