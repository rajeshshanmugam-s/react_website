import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        {/* <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Services</h1>
            <p className="font13" style={{ maxWidth: "510px" }}>
              Our services encompass efficient pharmaceutical distribution,
              supply chain management, and logistics solutions, ensuring timely
              delivery of essential medical supplies.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Medical Drugs"
                subtitle="Explore our vast selection of OTC, specialty, and branded generic medications for treating acute and chronic diseases. We provide high-quality, reliable medications tailored to your health needs."
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Medical Supplies"
                subtitle="Trusted supplier for all medical supplies, from prevention to diagnosis and treatment. Our extensive selection meets all your healthcare needs with high-quality, reliable products for every stage of care."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Surgical Instruments"
                subtitle="Explore our high-quality surgical instruments, including forceps and surgical clamps. Known for their precision, innovation, and superior quality, our instruments ensure reliability in every procedure."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div> */}
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Who We Are</h4>
                <h2 className="font30 extraBold">
                  Commitment to Global Health
                </h2>
                <p className="font16">
                  At Jash Pharmaceuticals, we are dedicated to improving global
                  health by ensuring the reliable, efficient, and quality-driven
                  distribution of essential medical supplies worldwide. Our
                  mission is to make healthcare more accessible by focusing on
                  the affordability of vital medicines, ensuring that people
                  from all economic backgrounds can receive the treatments they
                  need. We are committed to inclusivity, reaching diverse and
                  underserved populations with expert pharmaceutical solutions.
                  With decades of experience and a strong commitment to timely
                  delivery, we ensure that high-quality medicines are available
                  when and where they are needed most.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div
                    style={{
                      width: "190px",
                      height: "50px",
                      border: "0.5px solid black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      borderRadius: "10px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-80}
                    >
                      Get Quote
                    </Link>
                  </div>
                  {/* <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton
                      title="Contact Us"
                      action={() => alert("clicked")}
                      border
                    />
                  </div> */}
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 25%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
