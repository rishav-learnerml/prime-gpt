import { Skeleton } from "@/components/ui/skeleton";

const Shimmer = () => {
  return (
    <div className="bg-black w-100 flex p-10 flex-wrap gap-4 h-full">
      <Skeleton className="h-80 w-[90vw] rounded-xl" />
      <Skeleton className="h-80 w-[90vw] rounded-xl" />
      <div className="flex gap-4">
        <Skeleton className="h-80 w-[22vw] rounded-xl" />
        <Skeleton className="h-80 w-[22vw] rounded-xl" />
        <Skeleton className="h-80 w-[22vw] rounded-xl" />
        <Skeleton className="h-80 w-[21vw] rounded-xl" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-80 w-[45vw] rounded-xl" />
        <Skeleton className="h-80 w-[44vw] rounded-xl" />
      </div>
    </div>
  );
};

export default Shimmer;
