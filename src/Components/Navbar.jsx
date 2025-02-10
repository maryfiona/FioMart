import styled from "styled-components";
import { FaSearch, FaThumbsUp } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { PiGiftBold } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import temuLogo from "../img/temu.png"; // Import logo correctly

const Navbar = () => {
  return (
    <Nav>
      {/* Logo */}
      <LogoContainer>
        <a href="/">
          <img src={temuLogo} alt="Temu Logo" />
        </a>
      </LogoContainer>

      {/* Navigation Links */}
      <NavLinks>
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

      {/* Search Bar */}
      <SearchBar>
        <input type="text" placeholder="Search..." />
        <button>
          <FaSearch />
        </button>
      </SearchBar>

      {/* Account & Cart Section */}
      <AccountCart>
        <AccountItem href="/">
          <VscAccount /> <span>Order & <br /> Account</span>
        </AccountItem>
        <AccountItem href="/">
          <MdSupportAgent /> <span>Support</span>
        </AccountItem>
        <CartIcon href="/">
          <FiShoppingCart />
        </CartIcon>
      </AccountCart>
    </Nav>
  );
};

export default Navbar;

//
// STYLED COMPONENTS
//
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
`;

const AccountCart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
`;

const CartIcon = styled.a`
  font-size: 22px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;
