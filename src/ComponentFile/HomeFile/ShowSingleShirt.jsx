import React from 'react';
import "./SIngleCart.css";

const ShowSingleShirt = ({ data, addTocartFun }) => {
    // console.log(data)
    const { gender, name, index, picture, price, _id } = data;

    return (
        <div>
            <div class="single-cart-style block">

                <div class="block-1">
                    <img src={picture} />
                    <div className="button-div ">
                        <div className="info-div">
                            <p>gender : {gender ? gender : "No data"}</p>
                            <p>Name : {name}</p>
                            <p>price : {price} $</p>
                            
                        </div>
                        <button onClick={()=>addTocartFun(data)}>add to cart</button>
                    </div>
                </div>

                <div class="block-2"></div>
                <div class="block-3"></div>
                <div class="block-4"></div>
                <div class="block-5"></div>

            </div>

            {/* <div class="card">
                <div class="content">
                    <h1>BBBootstrap.com</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</p>
                </div>
            </div> */}
        </div>
    );
};

export default ShowSingleShirt;