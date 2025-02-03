import { BrandForm } from "@/components/forms/brand-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function CreateCity() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد برند جدید</Typography>
          <BrandForm />
        </CardContent>
      </Card>
    </Box>
  );
}
