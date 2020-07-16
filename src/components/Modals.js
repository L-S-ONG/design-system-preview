import React from "react";
import {typeScale, primaryFont} from "../utils";
import styled from "styled-components";
import { Illustrations, CloseIcon } from "../assets"
import { PrimaryButton, SecondaryButton } from "./Buttons"
import { useSpring, animated, config } from "react-spring";
import { EmailInput, PasswordInput } from "./TextFields";

const getAnimation = showModal => {
    return {
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0)` : `translateY(-200%)`
    };
};

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow 0 5px 16px rgba(0,0,0, 0.2);
    font-family: ${primaryFont};
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
`;

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`;


const SignUpHeader = styled.h3`
    font-size:${typeScale.header3};
`;

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`;

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`;

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
`;

export const SignUpModal = ({showModal, setShowModal}) => {
    //animations
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        config: config.slow
    });
    return(
        <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignUp} alt="Sign up for an account" aria-hidden="true" />
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Sign up to get free access!</SignUpText>
                <PrimaryButton>Sign Up!</PrimaryButton>
                <CloseModalButton onClick={() => setShowModal(false)} aria-label="Close Modal">
                    <CloseIcon />
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>
    )
};

export const SignInModal = ({ showModal, setShowModal }) => (
    <animated.div style={useSpring(getAnimation(showModal))}>
      <ColumnModalWrapper>
        <div>
          <ModalHeader>Sign In</ModalHeader>
          <EmailInput label="Email" placeholder="lsong@gmail.com" />
          <PasswordInput label="Password" />
          <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
            Sign Up
          </SecondaryButton>
          <PrimaryButton>Sign In</PrimaryButton>
        </div>
        <img src={Illustrations.SignIn} alt="Sign in to your account" />
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ColumnModalWrapper>
    </animated.div>
  );

