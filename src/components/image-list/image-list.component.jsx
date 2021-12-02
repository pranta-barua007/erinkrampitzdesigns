import * as React from "react";

import { ImagesListContainer, ImagesListItem } from "./image-list.styled";

export default function ImagesList({ itemData }) {
  return (
    <ImagesListContainer>
      {itemData.map((item) => (
        <ImagesListItem key={item.img} img={item.img} title={item.title} />
      ))}
    </ImagesListContainer>
  );
}
