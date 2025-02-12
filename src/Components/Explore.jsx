import styled from "styled-components";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import skirt from "../video/skirt.jpg";
import dress from "../video/dress.jpg";
import earpod from "../img/earpod.jpg";
import iphone from "../video/iphone.png";
import iron from "../video/iron.webp";
import car from "../video/car video.png";
import skirt1 from "../video/skirt1.jpg";
import necklace from "../video/necklace.jpg";
import samsung from "../img/samsung.jpg";
import shoes from "../img/shoes.jpg";
import redmi from "../img/redmi.jpg";
import watch from "../img/watch.jpg";
import cup from "../img/cup.jpg";
import bicycle from "../img/bicycle.jpg";

const Explore = () => {
  return (
    <Section>
      <Container>
        <Heading>Explore your interest</Heading>
        <ProductGrid>
          <Card>
            <ImageWrapper>
              <img src={skirt} alt="Stylish Women's Skirt" />
            </ImageWrapper>
            <Info>
              <Name>Stylish Women`s Skirt</Name>
              <Price>
                <OldPrice>$120</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$90</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={dress} alt="Elegant Women's Dress" />
            </ImageWrapper>
            <Info>
              <Name>Elegant Women`s Dress</Name>
              <Price>
                <OldPrice>$815</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$150</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={earpod} alt="Wireless EarPods" />
            </ImageWrapper>
            <Info>
              <Name>Wireless EarPods</Name>
              <Price>
                <OldPrice>$219</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$80</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={iphone} alt="Apple iPhone 13 Pro" />
            </ImageWrapper>
            <Info>
              <Name>Apple iPhone 13 Pro</Name>
              <Price>
                <OldPrice>$20,000</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$2,010</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={iron} alt="Electric Steam Iron" />
            </ImageWrapper>
            <Info>
              <Name>Electric Steam Iron</Name>
              <Price>
                <OldPrice>$40,010</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$4,155</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={car} alt="Electric Car" />
            </ImageWrapper>
            <Info>
              <Name>Electric Car</Name>
              <Price>
                <OldPrice>$40,000</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$39,999</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={skirt1} alt="Stylish Women's Skirt" />
            </ImageWrapper>
            <Info>
              <Name>Fashionable Women`s Skirt</Name>
              <Price>
                <OldPrice>$110</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$85</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={samsung} alt="Samsung Galaxy Phone" />
            </ImageWrapper>
            <Info>
              <Name>Samsung Galaxy</Name>
              <Price>
                <OldPrice>$999</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$950</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={necklace} alt="Beautiful Necklace" />
            </ImageWrapper>
            <Info>
              <Name>Elegant Necklace</Name>
              <Price>
                <OldPrice>$200</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$175</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={redmi} alt="Redmi Phone" />
            </ImageWrapper>
            <Info>
              <Name>Redmi Note 10</Name>
              <Price>
                <OldPrice>$250</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$180</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={shoes} alt="Men's Sneakers" />
            </ImageWrapper>
            <Info>
              <Name>Men`s Sneakers</Name>
              <Price>
                <OldPrice>$60</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$50</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={watch} alt="Luxury Watch" />
            </ImageWrapper>
            <Info>
              <Name>Luxury Watch</Name>
              <Price>
                <OldPrice>$1,200</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$999</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={cup} alt="Ceramic Mug" />
            </ImageWrapper>
            <Info>
              <Name>Ceramic Mug</Name>
              <Price>
                <OldPrice>$15</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$12</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={bicycle} alt="Mountain Bicycle" />
            </ImageWrapper>
            <Info>
              <Name>Mountain Bicycle</Name>
              <Price>
                <OldPrice>$350</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$299</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>
          <Card>
            <ImageWrapper>
              <img src={shoes} alt="Mountain Bicycle" />
            </ImageWrapper>
            <Info>
              <Name>shoes</Name>
              <Price>
                <OldPrice>$350</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$299</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>


        </ProductGrid>
      </Container>
    </Section>
  );
};

export default Explore;

const Section = styled.section`
  padding: 30px 0;
  background: #f8f8f8;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 30px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);  // Default for large screens
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);  // For tablets
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  // For mobile devices (larger ones)
    gap: 15px;
  }


  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);  // For small mobile devices
    gap: 10px;

    // Hide the last item in the grid
    & > div:nth-last-child(1) {
      display: none;
    }
  }
`;


const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 12px;
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 8px;

  img {
    width: 100%;
    max-height: 180px;
    object-fit: contain;
  }
`;

const Info = styled.div`
  text-align: center;
  padding: 10px 0;
`;

const Name = styled.h6`
  font-size: 14px;
  font-weight: 400;
  color: #333;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const OldPrice = styled.span`
  font-size: 12px;
  text-decoration: line-through;
  color: #a5a5a5;
`;

const NewPrice = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #d9534f;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  color: gold;
  font-size: 14px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CartIcon = styled.div`
  font-size: 18px;
  color: #000;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #333;
  }
`;
