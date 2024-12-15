import { CATEGORIES } from "../../constants/categories";
import ARROW_ICON from "../../assets/arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import {
  CategoryLink,
  ExpandableContainer,
  Image,
  ItemLink,
  List,
  ListItem,
  Title,
} from "./ExpandableMenu.styled";
import { useState } from "react";

export const ExpandableMenu = () => {
  const params = useParams();
  const activePath = params.category;

  return (
    <ExpandableContainer>
      <Title>{params.gender}</Title>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <ListItem key={category.path}>
              <CategoryLink to={`/${params.gender}/${category.path}`}>
                {category.categoryName}
                <Image
                  src={ARROW_ICON}
                  $active={activePath === category.path}
                />
              </CategoryLink>
              {activePath === category.path && (
                <List>
                  {category.subCategories.map((subCategory) => {
                    return (
                      <ListItem key={subCategory.path}>
                        <ItemLink
                          to={`/${params.gender}/${params.category}/${subCategory.path}`}
                        >
                          {subCategory.categoryName}
                        </ItemLink>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </ListItem>
          );
        })}
      </ul>
    </ExpandableContainer>
  );
};
