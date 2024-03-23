import { Skeleton as MuiSkeleton, Stack } from "@mui/material";

export const SkeletonCard = () => {
  return (
    <>
      <div className="productCardContainer">
        <Stack>
          <MuiSkeleton variant="text" width={200} height={20} />
          <MuiSkeleton variant="rectangular" width="100%" height={400} />
          <MuiSkeleton variant="text" width={80} height={16} />
        </Stack>
        <Stack>
          <MuiSkeleton variant="text" width={200} height={20} />
          <MuiSkeleton variant="rectangular" width="100%" height={400} />
          <MuiSkeleton variant="text" width={80} height={16} />
        </Stack>
        <Stack>
          <MuiSkeleton variant="text" width={200} height={20} />
          <MuiSkeleton variant="rectangular" width="100%" height={400} />
          <MuiSkeleton variant="text" width={80} height={16} />
        </Stack>
      </div>
    </>
  );
};
