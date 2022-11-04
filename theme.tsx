import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
        margin: "0",
      },
    },
  },
  fonts: {
    body: `"inter", inter`,
  },
  colors: {
    primaryColor: "#54edba",
  },
  components: {
    Subhero: {},
  },
});
export default theme;
