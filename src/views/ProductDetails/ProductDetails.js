import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { Photos } from "../../components/Photos/Photos";
import { Details } from "../../components/Details/Details";
import { useLoaderData } from "react-router-dom";
import { Content, ContentProduct } from "./ProductDetails.style";

export const ProductDetails = () => {
  const product = useLoaderData();
  const accordingContent = [
    {
      title: "description",
      content: product.maintenanceInfo,
    },
  ];

  return (
    <FlexContainer>
      <Content>
        <div>
          <BreadCrumbs />
        </div>
        <ContentProduct>
          <Photos product={product} />
          <Details product={product} content={accordingContent[0]} />
        </ContentProduct>
      </Content>
    </FlexContainer>
  );
};
