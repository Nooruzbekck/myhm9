import React from "react";
import styled from "styled-components";


function Header() {
    return (
        <HomeWork>MY HomeWork 9</HomeWork>
    )
}
export default Header;

const HomeWork = styled.div`
  width: 300px;
  height: 40px;
  background-color: gray;
  color: wheat;
  padding-top: 10px;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
  box-shadow: gray 4px 5px 4px;
`;