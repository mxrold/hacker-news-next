import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LoadingSkeletonProps } from "./loadingSkeleton.interface";

const LoadingSkeleton = ({
  quantity,
  repeat,
  containerClassName,
  containerChildName,
  skeletonClassName,
}: LoadingSkeletonProps): JSX.Element => {
  const renderSkeletons = (): React.ReactNode[] => {
    const skeletons = [];
    for (let i = 0; i < (repeat || 1); i++) {
      skeletons.push(
        <div key={i} className={containerChildName}>
          <Skeleton count={quantity} className={skeletonClassName} />
        </div>,
      );
    }
    return skeletons;
  };

  return <div className={containerClassName}>{renderSkeletons()}</div>;
};

export default LoadingSkeleton;
