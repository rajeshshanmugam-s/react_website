import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const [buttonVisible, setButtonVisible] = useState(true);

  const validate = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
      emailjs
        .send(
          "service_t71xo9o",
          "template_jh149fs",
          {
            fname: formData.fname,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          "5QJWfYuzFt_5CFwr1"
        )
        .then(
          (result) => {
            console.log("Email successfully sent:", result.text);
            if (result.text === "OK") {
              setButtonVisible(false);
            }
            // setStatusMessage("Message sent successfully!");
          },
          (error) => {
            console.log("Error sending email:", error.text);
            // setStatusMessage("Failed to send message, please try again.");
          }
        );
      // Submit form or perform further actions
      setIsClicked(true); // Trigger the animation
      setTimeout(() => setIsClicked(false), 500); // Reset animation after 500ms
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Reach out to us today for any inquiries or assistance. We're here
              to help and connect!
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit}>
                <label className="font16">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="Share your name with us"
                  disabled={!buttonVisible}
                />
                {errors.fname && <ErrorMessage>{errors.fname}</ErrorMessage>}

                <label className="font16">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Share your Email with us"
                  disabled={!buttonVisible}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                <label className="font16">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Tell us what you’re focusing on"
                  disabled={!buttonVisible}
                />
                {errors.subject && (
                  <ErrorMessage>{errors.subject}</ErrorMessage>
                )}

                <label className="font16">Message:</label>
                <textarea
                  rows="4"
                  cols="50"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share what’s on your mind, and don’t forget to add your contact info"
                  disabled={!buttonVisible}
                />
                {errors.message && (
                  <ErrorMessage>{errors.message}</ErrorMessage>
                )}
                {buttonVisible && (
                  <SubmitWrapper className="flex">
                    <AnimatedButton
                      type="submit"
                      value="Send Message"
                      className={`pointer animate radius8 ${isClicked ? "clicked" : ""}`}
                      style={{
                        maxWidth: "220px",
                        backgroundColor: "#1976d2",
                        height: "40px",
                      }}
                    />
                  </SubmitWrapper>
                )}
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// Keyframes for button animation
const clickAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

// Styled-components
const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
  input::placeholder,
  textarea::placeholder {
    color: #707070; /* Change to any desired color */
    opacity: 0.7; /* Adjust the opacity to make it more subtle if needed */
    font-style: italic; /* Optional: make the placeholder italic */
    font-size: 14px;
  }
`;

const AnimatedButton = styled.input`
  background-color: #1976d2; /* Primary background color */
  width: 100%;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s,
    box-shadow 0.3s;
  z-index: 10; /* Ensure the button is on top if needed */

  /* Hover effects */
  :hover {
    background-color: #155a8a; /* Darker blue on hover */
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
  }

  /* Focus effect for accessibility */
  :focus {
    outline: none;
    box-shadow: 0 0 5px rgba(25, 118, 210, 0.8); /* Blue glow on focus */
  }

  /* Animation when button is clicked */
  &.clicked {
    animation: ${clickAnimation} 0.5s ease-in-out;
  }

  /* Responsive design for smaller screens */
  @media (max-width: 991px) {
    width: 100%; /* Ensures button spans full width on smaller screens */
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    font-size: 14px; /* Smaller font size for small devices */
    padding: 12px;
  }
`;

const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;

const SubmitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: -20px;
  margin-bottom: 20px;
`;
