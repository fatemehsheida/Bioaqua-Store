import { getBadgeById } from "@/api/server-api/badges";
import { ServerPageProps } from "@/api/server-api/types";
import { CreateBadgeForm } from "@/components/forms/create-badge";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateBadgePage({ params }: ServerPageProps) {
  const { id } = await params;
  const badge = await getBadgeById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش برچسب</Typography>
          <CreateBadgeForm defaultValue={badge} />
        </CardContent>
      </Card>
    </Box>
  );
}
