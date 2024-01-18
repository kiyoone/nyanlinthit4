import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";
import { Dropdown } from "flowbite-react";

import { DisplayTheme } from "../Context/context";

const NavItemsForSmallScreen = ({ handleDrawerToggle }) => {
  const theme = useContext(DisplayTheme);
  const { darkMode } = theme;

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <ListItem
            onClick={() => {
              handleScroll();
              handleDrawerToggle();
            }}
          >
            <ListItemButton
              sx={{
                borderRadius: "12px",
                fontWeight: 600,

                color: darkMode
                  ? isActive
                    ? "#193967"
                    : "white"
                  : isActive
                  ? "white"
                  : "#193967",
                backgroundColor: isActive
                  ? darkMode
                    ? "white"
                    : "#193967"
                  : "transparent",
              }}
            >
              <ListItemText>
                <Typography variant="p">Home</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </NavLink>
      <NavLink to="dashboard">
        {({ isActive }) => (
          <ListItem
            onClick={() => {
              handleScroll();
              handleDrawerToggle();
            }}
          >
            <ListItemButton
              sx={{
                borderRadius: "12px",

                fontWeight: 600,
                color: darkMode
                  ? isActive
                    ? "#193967"
                    : "white"
                  : isActive
                  ? "white"
                  : "#193967",
                backgroundColor: isActive
                  ? darkMode
                    ? "white"
                    : "#193967"
                  : "transparent",
              }}
            >
              <ListItemText>
                <Typography variant="p">Dashboard</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </NavLink>
      <ListItem>
        <ListItemButton>
          <ListItemText
            sx={{
              borderRadius: "12px",
              fontWeight: "600",
              color: darkMode ? "white" : "#193967",
              backgroundColor: "transparent",
            }}
          >
            <div className="font-semibold rounded-2xl">
              <Dropdown
                inline={true}
                label="Resources"
                className="rounded-2xl font-semibold"
                placement="bottom"
              >
                <Dropdown.Item>
                  <NavLink
                    className="w-full"
                    to="resources/weekly_highlights/acm"
                  >
                    {({ isActive }) => (
                      <Paper
                        variant={isActive ? "contained" : ""}
                        sx={{
                          borderRadius: "0px",
                          width: "100%",
                          fontWeight: 600,
                          color: "#193967",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => {
                          handleScroll();
                          handleDrawerToggle();
                        }}
                      >
                        <Typography variant="p" align="center">
                          Weekly Highlights
                        </Typography>
                        <hr className="mt-2" />
                      </Paper>
                    )}
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink className="w-full" to="resources/publication/rps">
                    {({ isActive }) => (
                      <Paper
                        variant={isActive ? "contained" : ""}
                        sx={{
                          borderRadius: "0px",
                          width: "100%",
                          fontWeight: 600,
                          color: "#193967",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => {
                          handleScroll();
                          handleDrawerToggle();
                        }}
                      >
                        <Typography variant="p" align="center">
                          Publication
                        </Typography>
                        <hr className="mt-2" />
                      </Paper>
                    )}
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink
                    className="w-full"
                    to="resources/statements/statements"
                  >
                    {({ isActive }) => (
                      <Paper
                        variant={isActive ? "contained" : ""}
                        sx={{
                          borderRadius: "0px",
                          width: "100%",
                          fontWeight: 600,
                          color: "#193967",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => {
                          handleScroll();
                          handleDrawerToggle();
                        }}
                      >
                        <Typography variant="p" align="center">
                          Statements
                        </Typography>
                        <hr className="mt-2" />
                      </Paper>
                    )}
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink className="w-full" to="resources/advocacy/advocacy">
                    {({ isActive }) => (
                      <Paper
                        variant={isActive ? "contained" : ""}
                        sx={{
                          borderRadius: "0px",
                          width: "100%",
                          fontWeight: 600,
                          color: "#193967",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => {
                          handleScroll();
                          handleDrawerToggle();
                        }}
                      >
                        <Typography variant="p" align="center">
                          Advocacy
                        </Typography>
                        <hr className="mt-2" />
                      </Paper>
                    )}
                  </NavLink>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <NavLink to="aboutus">
        {({ isActive }) => (
          <ListItem
            variant={isActive ? "contained" : ""}
            onClick={() => {
              handleScroll();
              handleDrawerToggle();
            }}
          >
            <ListItemButton
              sx={{
                borderRadius: "12px",
                fontWeight: 600,

                color: darkMode
                  ? isActive
                    ? "#193967"
                    : "white"
                  : isActive
                  ? "white"
                  : "#193967",
                backgroundColor: isActive
                  ? darkMode
                    ? "white"
                    : "#193967"
                  : "transparent",
              }}
            >
              <ListItemText>
                <Typography variant="p">About Us</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </NavLink>
    </>
  );
};

export default NavItemsForSmallScreen;
