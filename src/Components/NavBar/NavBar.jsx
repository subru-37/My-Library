import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { MoonIcon } from "@chakra-ui/icons";
// import { MenuIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { color } from "framer-motion";
const NavBar = ({drawer, setDrawer}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position:'absolute',
        top:'0',
        left:'0',
        justifyContent: "center",
        width: "100vw",
        height: "75px",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        // opacity:'0.2',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 10px 1px rgba(0, 0, 0, .25)',
        // color: {colorMode === 'light' ? 'light.bg' : 'dark.bg'}
        // padding: {base:'5px 10px',md:'5px 20px'},
      }}
      //   border={{colorMode === 'light' ? '2px solid light.primary' : '2px solid dark.primary'}}
    >
        <Box as="span" sx={{
            width:'100vw',
            position:'absolute',
            top:'0',
            left:'0',
            height:'100%',
            backgroundColor: colorMode === 'light' ? 'dark.bg' : 'light.bg',
            opacity: colorMode === 'light' ? '0.1': '0.05',
            zIndex:'-1',
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
        }}>

        </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        zIndex:'2'

        }}
        w={["95vw"]}
      >
        <Box>
          <Text color={colorMode === 'light' ? 'light.primary' : 'dark.primary'}>My Icon</Text>
        </Box>
        <Box display={{ base: "block", md: "none" }} onClick={()=>setDrawer(!drawer)}>
          {drawer ? <CloseIcon /> : <HamburgerIcon />}
        </Box>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          //   h={'20px'}
          //   w='20px'
        />
      </Box>
    </Box>
  );
};

export default NavBar;
