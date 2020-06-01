import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/AboutMe">About Me</Link>
                </li>
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 0;
  height: 50px;
  display: flex;
  align-items: center;
  background:skyblue;
  ul {
    margin: 0;
    padding: 0;
    
  }
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: white;
    }
  }
`;

export default Header;