import { Item, Content, Contener, Text, TextContent } from "./Accordion.styled";

export const Accordion = ({ items, title, center }) => {
  return (
    <Contener>
      <Item>
        <Text title={title}>{items.title}</Text>
      </Item>
      <Content>
        <TextContent center={center}>{items.content}</TextContent>
      </Content>
    </Contener>
  );
};
