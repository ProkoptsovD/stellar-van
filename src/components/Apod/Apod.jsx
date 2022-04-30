import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Flipper from '../Flipper/Flipper';
import { fetchPictures } from '../../js/fetchImages.js';
import './Apod.scss';

const Apod = () => {
    const [title, setTitle] = useState('Picture title');
    const [author, setAuthor] = useState('author');
    const [descr, setDescr] = useState('Here must be description')
    const [bgImage, setBgImage] = useState('');

    const makeRequest = () => {
    fetchPictures('https://api.nasa.gov/planetary/apod')
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Something went wrong...')
        })
        .then((data) => {
            setTitle(data.title);
            setAuthor(data.copyright);
            setBgImage()
        }).catch(console.log)
}
    
    // useEffect(makeRequest, []);
    
    return (
        <section
            className="apod"
            data-apod="apod-bg">
            <div className="container apod__container">
                
                {/* flip effect */}
                <Flipper
                    title={title}
                    descr={descr}
                    
                />
                <h1
                    className="apod__title"
                    data-apod="title">
                    {title}
                </h1>
                <small
                    className="apod__text"
                    data-apod="copyright">                   
                    {author}
                </small>
                <p
                    className="apod__tip">                    
                    astronomy picture of the day
                </p>
                <Button
                    className={['apod__btn']}
                    text='Share'
                />
            </div>
        </section>
    );
}

export default Apod;