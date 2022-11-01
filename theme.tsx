import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        width: "100vw",
        p: "0",
        margin: "0",
      },
    },
  },
  fonts: {
    body: `"kelly-slab", kelly-slab`,
  },
  colors: {
    primaryColor: "#54edba",
  },
  components: {
    variants: {
      text: {
        fontSize: { base: "12", md: "20", lg: "20" },
        lineHeight: { base: "28px", md: "34px" },
        fontWeight: "normal",
        letterSpacing: "2",
        color: "white",
      },
    },
  },
});
export default theme;
