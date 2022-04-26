import React from "react";

const Apod = () => {
    return (
        <section className="apod" data-apod="apod-bg">
            <div className="container apod__container">
                <h1 className="apod__title" data-apod="title">Picture title</h1>
                <small className="apod__text" data-apod="copyright">author</small>
                <p className="apod__tip">astronomy picture of the day</p>
                <button className="button apod__btn">Start</button>
            </div>
        </section>
    );
}

export default Apod;