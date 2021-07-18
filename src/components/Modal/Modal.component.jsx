import React, { Fragment } from 'react';
import {
    Background,
    ModalWrapper,
    CloseModalBtn

} from './Modal.styles';

export const Modal = ({showModal, setShowModal}) =>{
    return (
        <>
        {showModal ? (
            <Background>
                <ModalWrapper showModal={showModal}>
                    <CloseModalBtn onClick={() => 
                        setShowModal(prev => !prev)}>❌</CloseModalBtn>
                </ModalWrapper>
            </Background>
        ) : null}
        </>  
    )
}