import React, { useState, useEffect } from 'react';

export default function Photo(props) {
    const [photos, setPhotos] = useState([props.images[0]]);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {

        async function fetchData()
        {
            await sleep(3000);
            setPhotos([...photos, props.images[1]]);
        }

        fetchData();
    }, [])

    return (
        <div className = "Photos">
            {photos.map((img,i) => {
                return <div className = "Photos-container" key = {i} style = {{transform: `rotate(${img.rot}deg)`}}>
                    <img src = {img.image} alt="me"/>
                </div>
            })}
        </div>
    )
}