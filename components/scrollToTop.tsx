import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useState } from "react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }
  return (
    <Flex>
      <IconButton
        display={visible ? "grid" : "none"}
        position="fixed"
        size="sm"
        fontSize="2xl"
        _hover={{
          color: "#11a271",
        }}
        bgColor="#1d1d1d"
        color="primaryColor"
        bottom="40px"
        right="40px"
        aria-label="back to top button"
        icon={<FaArrowCircleUp />}
        onClick={scrollTop}
        border="2px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      />
    </Flex>
  );
};

export default ScrollToTop;
