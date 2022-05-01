import React from "react";
import './Flipper.scss';

const Flipper = (props) => {
    return (
        <div className="flipper">
            <div className="flipper-inner">
                <div className="flipper-front">
                    <img
                        src={props.url || '/'}
                        alt="some picture"
                        className="flipper-image"
                    />
                </div>
                <div className="flipper-back">
                    <h2 className="flipper-back-name">
                        {props.title}
                    </h2>

                    <hr />
                    
                    <p className="flipper-back-descr">
                        {props.descr}
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default Flipper;