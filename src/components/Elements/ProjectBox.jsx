import React from "react";
import styled from "styled-components";
// Import PropTypes if necessary for validation
// import PropTypes from 'prop-types';

export default function ProjectBox({ img, title, text, action }) {
  return (
    <Wrapper>
      <ImgBtn
        className="animate pointer"
        onClick={action ? action : null} // Cleaner handling of action
      >
        <img className="radius8" src={img} alt={title} />{" "}
        {/* Alt tag should reflect the title */}
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font15">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
  margin: 0;

  :hover > img {
    transform: scale(1.06); /* Scale up the image */
  }
`;
