import React from "react";

const LoadingScreen = ({text}) => {
    return (
        <div className="loading-screen" data-loader>
            <div className="loader">
                {text}
                <span></span>
                <span></span>
                <span></span>

                <b className="dot1">.</b>
                <b className="dot2">.</b>
                <b className="dot3">.</b>
            </div>
        </div>
    )
}

export default LoadingScreen;