import React from "react";
import styled from "styled-components";

// Styled component for the logo container
const SmallLogoContainer = styled.div`
  overflow: hidden;
  position: relative;
  transform: rotate(-1deg);
  width: 300px; // Default size for larger screens
  height: 90px; // Default size for larger screens
  display: flex;
  justify-content: center;
  align-items: center;

  // /* Media Queries */
  // @media (max-width: 1080px) {
  //   width: 300px; /* Adjust size for large smartphones */
  //   height: 90px;
  // }

  // @media (max-width: 768px) {
  //   width: 300px; /* Adjust size for tablets */
  //   height: 90px;
  // }

  // @media (max-width: 480px) {
  //   width: 60px; /* Adjust size for small smartphones */
  //   height: 60px;
  // }
`;

const logoStyle = {
  width: "100%", // The logo takes up full space of the container
  height: "100%",
  objectFit: "contain",
};

const LogoSmall = ({ src, alt, style }) => {
  return (
    <SmallLogoContainer>
      <img src={src} alt={alt} style={logoStyle} />
    </SmallLogoContainer>
  );
};

export default LogoSmall;
