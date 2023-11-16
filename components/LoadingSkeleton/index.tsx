import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkeleton(): JSX.Element {
  return (
    <div className="container grid lg:grid-cols-2 h-screen my-12">
      <div className="lg:mr-4">
        <Skeleton count={10} className="h-16 mb-4" />
      </div>
      <div className="lg:ml-4">
        <Skeleton count={10} className="h-16 mb-4" />
      </div>
    </div>
  );
}
