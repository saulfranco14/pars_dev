import React, { Fragment, useState } from 'react';
import { Modal } from '../Modal/Modal.component';
import {
        DivTitle,
        TitleText,
        Subtitle,
        ButtonCotizar,
        TitleButton
} from './Title.styles';


const Title = () => {
    const [showModal, setShowModal] = useState(false)
        const openModal = () =>{
            setShowModal(prev => !prev)
        }
return ( 
    <Fragment>
        <DivTitle>
            <TitleText>En tan solo 5 minutos podrás crear tu propia fiesta</TitleText>
            <Subtitle>Nosotros nos encargamos de todo</Subtitle>
            <ButtonCotizar>
                <TitleButton onClick={openModal}>Cotiza ahora</TitleButton>
            </ButtonCotizar>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
        </DivTitle>
    </Fragment>
 );
}

export default Title;
