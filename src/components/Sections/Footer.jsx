import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import jams_logo_small from "../../assets/img/jams_logo_small.png";
import LogoSmall from "../Elements/LogoSmall";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div style={{ backgroundColor: "#1976D2" }}>
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoSmall
                src={jams_logo_small}
                alt={"Jash Pharmaceuticals & Medical supplies"}
              />
              {/* <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                Jash Pharmaceuticals & Medical supplies
              </h1> */}
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span
                className="font16"
                style={{ color: "#000", fontSize: "17px" }}
              >
                Jash Pharmaceuticals & Medical supplies
              </span>{" "}
              All Right Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
