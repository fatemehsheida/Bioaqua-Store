"use client";

import { createOrUpdateProductAction } from "@/actions/products";
import { ICategory, IProduct } from "@/api/server-api/types";
import {
  Alert,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useActionState, useState, useRef } from "react";
import dynamic from "next/dynamic";
import AIForm from "./AIForm";
import SubmitButton from "../SubmitButton";
import CategoryField from "../fields/category-field";
import SingleUpload from "../upload/single-upload";
import BrandField from "../fields/brand-field";
import BadgeField from "../fields/badges-fields";
import ColorsField from "../fields/colors-field";
import { Bold, ClassicEditor, Essentials, Italic, Paragraph } from "ckeditor5";
import { FormatPainter } from "ckeditor5-premium-features";

const CustomEditor = dynamic( () => import( '@/utils/custom-editor' ), { ssr: false } );

// Dynamically import CKEditor to avoid SSR issues
const CKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  { ssr: false }
);

type ProductFormProps = {
  defaultValue?: IProduct;
};

function ProductForm({ defaultValue }: ProductFormProps) {
  const [state, action] = useActionState(createOrUpdateProductAction, {
    message: "",
    success: false,
  });
  const [category, setCategory] = useState<ICategory | null>(
    defaultValue?.category ?? null
  );
  // console.log(defaultValue)
  // console.log(defaultValue?.expert_reviews)

  // Refs for hidden textareas to store CKEditor content
  const expertReviewRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
    <form action={action}>
      {defaultValue?.id && (
        <input hidden name="id" defaultValue={defaultValue.id} />
      )}
      {state.message && <Alert severity="warning">{state.message}</Alert>}
      <Stack spacing={2} mt={2}>
        <Stack gap={2} direction="row">
          <SingleUpload
            name="images.main"
            defaultValue={defaultValue?.images.main}
          />
          <SingleUpload
            multi
            name="images.list"
            defaultValue={defaultValue?.images.list}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CategoryField
            onChange={setCategory}
            name="category"
            defaultValue={defaultValue?.category}
          />
          <BrandField name="brand" defaultValue={defaultValue?.brand} />
        </Stack>
        <Stack direction="row" gap={2}>
          <BadgeField name="badges" defaultValue={defaultValue?.badges} />
          <ColorsField name="colors" defaultValue={defaultValue?.colors} />
        </Stack>
        <AIForm
          schema={[
            {
              name: "code",
              type: "number",
              label: "کد کالا",
              defaultValue: defaultValue?.code,
              error: !!state.errors?.code,
              helperText: state.errors?.code,
            },
            {
              name: "titleFa",
              label: "نام فارسی",
              size: 6,
              type: "string",
              defaultValue: defaultValue?.titleFa,
              error: !!state.errors?.titleFa,
              helperText: state.errors?.titleFa,
            },
            {
              name: "titleEn",
              label: "نام انگلیسی",
              size: 6,
              type: "string",
              defaultValue: defaultValue?.titleEn,
              error: !!state.errors?.titleEn,
              helperText: state.errors?.titleEn,
            },
            {
              name: "price",
              label: "قیمت",
              type: "number",
              defaultValue: defaultValue?.bestSeller.lastPrice,
              error: !!state.errors,
              helperText: state.errors,
            },
          ]}
        />
        
        {/* Rich Text Editors */}
        <Divider />
        <Typography variant="h6">بررسی</Typography>
        <Box>
          <textarea
            name="review"
            ref={expertReviewRef}
            style={{ display: "none" }}
            defaultValue={defaultValue?.expert_reviews || ""}
          />
        <CustomEditor
  initialData={defaultValue?.expert_reviews || ''}
  editor={ClassicEditor}
  onChange={(event, editor) => {
    const data = editor.getData();
    if (expertReviewRef.current) expertReviewRef.current.value = data;
  }}
/>
          {state.errors?.expert_reviews && (
            <Typography color="error" variant="body2">
              {state.errors.expert_reviews}
            </Typography>
          )}
        </Box>

       

        <Divider />
        <Typography>ویژگی ها</Typography>
        {category?.properties.map((item, i) => (
          <Stack gap={1} key={item.id}>
            <input
                
              name={`specifications.${i}.name`}
              defaultValue={item.name}
            />
            <input
              
              name={`specifications.${i}.title`}
              defaultValue={item.label}
            />
            <Box>
              {item.options?.length ? (
                <TextField
                  select
                  fullWidth
                  defaultValue={
                    defaultValue?.specifications.find(
                      (i) => i.name === item.name
                    )?.value ?? ""
                  }
                  label={item.label}
                  name={`specifications.${i}.value`}
                >
                  <MenuItem value="">
                    لطفا یک مورد را انتخاب کنید
                  </MenuItem>
                  {item.options.map((o) => (
                    <MenuItem value={o.value} key={o.id}>
                      {o.value}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <TextField
                  fullWidth
                  label={item.label}
                  defaultValue={
                    defaultValue?.specifications.find(
                      (i) => i.name === item.name
                    )?.value
                  }
                  name={`specifications.${i}.value`}
                />
              )}

              <FormControlLabel
                control={<Checkbox name={`specifications.${i}.isDefault`} />}
                label={"آیا در اول صفحه نمایش داده شود؟"}
              />
            </Box>
          </Stack>
        ))}
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
    </>
  );
}

export default ProductForm;