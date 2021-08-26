import React, { useState, useEffect, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../css/Carousel.css'
import axios from 'axios';
import { DataContext } from '../DataProvider'

export const CarouselList = () => {
    const { spinner } = useContext(DataContext)
    const [images, setImages] = useState([])
    // const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getImages = async () => {
            const result = await axios.get(
                "/store/slider"
            );
            setImages(result.data)
            // setLoading(false)
        };
        getImages();
    }, []);

    // if (isLoading) {
    //     return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" style={spinner} />
    //   }

    return (
        <div>
            <Carousel style={{ zIndex: "3" }}>
                {
                    images.map(item => (
                        <Carousel.Item key={item.index}>
                            <img
                                className="d-block w-100 cover"
                                src={`data:image/jpeg;base64,${item.image}`}
                                alt="First slide"
                                key={item.index}
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CarouselList


