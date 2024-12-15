import { useState } from "react";
import { Thumbnails, Image, ZoomImage, Wrapper } from "./Photos.styled";

export const Photos = ({ product }) => {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);
  return (
    <Wrapper>
      <Thumbnails>
        {product.photos.map((photo) => {
          return (
            <Image
              key={photo}
              $active={currentPhoto === photo}
              onClick={() => setCurrentPhoto(photo)}
              src={photo}
              alt="pitcure of clothes"
            />
          );
        })}
      </Thumbnails>
      <ZoomImage src={currentPhoto} alt="clothe" />
    </Wrapper>
  );
};
