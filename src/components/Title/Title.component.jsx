import React, { Fragment } from 'react';
import {
        DivTitle,
        TitleText,
        Subtitle,
        ButtonCotizar,
        TitleButton
} from './Title.styles';


const Title = () => {
return ( 
    <Fragment>
        <DivTitle>
            <TitleText>En tan solo 5 minutos podrás crear tu propia fiesta</TitleText>
            <Subtitle>Nosotros nos encargamos de todo</Subtitle>
            <ButtonCotizar>
                <TitleButton>Cotiza ahora</TitleButton>
            </ButtonCotizar>
        </DivTitle>
    </Fragment>
 );
}

export default Title;
