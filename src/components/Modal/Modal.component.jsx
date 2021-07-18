import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    MyVerticallyCenteredModal

} from './Modal.styles';

export const Modal = ({showModal, setShowModal}) =>{
    return (
        <>
        <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
        </>  
    )
}