import { Skeleton } from "@/components/ui/skeleton";

const Shimmer = () => {
  return (
    <div className="bg-black w-100 flex p-10 flex-wrap gap-4 h-full">
      <Skeleton className="h-80 w-[90vw] rounded-xl bg-muted/50" />
      <Skeleton className="h-80 w-[90vw] rounded-xl bg-muted/50" />
      <div className="flex gap-4">
        <Skeleton className="h-80 w-[22vw] rounded-xl bg-muted/50" />
        <Skeleton className="h-80 w-[22vw] rounded-xl bg-muted/50" />
        <Skeleton className="h-80 w-[22vw] rounded-xl bg-muted/50" />
        <Skeleton className="h-80 w-[21vw] rounded-xl bg-muted/50" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-80 w-[45vw] rounded-xl bg-muted/50" />
        <Skeleton className="h-80 w-[44vw] rounded-xl bg-muted/50" />
      </div>
    </div>
  );
};

export default Shimmer;
