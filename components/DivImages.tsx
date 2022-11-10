import React from "react";
import { Image } from "@chakra-ui/react";
import { ImageProps } from "../utils/interface/ImageProps";

const DivImages: React.FC<ImageProps> = ({ src, size }) => {
  const imagesrc = src;
  return (
    <>
      <Image
        w={size}
        src={src}
        alt="div-image"
        position="relative"
        right="20px"
        opacity="0.5"
      />
    </>
  );
};

export default DivImages;
