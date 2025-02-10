import styled from "styled-components";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import car from '../video/car video.png'
import handle from '../video/handle cleanser.mp4'
import knife from '../video/knife.mp4'
import iphone from '../video/iphone.png'
import iron from '../video/iron.webp'
import necklace from '../video/necklace.jpg'
import skirt from '../video/skirt.jpg'
import skirt1 from '../video/skirt1.jpg'


const exploreItems = [
  { src: skirt, title: "Purple Gradient Anti-Fall Phone Case", oldPrice: "$120", newPrice: "$90", rating: 4 },
  { src: handle, title: "Ultra Thin Liquid Silicone Earbuds Case", oldPrice: "$815", newPrice: "$150", rating: 5 },
  { src: knife, title: "Xiaomi Redmi Pad Pro Silicone Cover", oldPrice: "$219", newPrice: "$80", rating: 3 },
  { src: iphone, title: "Ocean Band Strap for Apple Watch", oldPrice: "$20,000", newPrice: "$2,010", rating: 4 },
  { src: iron, title: "Set of 3 Car Cups w/ Replaceable Straws", oldPrice: "$40,010", newPrice: "$4,155", rating: 5 },
  { src: car, title: "Durable City Bicycle for Adults", oldPrice: "$900", newPrice: "$750", rating: 4 },
  { src: skirt1, title: "Samsung Smart Ceiling Fan", oldPrice: "$130", newPrice: "$110", rating: 4 },
  { src: necklace, title: "Luxury Fragrance Perfume Set", oldPrice: "$600", newPrice: "$500", rating: 5 },
  //{ src: clothes, title: "Professional Wireless Microphone", oldPrice: "$250", newPrice: "$220", rating: 3 },
  //{ src: shoes, title: "Stylish Men's Running Shoes", oldPrice: "$70", newPrice: "$50", rating: 4 },
  //{ src: pod, title: "Gaming Headset with Surround Sound", oldPrice: "$120", newPrice: "$95", rating: 4 },
  //{ src: slip, title: "Natural Black Wavy Wig", oldPrice: "$150", newPrice: "$110", rating: 4 },
  //{ src: leader, title: "Gold Plated Bangle Set", oldPrice: "$90", newPrice: "$70", rating: 4 },
  //{ src: light, title: "Elegant Sterling Silver Ring", oldPrice: "$60", newPrice: "$45", rating: 4 },
  //{ src: brush, title: "Modern Abstract Canvas Painting", oldPrice: "$300", newPrice: "$220", rating: 4 }
];

const Explore = () => {
  return (
    <Section>
      <Container>
        <Heading>Explore your interest</Heading>
        <ProductGrid>
          {exploreItems.map((item, index) => (
            <Card key={index}>
              <ImageWrapper>
                <img src={item.src} alt={item.title} />
              </ImageWrapper>
              <Info>
                <Name>{item.title}</Name>
                <Price>
                  <OldPrice>{item.oldPrice}</OldPrice>
                  <CartIcon>
                    <FaShoppingCart />
                  </CartIcon>
                </Price>
                <NewPrice>{item.newPrice}</NewPrice>
                <Rating>
                  {[...Array(5)].map((_, i) =>
                    i < item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
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

export default Explore;

const Section = styled.section`
  padding: 30px 0;
  background: #f8f8f8;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 30px;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
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
