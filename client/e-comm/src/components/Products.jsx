import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 14px;
  font-size: 14px;
  color: black;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Card = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
  border: solid #666;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getproducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      {products.map((data, i) => (
        <Card key={i}>
          <p>{data.name}</p>
          <img src={data.featuredImage} alt="" />
        </Card>
      ))}
    </Container>
  );
};

export default Products;
