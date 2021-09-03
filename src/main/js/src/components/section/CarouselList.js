import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../css/Carousel.css'
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

export const CarouselList = () => {
    const [images, setImages] = useState([])
    const [isLoading, setLoading] = useState(true);

    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));

    const classes = useStyles()

    useEffect(() => {
        const getImages = async () => {
            const result = await axios.get(
                "https://online-store-120.herokuapp.com/store/slider"
            );
            setImages(result.data)
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                }, 2000)
        };
        getImages();
    }, []);

    if (isLoading) {
        return <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
        </Backdrop>
    }

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


