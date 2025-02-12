import { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaThumbsUp } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { PiGiftBold } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import temuLogo from "../img/temu.png"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
  
      <LogoContainer>
        <a href="/">
          <img src={temuLogo} alt="Temu Logo" />
        </a>
      </LogoContainer>


      <Hamburger onClick={toggleMenu}>
        &#9776;
      </Hamburger>


      <NavLinks isOpen={isMenuOpen}>
        <NavItem href="/">
          <FaThumbsUp /> <span>Best Seller</span>
        </NavItem>
        <NavItem href="/">
          <BsBookmarkStarFill /> <span>5-Star Rated</span>
        </NavItem>
        <NavItem href="/">
          <PiGiftBold /> <span>Valentine’s Day</span>
        </NavItem>
        <NavItem href="/">New Arrivals</NavItem>
        <NavItem href="/">Categories</NavItem>
      </NavLinks>

      <SearchBar>
        <input type="text" placeholder="Search..." />
        <button>
          <FaSearch />
        </button>
      </SearchBar>

      <AccountCart>
        <AccountItem href="/">
          <VscAccount /> <span>Order & <br /> Account</span>
        </AccountItem>

        <Support href="/">
          <MdSupportAgent /> <span>Support</span>
        </Support>
        <CartIcon href="/">
          <FiShoppingCart />
        </CartIcon>
      </AccountCart>
    </Nav>
  );
};

export default Navbar;



const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  a {
    display: flex;
  }
  
  img {
    height: 45px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 25px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Mobile menu toggle */
    flex-direction: column;
    gap: 15px;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding-top: 20px;
  }
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    color: orange;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 10px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #000;
  border-radius: 20px;
  overflow: hidden;

  input {
    padding: 10px 15px;
    border: none;
    outline: none;
    flex: 1;
  }

  button {
    background: black;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    color: white;
  }

  @media (max-width: 768px) {
    width: 45%;
    margin-top: 10px;
  }
`;

const AccountCart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: -5px; 
    flex-wrap: nowrap; 
    
    a {
      font-size: 20px; 
      position: relative;
      margin-left: -10px; 
    }

    span {
      display: none; 
    }
  }
`;

const AccountItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    color: orange;
  }

  @media (max-width: 768px) {
    span {
      display: none; 
    }
  }
`;

const Support = styled(AccountItem)`
  @media (max-width: 768px) {
    display: none; 
  }
`;

const CartIcon = styled.a`
  font-size: 22px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    color: orange;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 20px;

  @media (max-width: 768px) {
    display: block;
    color: black;
  }
`;
