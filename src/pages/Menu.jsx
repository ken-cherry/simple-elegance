import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tasting } from "../data";
import Tasting from "../components/Tasting";

const Menu = () => {
  const [tastingItems, setTastingItems] = useState(tasting);

  return (
    <Wrapper>
      <div className="menu-center">
        <div className="menu-selection">
          <div className="tasting">Chef's Tasting</div>
          <div className="three-course">Three Course Prix Fixe</div>
        </div>
        <div className="tasting-menu">
          {/* <Tasting items={tastingItems} /> */}
        </div>
        {/* <div className="menu-cost">
          <p>chef's tasting: $180 per person</p>
          <p>three course prix fixe: $100 per person</p>
        </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--slate-500);

  .menu-center {
    /* height: 100vh; */
    /* text-transform: capitalize; */
    color: var(--slate-100);
    font-weight: 500;
    font-size: 1.25rem;
  }
  .menu-selection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
  }
  .menu-cost {
    /* height: 50vh; */
    margin-top: 5rem;
    display: grid;
    place-items: center;
  }
  .tasting-item {
    display: grid;
    place-items: center;
    font-family: serif;
    font-style: italic;
    text-align: center;
    margin: 1rem auto;
  }
  h1 {
    text-decoration: underline;
  }
  @media (min-width: 768px) {
  }
`;

export default Menu;
