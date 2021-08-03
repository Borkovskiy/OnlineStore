import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Details.css'

export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: [], 
        index: 0
    };

    myRef = React.createRef();

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ product: data })
        }
    };

    componentDidMount() {
        this.getProduct();
    }

    handleTab = index => {
        this.setState({index: index});
        const images = this.myRef.current.children;
        for(let i =0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "")
        }
        images[index].className = "active";
    };

    render() {
        const { product, index } = this.state;
        const { addCart } = this.context;
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <div className="product_img">
                                <img src={item.src[index]} alt="" />
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>Color: <span>{item.color}</span></p>
                                <p>{item.content}</p>

                                <div className="images" ref={this.myRef}>
                                    {
                                        item.src.map((img, index) => (
                                            <img src={img} alt="" key={index} 
                                                onClick={() => this.handleTab(index)}
                                            />
                                        ))
                                    }
                                </div>

                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
