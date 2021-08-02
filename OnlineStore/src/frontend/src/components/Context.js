import React, { Component } from 'react';
import './css/Order.css';
import axios from 'axios';


export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "DOLCE & GABBANA",
                "src": [
                    "https://www.net-a-porter.com/variants/images/11452292646026328/in/w920_q80.jpg",
                    "https://www.net-a-porter.com/variants/images/11452292646026328/ou/w2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1331261/1331261_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1331261/1331261_cu_920_q80.jpg"
                ],
                "description": "Printed cotton-blend poplin bralette",
                "content": "Dolce & Gabbana's printed cotton-blend poplin bralette depicts ceremonial standards held by jousting knights. It's cut for a close fit with boning down each side and traced with picot trims. Style yours with a white skirt to make the colors really pop.",
                "price": "875",
                "color": "Yellow",
                "count": 1
            },
            {
                "_id": "2",
                "title": "ZIMMERMANN",
                "src": [
                    "https://www.net-a-porter.com/variants/images/6630340698820929/in/w920_q80.jpg",
                    "https://www.net-a-porter.com/variants/images/6630340698820929/ou/w2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1336877/1336877_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1336877/1336877_cu_920_q80.jpg"
                ],
                "description": "Aliane cutout tie-front broderie anglaise cotton midi dress",
                "content": "Zimmermann's 'Aliane' dress is perfect for a bohemian bride. It's made from airy broderie anglaise cotton and has voluminous blouson sleeves and cutout sides that show off a flash of skin. It's fully lined through the bust and skirt to keep you covered where you need it most.",
                "price": "1150",
                "color": "Ivory",
                "count": 1
            },
            {
                "_id": "3",
                "title": "DOLCE & GABBANA",
                "src": [
                    "https://cache.net-a-porter.com/images/products/1331257/1331257_in_920_q80.jpg", 
                    "https://cache.net-a-porter.com/images/products/1331257/1331257_ou_2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1331257/1331257_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1331257/1331257_cu_920_q80.jpg"
                ],
                "description": "Tiered printed cotton-poplin maxi skirt",
                "content": "Dolce & Gabbana has answered this season's call for joyful dressing with a bold printed skirt. Made in Italy from cotton-poplin, it sits on the waist and gradually builds in volume with tiers to enhance the shape. The maxi-length hem invites you to add a dainty anklet.",
                "price": "1345",
                "color": "Red",
                "count": 1
            },
            {
                "_id": "4",
                "title": "JACQUEMUS",
                "src": [
                    "https://www.net-a-porter.com/variants/images/11452292646426029/in/w920_q80.jpg", 
                    "https://www.net-a-porter.com/variants/images/11452292646426029/ou/w2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1348944/1348944_fr_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1348944/1348944_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1348944/1348944_cu_920_q80.jpg"
                ],
                "description": "Alzou cropped mohair-blend cardigan",
                "content": "Jacquemus' 'Alzou' cardigan has a daring shrunken fit - it's one of the French designer's go-to silhouettes. With plenty of mohair in the blend, you can imagine how wonderfully soft and fluffy it feels.",
                "price": "340",
                "color": "Beige",
                "count": 1
            },
            {
                "_id": "5",
                "title": "ROKSANDA",
                "src": [
                    "https://www.net-a-porter.com/variants/images/11452292646576638/in/w920_q80.jpg", 
                    "https://www.net-a-porter.com/variants/images/11452292646576638/ou/w2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1344290/1344290_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1344290/1344290_cu_920_q80.jpg"
                ],
                "description": "Naomina pleated cotton-poplin midi dress",
                "content": "What better way to inject a touch of joyful color into your wardrobe than with Roksanda's vibrant yellow 'Naomina' dress? It's cut from crisp cotton-poplin that's artfully pleated throughout and threaded with a contrasting belt to cinch the shape.",
                "price": "1665",
                "color": "Yellow",
                "count": 1
            },
            {
                "_id": "6",
                "title": "GUCCI",
                "src": [
                    "https://www.net-a-porter.com/variants/images/10163292707173784/in/w920_q80.jpg", 
                    "https://www.net-a-porter.com/variants/images/10163292707173784/ou/w2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1329754/1329754_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1329754/1329754_cu_920_q80.jpg"
                ],
                "description": "Belted organic cotton-twill jacket",
                "content": "Gucci's belted safari jacket is tailored from organic cotton-twill that's grown without the use of pesticides and synthetic fertilizers. It's detailed with utilitarian pockets and the label's gold 'GG' buttons. If you're wearing jewelry with it, mix different metals for a modern look.",
                "price": "2200",
                "color": "White",
                "count": 1
            },
            {
                "_id": "7",
                "title": "SEA",
                "src": [
                    "https://www.net-a-porter.com/variants/images/11452292646492269/in/w920_q80.jpg", 
                    "https://www.net-a-porter.com/variants/images/11452292646492269/ou/w2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1339232/1339232_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1339232/1339232_cu_920_q80.jpg"
                ],
                "description": "Ziggy striped crochet-knit sweater",
                "content": "Sea's colorful 'Ziggy' sweater is modeled on one that was hand-crocheted by co-founder Monica Paolini's grandmother - she personally taught the brand's team how to recreate it. It's spun with generous amounts of wool and cotton in a joyful rainbow palette. Wear yours with denim.",
                "price": "465",
                "color": "Red",
                "count": 1
            },
            {
                "_id": "8",
                "title": "BALMAIN",
                "src": [
                    "https://www.net-a-porter.com/variants/images/11452292645941257/in/w920_q80.jpg",
                    "https://www.net-a-porter.com/variants/images/11452292645941257/ou/w2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1338183/1338183_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1338183/1338183_cu_920_q80.jpg"
                ],
                "description": "Double-breasted frayed tweed blazer",
                "content": "Our buyers highlight boyish blazers as a key investment for the season - you can wear them now and for years to come, too. Topping the wish list, Balmain's frayed version is tailored from soft white tweed and punctuated by signature gold buttons, which you could match your jewelry to.",
                "price": "2995",
                "color": "White",
                "count": 1
            },
            {
                "_id": "9",
                "title": "GUCCI",
                "src": [
                    "https://www.net-a-porter.com/variants/images/10163292707173775/in/w2000_q80.jpg", 
                    "https://www.net-a-porter.com/variants/images/10163292707173775/ou/w2000_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1329777/1329777_fr_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1329777/1329777_bk_920_q80.jpg",
                    "https://cache.net-a-porter.com/images/products/1329777/1329777_cu_920_q80.jpg"
                ],
                "description": "Button-embellished checked tweed mini skirt",
                "content": "Recalling styles from the '60s, Gucci's retro mini skirt is made from tactile tweed in a structured silhouette. It's woven with navy and red checks and embellished with decorative medallion buttons at the waist. It'll look so chic styled with the matching jacket.",
                "price": "1300",
                "color": "White",
                "count": 1
            }
        ],
        cart: [],
        total: 0
    }

    // state = {
    //     products: [],
    // };

    // componentDidMount() {
    //     axios.get('https://online-store-120.herokuapp.com/store/products').then(res => {
    //         console.log(res);
    //         this.setState({products: res.data});
    //     });
    // }

    // render() {
    //     return (
    //         <ul>
    //             {this.state.products.map(product => <li>{product.name}</li>)}
    //         </ul>
    //     )
    // }

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("The product has been added to cart.")
            // <Alert severity="success">The product has been added to cart.</Alert>
        }
    };

    decrease = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    }

    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    }

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: res })
    }

    removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart })
            this.getTotal();
        }
    }

    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    }

    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }

        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if (dataTotal !== null) {
            this.setState({ total: dataTotal });
        }
    }

    render() {
        const { products, cart, total } = this.state;
        const { addCart, decrease, increase, removeProduct, getTotal } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart, decrease, increase, removeProduct, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

