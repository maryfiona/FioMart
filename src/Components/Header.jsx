
import styled from "styled-components";
import { MdLocalShipping, MdOutlineAssignmentReturn, MdPhoneAndroid } from "react-icons/md";


const HeaderContainer = styled.div`
  background-color: black;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: center;
  width: 100%;
  position: relative;
  z-index: 10;
   @media (max-width: 1024px) {
    display: none;
  }
  
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; 
  position: relative;
  padding: 0 12px;
  flex: 1;
  justify-content: center;

  &::after {
    content: "";
    width: 1px;
    height: 35px;
    background-color: gray;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &:last-child::after {
    display: none;
  }
`;

const IconWrapper = styled.div`
  font-size: 28px;
  color:rgb(157, 214, 111); /* Lighter camouflage color */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1; /* Reduce space between text lines */
`;

const Title = styled.h5`
  font-size: 13px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 12px;
  margin: 0;
  opacity: 0.8;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <IconWrapper>
          <MdLocalShipping />
        </IconWrapper>
        <TextContainer>
          <Title>Free shipping on all orders</Title>
          <Subtitle>Limited-time offers</Subtitle>
        </TextContainer>
      </Section>

      <Section>
        <IconWrapper>
          <MdOutlineAssignmentReturn />
        </IconWrapper>
        <TextContainer>
          <Title>Return within 90 days</Title>
          <Subtitle>From purchase date</Subtitle>
        </TextContainer>
      </Section>

      <Section>
        <IconWrapper>
          <MdPhoneAndroid />
        </IconWrapper>
        <TextContainer>
          <Title>Get The Temu App</Title>
        </TextContainer>
      </Section>
    </HeaderContainer>
  );
};

export default Header;
