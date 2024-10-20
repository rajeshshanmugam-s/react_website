import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Why Our Customers Choose Us</h1>
            <p className="font16">
              Customers choose us for our proven commitment to quality,
              reliability, and innovation in delivering medical supplies that
              meet all healthcare needs. We are trusted for consistently
              providing high-quality products that healthcare professionals and
              patients can depend on. Our focus on developing cutting-edge
              solutions, ensuring timely availability, and maintaining
              affordability sets us apart, making us the preferred partner for
              those who seek excellence and dependability in healthcare.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                title="Quality"
                text="Delivering superior quality with reliable, high-performance medical supplies for optimal care."
                offers={[
                  { name: "Precision", cheked: true },
                  { name: "Durability", cheked: true },
                  { name: "Integrity", cheked: true },
                  { name: "Trustworthiness", cheked: true },
                  { name: "Performance", cheked: true },
                ]}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                title="Reliability"
                text="Trusted for consistent performance, delivering safe and effective healthcare solutions."
                offers={[
                  { name: "Consistent Performance", cheked: true },
                  { name: "Proven Trust", cheked: true },
                  { name: "Dependable Solutions", cheked: true },
                  { name: "Unwavering Quality", cheked: true },
                  { name: "Reliable Service", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                // icon="browser"
                // price="$59,99/mo"
                title="Innovative"
                text="Driven by innovation, we provide cutting-edge solutions that enhance healthcare outcomes."
                offers={[
                  { name: "Creative Solutions", cheked: true },
                  { name: "Forward Thinking", cheked: true },
                  { name: "Cutting-Edge", cheked: true },
                  { name: "Game-Changing", cheked: true },
                  { name: "Pioneering Technology", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
