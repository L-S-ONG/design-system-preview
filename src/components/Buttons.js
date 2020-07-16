import styled from "styled-components";
import {typeScale} from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small:() => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large:() =>`
        font-size:${typeScale.header5};
        padding: 16px 24px;
    `,
    warning:({theme}) =>`
        background-color: ${theme.status.warningColor};
        color: ${theme.textColorInverted};

        &:hover, &:focus {
            background-color:${theme.status.warningColorHover};
            outline: 3px solid ${theme.status.warningColorHover};
        }

        &:active{
            background-color: ${theme.status.warningColorActive};
        }
    `,
    warningSecondary:({theme}) =>`
        background: none;
        border: 2px solid ${theme.status.warningColor};
        color: ${theme.status.warningColor};
    `,
    warningTertiary:({theme}) =>`
        background:none;
        color: ${theme.status.warningColor};
    `,
    error:({theme}) =>`
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
        background-color:${theme.status.errorColorHover};
        outline: 3px solid ${theme.status.errorColorHover};
    }

    &:active{
        background-color: ${theme.status.errorColorActive};
    }
    `,
    errorSecondary:({theme}) =>`
        background: none;
        border: 2px solid ${theme.status.errorColor};
        color: ${theme.status.errorColor};
    `,
    errorTertiary:({theme}) =>`
        background:none;
        color: ${theme.status.errorColor};
    `,
    success:({theme}) =>`
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
        background-color:${theme.status.successColorHover};
        outline: 3px solid ${theme.status.successColorHover};
    }

    &:active{
        background-color: ${theme.status.successColorActive};
    }
    `,
    successSecondary:({theme}) =>`
        background: none;
        border: 2px solid ${theme.status.successColor};
        color: ${theme.status.successColor};
    `,
    successTertiary:({theme}) =>`
        background:none;
        color: ${theme.status.successColor};
    `
};

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;

    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${props => props.theme.primaryColorActive};
        border-color: ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.textColorOnPrimary};
    }
`;

export const PrimaryButton = styled(Button)`
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColorOnPrimary};
    border: 2px solid transparent;

    &:disabled{
        background: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};

    &:disabled{
        background: none;
        color: ${props => props.theme.textOnDisabled};
        border-color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    background: none;
    border: 2px solid transparent;
    color: ${props => props.theme.primaryColor};

    &:disabled{
        background: none;
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;