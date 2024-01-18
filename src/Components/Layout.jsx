import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Outlet } from "react-router-dom";
import { createTheme } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

import { DisplayTheme, useThemeState } from "../Context/context";

import Logo from "../assets/nltLogo.png";
import SmallMenu from "../assets/menu.svg";
import Footer from "./Footer";
import NavItems from "./Navbar/NavItems";
import NavItemsForSmallScreen from "./Navbar/NavItemsForSmallScreen";

const drawerWidth = "60vw";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 920,
      lg: 1200,
      xl: 1536,
    },
  },
});

function Layout(props) {
  const [theme, setTheme] = useThemeState();
  const { darkMode, myanmarLanguage } = theme;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{ textAlign: "center", height: "100vh" }}
      className={darkMode ? "bg-[#060D1B] text-white " : "bg-white text-theme"}
    >
      <Link to="/">
        <div className="flex justify-center items-center p-2">
          <img src={Logo} alt="Logo" className="w-1/6" />
        </div>
      </Link>

      <Divider />
      <List className="flex flex-col">
        <NavItemsForSmallScreen handleDrawerToggle={handleDrawerToggle} />
        {/* <NavItems /> */}
      </List>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          mt: 2,
        }}
      >
        {/* {myanmarLanguage ? (
          <Typography
            onClick={() => setTheme({ type: "CHANGE_LANGUAGE" })}
            variant="h6"
            className="cursor-pointer"
          >
            Eng
          </Typography>
        ) : (
          <Typography
            onClick={() => setTheme({ type: "CHANGE_LANGUAGE" })}
            variant="h6"
          >
            Myn
          </Typography>
        )} */}

        {darkMode ? (
          <LightModeIcon
            fontSize="large"
            onClick={() => setTheme({ type: "CHANGE_THEME" })}
            className="text-white"
          />
        ) : (
          <DarkModeIcon
            fontSize="large"
            onClick={() => setTheme({ type: "CHANGE_THEME" })}
            className="text-theme"
          />
        )}
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <DisplayTheme.Provider value={theme}>
      <Box
        id="window"
        sx={{ display: "flex" }}
        className={
          darkMode ? "bg-[#060D1B] text-white dark" : "bg-white text-black"
        }
      >
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            component="nav"
            sx={{ backgroundColor: darkMode ? "#060D1B" : "white" }}
            position="fixed"
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Link to="/">
                <div className="flex items-center  h-20 ">
                  <img src={Logo} alt="Logo" className=" h-full" />
                </div>
              </Link>

              <Box className="md:flex justify-center hidden gap-4">
                <NavItems />
              </Box>
              <Box className="md:flex justify-center items-center hidden gap-8">
                {/* {myanmarLanguage ? (
                  <Typography
                    variant="h6"
                    sx={{
                      color: darkMode ? "white" : "#193967",
                      mt: 0.5,
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                    onClick={() => setTheme({ type: "CHANGE_LANGUAGE" })}
                  >
                    Eng
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    sx={{
                      color: darkMode ? "white" : "#193967",
                      mt: 0.5,
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                    onClick={() => setTheme({ type: "CHANGE_LANGUAGE" })}
                  >
                    Myn
                  </Typography>
                )} */}

                {darkMode ? (
                  <LightModeIcon
                    fontSize="large"
                    onClick={() => setTheme({ type: "CHANGE_THEME" })}
                    className="text-white"
                  />
                ) : (
                  <DarkModeIcon
                    fontSize="large"
                    onClick={() => setTheme({ type: "CHANGE_THEME" })}
                    className="text-theme"
                  />
                )}
              </Box>
              <img
                onClick={handleDrawerToggle}
                src={SmallMenu}
                className="md:hidden"
              />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component={"main"} className="w-full">
          {/* <Toolbar /> */}
          <React.Suspense
            fallback={
              <div className="h-screen flex justify-center items-center text-4xl">
                Dashboard is loading ...
              </div>
            }
          >
            <Outlet />
          </React.Suspense>
          <Footer />
        </Box>
      </Box>
    </DisplayTheme.Provider>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
