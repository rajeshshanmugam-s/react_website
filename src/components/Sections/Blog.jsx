import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Products</h1>
            <p className="font13">
              Explore our Product Guide for comprehensive details on our
              high-quality medical supplies.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="OMEJASH"
                text="Omeprazole Gastro-resistant Capsules I.P
                20 mg Demonstrates Effectiveness and Excellent Tolerance in Managing Acid-related Disorders and Alleviating Associated
                Symptoms."
                tag="Omeprazole Gastro-resistant Capsules
                I.P. 20 mg"
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="JASHVIT"
                text="Vitamins, Minerals, and L-Glutamic Acid Tablets Combination Demonstrates Effectiveness and Outstanding Tolerance in Supporting Overall Health and Preventing Deficiency-Related Conditions."
                tag="Vitamins, Minerals, and L-Glutamic Acid Tablets"
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="JASHCAL"
                text="The Calcium Carbonate with Vitamin D3 Tablets Combination Shows Effectiveness and Superior Tolerance in Supporting Bone Health and Preventing Deficiency-Related Conditions."
                tag="Calcium Carbonate with Vitamin D3 Tablets I.P. (500 mg / 250 lU)"
                author=""
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="FEPAGESIC P"
                text="The Aceclofenac - Paracetamol Combination is Effective & Well Tolerated in Relieving Painful OA Flare up*"
                tag="Aceclofenac 100 mg + Paracetamol 325 mg"
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="JASH GEL"
                text="The Diclofenac Diethylamine, Linseed Oil, Methyl Salicylate, and Menthol Gel Combination Demonstrates Efficacy and Excellent Tolerance in Alleviating Pain Associated with Osteoarthritis Flare-ups."
                tag="Diclofenac Diethylamine, Linseed Oil, Methyl Salicylate with Menthol Gel"
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="FEPAGESIC SP"
                text="The Aceclofenac - Paracetamol and Serratiopeptidase Combination is Effective & Well Tolerated in Relieving Painful OA Flare up*"
                tag="Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 10 mg"
                author=""
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter" style={{ height: "100px" }}>
            {/* <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
  margin: 50px 0px 0 0px;
  @media (max-width: 960px) {
    flex-direction: column;
    margin: 100px 0px 0 0px;
  }
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
