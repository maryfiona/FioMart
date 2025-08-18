import styled from "styled-components";

import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import phone from "../img/phone.jpg";
import redmi from "../img/redmi.jpg";
import earpod from "../img/earpod.jpg";
import watch from "../img/watch.jpg";
import cup from "../img/cup.jpg";
import bicycle from "../img/bicycle.jpg";
import samsung from "../img/samsung.jpg";
import perfume from "../img/perfume.jpg";
import mic from "../img/mic.jpg";
import shoes from "../img/shoes.jpg";
import headset from "../img/headset.jpg";
import wig from "../img/wig.jpg";
import bangle from "../img/bangle.jpg";
import ring from "../img/ring.jpg";
import canvas from "../img/canvas.jpg";

const Product = () => {
  return (
    <Section>
      <Container>
   
        <ProductGrid>
          <Card>
            <ImageWrapper>
              <img src={phone} alt="Smartphone" />
            </ImageWrapper>
            <Info>
              <Name>Smartphone</Name>
              <Price>
                <OldPrice>$400</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$320</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={redmi} alt="Redmi Phone" />
            </ImageWrapper>
            <Info>
              <Name>Redmi Phone</Name>
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
              <img src={earpod} alt="Wireless EarPods" />
            </ImageWrapper>
            <Info>
              <Name>Wireless EarPods</Name>
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
              <img src={watch} alt="Smartwatch" />
            </ImageWrapper>
            <Info>
              <Name>Smartwatch</Name>
              <Price>
                <OldPrice>$180</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$140</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={cup} alt="Coffee Mug" />
            </ImageWrapper>
            <Info>
              <Name>Coffee Mug</Name>
              <Price>
                <OldPrice>$30</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$20</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={bicycle} alt="Bicycle" />
            </ImageWrapper>
            <Info>
              <Name>Bicycle</Name>
              <Price>
                <OldPrice>$300</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$250</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={samsung} alt="Samsung TV" />
            </ImageWrapper>
            <Info>
              <Name>Samsung TV</Name>
              <Price>
                <OldPrice>$700</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$600</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={perfume} alt="Perfume" />
            </ImageWrapper>
            <Info>
              <Name>Perfume</Name>
              <Price>
                <OldPrice>$50</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$35</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={mic} alt="Microphone" />
            </ImageWrapper>
            <Info>
              <Name>Microphone</Name>
              <Price>
                <OldPrice>$80</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$60</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={shoes} alt="Running Shoes" />
            </ImageWrapper>
            <Info>
              <Name>Running Shoes</Name>
              <Price>
                <OldPrice>$120</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$100</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={headset} alt="Headset" />
            </ImageWrapper>
            <Info>
              <Name>Headset</Name>
              <Price>
                <OldPrice>$50</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$40</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={wig} alt="Wig" />
            </ImageWrapper>
            <Info>
              <Name>Wig</Name>
              <Price>
                <OldPrice>$150</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$120</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={bangle} alt="Bangle" />
            </ImageWrapper>
            <Info>
              <Name>Bangle</Name>
              <Price>
                <OldPrice>$80</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$65</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={ring} alt="Gold Ring" />
            </ImageWrapper>
            <Info>
              <Name>Gold Ring</Name>
              <Price>
                <OldPrice>$200</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$150</NewPrice>
              <Rating>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </Rating>
            </Info>
          </Card>

          <Card>
            <ImageWrapper>
              <img src={canvas} alt="Canvas Art" />
            </ImageWrapper>
            <Info>
              <Name>Canvas Art</Name>
              <Price>
                <OldPrice>$150</OldPrice>
                <CartIcon>
                  <FaShoppingCart />
                </CartIcon>
              </Price>
              <NewPrice>$120</NewPrice>
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

export default Product;


const Section = styled.section`
  padding: 30px 0;
  background: #f8f8f8;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 30px;
`;


const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);  
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);  
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  
    gap: 15px;
  }

  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);  
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
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  color: gold;
  font-size: 14px;
  margin-top: 5px;
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

