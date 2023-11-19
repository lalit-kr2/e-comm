import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Login from "@mui/icons-material/Login";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import CallOutlined from "@mui/icons-material/CallOutlined";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";

const Container = styled.div`
  width: 100%;
  font-size: 14px;
  color: white;
  font-size: 14px;
  background-color: white;
`;

const Upperheader = styled.div`
  width: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Free = styled.p`
  text-transform: uppercase;
  color: #95768c;
`;

const Upperlinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #95768c;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const Listitems = styled.li`
  cursor: pointer;
  padding: 0px 5px;
`;

const Linebreak = styled.div`
  height: 0.3px;
  width: 100%;
  background-color: #d7d3d3;
`;

const Middleheader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;

const MiddleContent = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  color: #f297e4;
  padding: 0px 15px;
`;

const Search = styled.input`
  color: #95768c;
  padding: 8px 10px;
  font-size: 14px;
  height: 30px;
  width: 50%;
  letter-spacing: 1px;
  background-color: #f3ecec;
  border: 1px solid #f3caca;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const Icons = styled.div`
  font-size: "large";
  color: #95768c;
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  cursor: pointer;
  &.call {
    .callIcon {
      font-size: 54px;
      margin-left: 50px;
    }
  }
  &.cart {
    position: relative;
    .cartIcon {
      position: absolute;
      top: -7px;
      right: 5px;
    }
  }
`;
const Cartcount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: crimson;
  z-index: 9;
  color: white;
`;

const Header = ({ cartCount, setSearch }) => {

  let timer;
  const updateSearch = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };
  return (
    <Container>
      <Upperheader>
        <Free>Free Returns. Free delivery on Orders above $99+</Free>
        <Upperlinks>
          <List>
            <Listitems>My Account</Listitems>
            <Listitems>Cart</Listitems>
            <Listitems>My Wishlist</Listitems>
            <Listitems>Login</Listitems>
          </List>
        </Upperlinks>
      </Upperheader>

      <Linebreak></Linebreak>

      <Middleheader>
        <MiddleContent>
          <Logo>.tecomm</Logo>
          <Search
            placeholder="Search..."
            onChange={(e) => updateSearch(e)}
          ></Search>
          <Icons className="call">
            <CallOutlined className="callIcon" />
          </Icons>
          <Icons>
            <Login />
          </Icons>
          <Icons>
            <FavoriteBorder className="heart"/>
          </Icons>
          <Icons className="cart">
            <ShoppingBagOutlined />
            <Cartcount className="cartIcon">{cartCount}</Cartcount>
          </Icons>
        </MiddleContent>
      </Middleheader>
    </Container>
  );
};

export default Header;
