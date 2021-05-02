import { Skeleton as AntdSkeleton, SkeletonProps } from "antd";

const Skeleton: React.FC<SkeletonProps> = (props) => (
  <AntdSkeleton {...props} />
);

export default Skeleton;
