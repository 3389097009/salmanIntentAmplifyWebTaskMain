import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const theme = {
    colors: {
        white: "#ffffff",
        btn: "#007bff", // Example button color
        // Add other colors you need
    },
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;
      

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

         input, textarea {
          border: 1px solid ${({ theme }) => theme.colors.btn}; /* Add border */
          padding: 1rem; /* Add padding for better appearance */
          border-radius: 5px; /* Optional: Add border radius for rounded corners */
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid ${({ theme }) => theme.colors.btn}; /* Add border */
          background-color: ${({ theme }) => theme.colors.btn}; /* Ensure

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const ContactUs = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Wrapper className="mt-[-80px]">
                <h1 className="common-heading text-2xl text-blue-800 md:pl-12 pl-6">📞Feel Free to Contact us</h1>
                <iframe className=" mx-auto"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
                    width="95%"
                    height="350"
                    style={{ border: 1 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="container">
                    <div className="contact-form">
                        <h1 className=" text-lg text-blue-800">We are always here for you😊!</h1>
                        <form
                            action="https://formspree.io/f/xgedgjkr"
                            method="POST"
                            className="contact-inputs"
                        >
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                autoComplete="off"
                                required
                            />

                            <input
                                type="email"
                                name="Email"
                                placeholder="Enter your e-mail"
                                autoComplete="off"
                                required
                            />

                            <textarea
                                padding="12px 20px"
                                name="message"
                                cols="30"
                                rows="6"
                                placeholder="Please tell us more about your requirements!"
                                autoComplete="off"
                                required
                            ></textarea>

                            <input type="submit" value="send" />
                        </form>
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </ThemeProvider>
    );
};

export default ContactUs;
