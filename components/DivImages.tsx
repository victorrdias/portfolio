import React from "react";
import { Image } from "@chakra-ui/react";
import { ImageProps } from "../utils/interface/ImageProps";

const DivImages: React.FC<ImageProps> = ({ src }) => {
  const imagesrc = src;
  return (
    <>
      {imagesrc !== "/assets/section1.svg" || "/assets/section2.svg" ? (
        <Image
          alt="div-image"
          w="1.5rem"
          position="relative"
          right="20px"
          opacity="0.5"
          src={src}
        />
      ) : (
        <Image
          alt="div-image"
          w="5rem"
          position="relative"
          right="20px"
          opacity="0.5"
          src={src}
        />
      )}
    </>
  );
};

export default DivImages;
