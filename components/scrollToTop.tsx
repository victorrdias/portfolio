import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { HiArrowNarrowUp } from "react-icons/hi";
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
        bottom="40px"
        right="40px"
        aria-label="back to top button"
        icon={<HiArrowNarrowUp />}
        onClick={scrollTop}
        borderRadius="30"
      />
    </Flex>
  );
};

export default ScrollToTop;
