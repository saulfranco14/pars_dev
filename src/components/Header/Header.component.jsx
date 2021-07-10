import React, { Fragment } from 'react';
import {
        ButtonIngresar,
        TitleButton,
        DivHeader
    } from './Header.styles';


const Header = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <ButtonIngresar> 
                    <TitleButton> Ingresar </TitleButton>
                </ButtonIngresar>
            </DivHeader>
        </Fragment>
     );
}
 
export default Header;
