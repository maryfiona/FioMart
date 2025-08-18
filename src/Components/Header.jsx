import styled from "styled-components";
import { MdLocalShipping, MdOutlineAssignmentReturn, MdPhoneAndroid } from "react-icons/md";

const HeaderContainer = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color:blue;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
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
          <Title>Fast & Reliable Shipping</Title>
          <Subtitle>Get your orders quickly</Subtitle>
        </TextContainer>
      </Section>

      <Section>
        <IconWrapper>
          <MdOutlineAssignmentReturn />
        </IconWrapper>
        <TextContainer>
          <Title>Hassle-Free Returns</Title>
          <Subtitle>Easy return process</Subtitle>
        </TextContainer>
      </Section>

      <Section>
        <IconWrapper>
          <MdPhoneAndroid />
        </IconWrapper>
        <TextContainer>
          <Title>Download Our App</Title>
        </TextContainer>
      </Section>
    </HeaderContainer>
  );
};

export default Header;
