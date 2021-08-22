import React, { ReactElement} from 'react';
import './style.scss';

interface Props {
    text: string;
    icon: any;
}

function Button({text, icon}: Props): ReactElement {
    return (
    <>
        {!!text &&  <button type="button" className="rounded-pill btn-rounded">
            {text}
            <span>
                {!!icon && icon}
            </span>
          </button>}
          </>);
    
}

export default Button;
