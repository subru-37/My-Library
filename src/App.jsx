import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Box, Button } from "@chakra-ui/react";
import NavBar from "./Components/NavBar/NavBar";
import { useColorMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

function App() {
  const [drawer, setDrawer] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("light.bg", "dark.bg");
  const textColor = useColorModeValue("light.text", "dark.text");
  const colorType = colorMode === "light";
  return (
    // <Button borderRadius={'lg'}>
    //   Hello world!
    // </Button>
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        background: colorType ? "light.bg" : "dark.bg",
      }}
    >
      <NavBar drawer={drawer} setDrawer={setDrawer}/>
    </Box>
  );
}

export default App;
