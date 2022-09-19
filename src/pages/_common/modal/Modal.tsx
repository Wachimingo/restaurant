import React from 'react';
import styled from 'styled-components';
import { ReactPortal } from 'pages/_common';

const ModalWrapper = styled.div<any>`
  display: ${p => p.isOpen ? 'block' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const ModalContent = styled.div`
    background-color: ${p => p.theme.id === 'light' ? 'white' : p.theme.colors.navBar.secondaryColor};
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`

const CloseButton = styled.span<any>`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
    &:focus{
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`

type Props = {
    children?: any,
    isOpen: Boolean,
    setIsOpen: Function,
    setIsPost?: Function,
    wrapperId: string,
    clearForm?: Function,
    props?: any
}

export const Modal = ({ children, isOpen, setIsOpen, setIsPost, wrapperId = 'default', ...props }: Props) => {
    if (!isOpen) return null;
    /**
     * If the target of the event is the modal, remove the event listener and close the modal.
     * @param {any} event - any - the event that is passed to the function
     */
    const closeWhenClickOutside = (event: Event) => {
        if (event.target == document.getElementById(`${wrapperId}-modal`)) {
            if (props.clearForm) props.clearForm();
            window.removeEventListener('click', closeWhenClickOutside);
            if (setIsPost) setIsPost(true);
            setIsOpen(false);
        }
    }
    window.addEventListener('click', closeWhenClickOutside);

    const closeWhenXClick = () => {
        if (props.clearForm) props.clearForm();
        if (setIsPost) setIsPost(true);
        setIsOpen(false);
    }

    return (
        <ReactPortal wrapperId={wrapperId}>
            <ModalWrapper isOpen id={`${wrapperId}-modal`}>
                <ModalContent>
                    <CloseButton onClick={() => closeWhenXClick()}>
                        &times;
                    </CloseButton>
                    {children}
                </ModalContent>
            </ModalWrapper>
        </ReactPortal>
    )
}