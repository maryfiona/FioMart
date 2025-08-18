import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { FiShoppingCart } from 'react-icons/fi';
import FioMart from '../img/mart.jpg';
import skirt from '../video/skirt.jpg'
import dress from '../video/dress.jpg'
import earpod from '../img/earpod.jpg'
import iphone from '../video/iphone.png'
const products = [
  {
    id: 1,
    image: skirt,
    alt: "Stylish Women's Skirt",
    name: "Stylish Women's Skirt",
    oldPrice: "$120",
    newPrice: "$90",
    rating: 4,
  },
  {
    id: 2,
    image: dress,
    alt: "Elegant Women's Dress",
    name: "Elegant Women's Dress",
    oldPrice: "$815",
    newPrice: "$150",
    rating: 5,
  },
  {
    id: 3,
    image: earpod,
    alt: "Wireless EarPods",
    name: "Wireless EarPods",
    oldPrice: "$219",
    newPrice: "$80",
    rating: 3,
  },
  {
    id: 4,
    image: iphone,
    alt: "Apple iPhone 13 Pro",
    name: "Apple iPhone 13 Pro",
    oldPrice: "$20,000",
    newPrice: "$2,010",
    rating: 4,
  },
];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const results = products.filter((product) => product.toLowerCase().includes(term.toLowerCase()));
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <Nav>
      <LogoContainer>
        <a href="/">
          <img  src={FioMart} alt="FioMart Logo" />
        </a>
      </LogoContainer>

      <NavMenu>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/appliances">Appliances</NavItem>
        <NavItem href="/electronics">Electronics</NavItem>
        <NavItem href="/fashion">Fashion</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavMenu>

      <SearchContainer>
        <SearchBar>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>
            <FaSearch />
          </button>
        </SearchBar>
        {filteredProducts.length > 0 && (
          <SearchResults>
            {filteredProducts.map((product, index) => (
              <SearchResult key={index}>{product}</SearchResult>
            ))}
          </SearchResults>
        )}
      </SearchContainer>

      <AccountCart>
        <AccountItem href="/">
          <VscAccount />
        </AccountItem>
        <FloatingSupport href="/">
          <MdSupportAgent />
        </FloatingSupport>
        <CartIcon href="/">
          <FiShoppingCart />
        </CartIcon>
      </AccountCart>

      <Hamburger onClick={toggleMenu}>
        &#9776;
      </Hamburger>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: black;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  img {
    height: 80px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const SearchBar = styled.div`
  display: flex;
  border: 2px solid white;
  border-radius: 20px;
  overflow: hidden;

  input {
    padding: 10px;
    border: none;
    outline: none;
    width: 100%;
  }

  button {
    background: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    color: black;
  }
`;

const SearchResults = styled.div`
  background: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 150px;
  overflow-y: auto;
  margin-top: 5px;
`;

const SearchResult = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const AccountCart = styled.div`
  display: flex;

  margin-left:5px;
`;

const AccountItem = styled.a`
  font-size: 22px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  margin-right:30px;

  &:hover {
    color: orange;
  }
`;

const FloatingSupport = styled(AccountItem)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: orange;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }
`;

const CartIcon = styled(AccountItem)``;

const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
