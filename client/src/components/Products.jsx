import React, { useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  font-size: 14px;
  font-size: 14px;
  color: black;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  overflow: visible;
`;

const Card = styled.div`
  width: 20vw;
  height: 49vh;
  display: flex;
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
  border: solid #666;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    .options {
      transform: scale(1);
    }
    .image {
      opacity: 0.3;
    }
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Productname = styled.p`
  text-align: center;
`;

const Productimage = styled.div`
  width: 100%;
  height: 98%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.image {
    display: block;
  }
`;

const Options = styled.div`
  position: absolute;
  transform: scale(0);
  transition: 0.3s ease;
`;

const heartbeat = keyframes`
from {
  transform: scale(1);
}
to {
  transform: scale(1.3);
  
}`;

const Optionitems = styled.p`
  padding: 5px 10px;
  margin: 10px 0px;
  border: 2px solid white;
  width: 100%;
  text-align: center;
  border-radius: 20px;
  color: white;
  background: coral;

  &.heart.animate{
    animation: ${heartbeat} 0.5s ease-in-out;
    background-color: red;
  }
`;


const Products = ({ setCartCount, search }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getproducts?search=" + search
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [search]);

  const handleAddToWishlist =() => {
    const heartIcon = document.querySelector(".heart");
    heartIcon.classList.add('animate');
    setTimeout(()=>{
      heartIcon.classList.remove('animate')
    }, 500)
  }

  return (
    <Container>
      {products.map((data, i) => (
        <Card key={i}>
          <Productname>{data.name}</Productname>
          <Productimage>
            <img
              className="image"
              src={data.featuredImage}
              alt=""
              width={"100%"}
              height={"auto"}
            />
            <Options className="options">
              <Optionitems
                onClick={() => {
                  setCartCount((prev) => prev + 1);
                }}
              >
                Add to Cart
              </Optionitems>
              <Optionitems>Buy Now</Optionitems>
              <Optionitems onClick={handleAddToWishlist}>Add to Wishlist</Optionitems>
            </Options>
          </Productimage>
        </Card>
      ))}
    </Container>
  );
};

export default Products;
