import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import "./cartitem.css";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const Container = styled.div`
  width: 100%;
  font-size: 14px;
  font-size: 14px;
  color: black;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  overflow: visible;
`;

const Card = styled.div`
  width: 90vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  border: solid #666;
  transition: all 0.3s ease;
  position: relative;
  justify-content: center;

  &.prdQ {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
`;

const Productimage = styled.div`
  width: 20%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.image {
    display: block;
  }
`;

const Quantity = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

const Count = styled.p`
  font-size: 18px;
`;

const Icons = styled.div`
  font-size: "large";
  color: #95768c;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  cursor: pointer;
`;

const Productname = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding: 10px 20px;
  text-align: center;
`;

const CartItem = () => {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/cart/cartitems"
        );
        const updateItems = response.data.map((item) => ({
          ...item,
          itemCount: item.itemCount || 0,
        }));
        setItems(updateItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchItems();
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.product.basePrice;
    });
    return totalPrice;
  };

  const price = calculateTotalPrice();

  const addItem = async (id, count) => {
    if (count >= 0) {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/cart/additem/${id}`
        );
        if (response.data) {
          console.log("Item count increased by 1.");
          const updatedItems = items.map((item) => {
            if (item._id === id) {
              return { ...item, itemCount: response.data.itemCount };
            }
            return item;
          });
          setItems(updatedItems);
          setItemCount(response.data.itemCount);
        }
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };
  const removeItem = async (id, count) => {
    if (count > 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/cart/removeitem/" + id
        );
        if (response.data) {
          console.log("Item count decreased by 1.");
          const updatedItems = items.map((item) => {
            if (item._id === id) {
              return { ...item, itemCount: response.data.itemCount };
            }
            return item;
          });
          setItems(updatedItems);
          setItemCount(response.data.itemCount);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  };

  return (
    <Container>
      <h1>Shooping Cart</h1>
      {items.map((data, i) => (
        <div className="main-container">
          <div className="inner-box">
            <div className="a1">
              <img src={data.product.featuredImage} alt="" width={"40%"} />
            </div>
          </div>
          <div className="content">
            <h2 className="h2">
              {data.product.brand} {data.product.name}
            </h2>
            <p>{data.product.description}</p>
            <p className="freeShipping">Eligible for free shipping</p>
            {data.product.inStock ? (
              <div className="inStock">In Stock</div>
            ) : (
              <div className="outOfStock">Out Of Stock</div>
            )}

            <div className="option">
              <Quantity>
                <Icons>
                  <Remove
                    onClick={() => removeItem(data._id, data.itemCount)}
                  />
                </Icons>
                <Count>{data.itemCount}</Count>
                <Icons>
                  <Add onClick={() => addItem(data._id, data.itemCount)} />
                </Icons>
              </Quantity>
              <div className="optionItems">
                <span>Delete</span>
                <span>Specifications</span>
              </div>
            </div>
          </div>
          <div className="price">
            <p>{data.product.basePrice}$</p>
          </div>
        </div>
      ))}
      <div className="totalPrice">
        <h3>{price}$</h3>
      </div>
    </Container>
  );
};

export default CartItem;
