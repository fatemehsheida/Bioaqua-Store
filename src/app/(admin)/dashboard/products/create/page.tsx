import ProductForm from "@/components/forms/product-form";
import { BoProductFormx, Card, CardContent, Typography } from "@mui/material";

export default async function CreateProductPage() {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد محصول جدید</Typography>
          <ProductForm />
        </CardContent>
      </Card>
    </Box>
  );
}
