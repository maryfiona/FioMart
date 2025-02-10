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

const products = [
  { src: phone, title: "Purple Gradient Anti-Fall Phone Case", oldPrice: "$120", newPrice: "$90", rating: 4 },
  { src: earpod, title: "Ultra Thin Liquid Silicone Earbuds Case", oldPrice: "$815", newPrice: "$150", rating: 5 },
  { src: redmi, title: "Xiaomi Redmi Pad Pro Silicone Cover", oldPrice: "$219", newPrice: "$80", rating: 3 },
  { src: watch, title: "Ocean Band Strap for Apple Watch", oldPrice: "$20,000", newPrice: "$2,010", rating: 4 },
  { src: cup, title: "Set of 3 Car Cups w/ Replaceable Straws", oldPrice: "$40,010", newPrice: "$4,155", rating: 5 },
  { src: bicycle, title: "Durable City Bicycle for Adults", oldPrice: "$900", newPrice: "$750", rating: 4 },
  { src: samsung, title: "Samsung Smart Ceiling Fan", oldPrice: "$130", newPrice: "$110", rating: 4 },
  { src: perfume, title: "Luxury Fragrance Perfume Set", oldPrice: "$600", newPrice: "$500", rating: 5 },
  { src: mic, title: "Professional Wireless Microphone", oldPrice: "$250", newPrice: "$220", rating: 3 },
  { src: shoes, title: "Stylish Men's Running Shoes", oldPrice: "$70", newPrice: "$50", rating: 4 },
  { src: headset, title: "Gaming Headset with Surround Sound", oldPrice: "$120", newPrice: "$95", rating: 4 },
  { src: wig, title: "Natural Black Wavy Wig", oldPrice: "$150", newPrice: "$110", rating: 4 },
  { src: bangle, title: "Gold Plated Bangle Set", oldPrice: "$90", newPrice: "$70", rating: 4 },
  { src: ring, title: "Elegant Sterling Silver Ring", oldPrice: "$60", newPrice: "$45", rating: 4 },
  { src: canvas, title: "Modern Abstract Canvas Painting", oldPrice: "$300", newPrice: "$220", rating: 4 }
];

const Product = () => {
  return (
    <Section>
      <Container>
        <ProductGrid>
          {products.map((product, index) => (
            <Card key={index}>
              <ImageWrapper>
                <img src={product.src} alt={product.title} />
              </ImageWrapper>
              <Info>
                <Name>{product.title}</Name>
                <Price>
                  <OldPrice>{product.oldPrice}</OldPrice>
                  <CartIcon>
                    <FaShoppingCart />
                  </CartIcon>
                </Price>
                <NewPrice>{product.newPrice}</NewPrice>
                <Rating>
                  {[...Array(5)].map((_, i) =>
                    i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                </Rating>
              </Info>
            </Card>
          ))}
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
  padding:30px;
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
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
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
