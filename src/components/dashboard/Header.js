import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  styled,
  alpha,
  InputBase,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import { articlesActions } from "../../store/articles/articles-slice";
import { loginActions } from "../../store/login/login-slice.js";



const Logout = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  // minWidth:'300px',
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);



  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/");
    }
    
  }, []);

  

  const logoutHandler = async () => {
   await localStorage.removeItem("token");
    dispatch(loginActions.Logout());
    navigate("/")
  };

  const searchHandler = async(e) => {
    e.preventDefault();
    const searchQuery = await e.target.value.toLowerCase();
    dispatch(articlesActions.searchArticle(searchQuery));
  };
  const SubmitSearch = (e) => {
    e.preventDefault();
  };


  


  return (
   
    <AppBar position="static" className="header" color="secondary">
      <Toolbar className="toolbar">
        <Box>
          <IconButton disableRipple={true} style={{ color: "white" }}>
            <AutoStoriesIcon />
          </IconButton>
        </Box>
        <Search sx={{ display: { xs: "block", md: "flex" } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={searchHandler}
            onSubmit={SubmitSearch}
          />
        </Search>
          <Logout>
        <Button
          sx={{ marginLeft: "70%" }}
          variant="contained"
          color="secondary"
          onClick={logoutHandler}
        >
          Logout
        </Button>
        </Logout>
        {/* Profile menu */}
        
      </Toolbar>
    </AppBar>

  );
};

export default Header;
