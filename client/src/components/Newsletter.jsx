import React from "react";
import styled from "styled-components";

  const Container = styled.div`
    top: 0;
    width: 100%;
    background-color: dodgerblue;
    font-size: 14px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
  `;

  const Spantext = styled.span`
    font-weight: 500;
  `;

  const Sale = styled.span`
    font-weight: bold;
  `;

  const Button = styled.button`
    padding: 5px 8px;
    background-color: #03476890;
    text-transform: uppercase;
    border: none;
    margin: 0px 5px;
  `;

  const Limited = styled.span`
    color: #7abfe1;
    font-size: 12px;
  `;
const Newsletter = () => {
  return (
    <Container>
      <Spantext>
        Get Up to <Sale>40% OFF</Sale> New-Season Styles <Button>Men</Button>
        <Button>Women</Button> <Limited>*Limited time only</Limited>
      </Spantext>
    </Container>
  );
};

export default Newsletter;
