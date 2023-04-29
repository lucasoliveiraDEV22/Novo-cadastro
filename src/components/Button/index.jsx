import React from 'react';

import { Button as NewButton} from './styles'

function Button({children, ...props}){

    return<NewButton {...props}>{children}</NewButton>
}

export default Button;