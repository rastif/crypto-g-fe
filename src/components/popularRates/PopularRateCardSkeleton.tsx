import styled from "styled-components";
import Skeleton from "components/Skeleton";
import Card from "components/Card";

const PopularRateCardSkeleton: React.FC = () => (
  <>
    <Card>
      <Skeleton active />
    </Card>
    <Card>
      <Skeleton active />
    </Card>
    <Card>
      <Skeleton active />
    </Card>
  </>
);

export default PopularRateCardSkeleton;
