import React from "react";
import './LoadingScreen.css';

const LoadingScreen = ({text}) => {
    return (
        <div className="loading-screen is-hidden" data-loader>
            <div className="loader loading">
                {text}
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default LoadingScreen;