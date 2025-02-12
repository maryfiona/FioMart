import styled from "styled-components";
import apple from "../img/apple.png";
import goggle from "../img/goggle.png";
import pay from "../img/pay.png";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #111;
  color: white;
  padding: 40px 20px;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h5 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
    h5 span{ 
    Display:none;
    }
    @media (max-width: 768px) {
  h5 span {
    display: inline; 
  }
}

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid #444;
    padding-bottom: 10px;
    position: relative;

    ul {
      display: none;
    }

    &:hover ul,
    &:focus-within ul {
      display: block;
    }
  }
`;

const AppIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  img {
    width: 120px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px 0;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #f57c00;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
`;

const PaymentSection = styled.div`
  text-align: center;
  margin-top: 10px;

  p {
    margin-bottom: 8px;
  }

  img {
    width: 180px;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSection>
          <h5>Company Info <span>↓</span></h5>
          <ul>
            <li><a href="#">About Temu</a></li>
            <li><a href="#">Affiliate & Influencer: Earn Commission</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Temus Tree Planting Program</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h5>Customer Service <span>↓</span></h5>
          <ul>
            <li><a href="#">Return and refund policy</a></li>
            <li><a href="#">Intellectual property policy</a></li>
            <li><a href="#">Shipping info</a></li>
            <li><a href="#">Report suspicious activity</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Support center & FAQ</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h5>Purchase & Alerts <span>↓</span></h5>
          <ul>
            <li><a href="#">Temu purchase protection</a></li>
            <li><a href="#">Price-drop alerts</a></li>
            <li><a href="#">Track orders any time</a></li>
            <li><a href="#">Faster & more secure checkout</a></li>
            <li><a href="#">Low stock items alerts</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h5>Partner with Temu <span>↓</span></h5>
          <ul>
            <li><a href="#">Exclusive offers</a></li>
            <li><a href="#">Coupons & offers alerts</a></li>
          </ul>
          <h5>Download the Temu App <span>↓</span></h5>
          <AppIcons>
            <a href="#"><img src={apple} alt="Download on the App Store" /></a>
            <a href="#"><img src={goggle} alt="Get it on Google Play" /></a>
          </AppIcons>
        </FooterSection>
      </FooterWrapper>

      <SocialIcons>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Facebook"><FaFacebook /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="TikTok"><FaTiktok /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
        <a href="#" aria-label="Pinterest"><FaPinterest /></a>
      </SocialIcons>

      <FooterBottom>
        <PaymentSection>
          <p>We Accept</p>
          <img src={pay} alt="Payment Methods" />
        </PaymentSection>
      </FooterBottom>

      <Copyright>
        <p>
          © 2025 FioCodeTech. | <a href="#">Terms of use</a> | 
          <a href="#">Privacy policy</a> | <a href="#">Your privacy choices</a> | 
          <a href="#">Ad Choices</a>
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
