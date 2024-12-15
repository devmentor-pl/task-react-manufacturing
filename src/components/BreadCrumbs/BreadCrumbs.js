import ARROW from "../../assets/arrow.svg";
import { Image, ItemLink, List, ItemList } from "./BreadCrumbs.styled";
import { useBreadCrumbs } from "../../hooks/useBreadCrumbs";

export const BreadCrumbs = () => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <List>
      {breadCrumbs.map((crumb) => {
        return (
          <ItemList key={crumb.path}>
            <ItemLink end to={crumb.path}>
              {crumb.categoryName}
            </ItemLink>
            <Image src={ARROW} alt="arrow icon" />
          </ItemList>
        );
      })}
    </List>
  );
};
