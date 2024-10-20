// import React from "react";
// import styled from "styled-components";

// export default function BlogBox({ tag, title, text, action, author }) {
//   return (
//     <WrapperBtn
//       className="animate pointer"
//       onClick={action ? () => action() : null}
//     >
//       <Wrapper className="whiteBg radius8 shadow">
//         <h3 className="font20 extraBold">{title}</h3>
//         <p className="font15" style={{ padding: "30px 0" }}>
//           {text}
//         </p>
//         <p className="font13 extraBold">{author}</p>
//         <div className="flex">
//           <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
//         </div>
//       </Wrapper>
//     </WrapperBtn>
//   );
// }

// const Wrapper = styled.div`
//   width: 100%;
//   text-align: left;
//   padding: 20px 30px;
//   margin-top: 30px;
// `;
// const WrapperBtn = styled.button`
//   border: 0px;
//   outline: none;
//   background-color: transparent;
//   :hover {
//     opacity: 0.5;
//   }
// `;
import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <Card onClick={action ? () => action() : null} className="animate pointer">
      <Content>
        <Title>{title}</Title>
        <Description>{text}</Description>
        <AuthorSection>
          <AuthorName>{author}</AuthorName>
        </AuthorSection>
        {tag && <TagBadge>{tag}</TagBadge>}
      </Content>
    </Card>
  );
}

// Styled Components

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 100%;
  max-width: 350px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid #e6e6e6;
  min-height: 350px;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    background: #eeeeee;
  }
`;

const Content = styled.div`
  padding: 25px;
  flex: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.7;
  margin-bottom: 18px;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const AuthorName = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #555;
  margin-left: 10px;
`;

const TagBadge = styled.div`
  background-color: #1a73e8;
  color: white;
  padding: 16px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-start;
  display: flex;
  justify-content: space-evenly;
`;

const ActionButton = styled.button`
  background-color: #1a73e8;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  border-top: 1px solid #e6e6e6;
  border-radius: 0 0 20px 20px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #1558b2;
    transform: translateY(-2px);
  }
`;
