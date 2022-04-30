import React from "react";
import './Button.scss';
const noop = () => { };

const Button = (props) => {
    return (
        <>
            <button
                className={'button' + ' ' + props.className.join` `}
                type="button"
                onClick={props.onClick || noop}>
                {props.text || ''}
            </button>
        </>
    )
}

export default Button;