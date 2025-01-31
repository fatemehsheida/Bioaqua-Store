import { getBrandById } from "@/api/server-api/brands";
import { ServerPageProps } from "@/api/server-api/types";
import { BrandForm } from "@/components/forms/brand-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function Page({ params }: ServerPageProps) {
  const { id } = await params;
  const brand = await getBrandById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش برند</Typography>
          <BrandForm brand={brand} />
        </CardContent>
      </Card>
    </Box>
  );
}
