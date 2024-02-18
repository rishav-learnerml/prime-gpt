import React from "react";
import { Skeleton } from "../components/ui/skeleton";

const ShimmerCards = () => {
  return (
    <div className="mx-10 my-10">
      <Skeleton className="h-5 w-60 rounded-xl ms-3" />
      <div className="grid grid-flow-col gap-4">
        <Skeleton className="h-36 w-60 rounded-xl mx-auto mt-3 " />
        <Skeleton className="h-36 w-60 rounded-xl mx-auto mt-3 " />
        <Skeleton className="h-36 w-60 rounded-xl mx-auto mt-3 " />
        <Skeleton className="h-36 w-60 rounded-xl mx-auto mt-3 " />
        <Skeleton className="h-36 w-60 rounded-xl mx-auto mt-3 " />
      </div>
    </div>
  );
};

export default ShimmerCards;
