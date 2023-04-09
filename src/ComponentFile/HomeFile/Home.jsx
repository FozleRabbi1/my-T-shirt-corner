import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowSingleShirt from './ShowSingleShirt';
import "./Home.css";

const Home = () => {
    const [addData, setAddData] = useState([])
    const getShirtData = useLoaderData();
    const datas = JSON.parse(getShirtData);
    // console.log(datas)
    const addTocartFun = (data) => {

        const alreadyExixt = addData.find(d => d._id === data._id)
        if (alreadyExixt) {
            alert("data already exist");
            return
        } else {
            const newData = [...addData, data];
            setAddData(newData)
        }

    }
    const handleDeleteCart = (id) => {
        console.log(id)
        const remaining = addData.filter(data => data._id !== id);
        setAddData(remaining)
    }

    return (
        <div className=' data-main-container mx-auto my-10 '>

            {/* <div className="main-div grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "> */}
            <div className="main-div grid justify-center grid-cols-1 md:mx-0  md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-14">
                {
                    datas?.map(data => <ShowSingleShirt
                        data={data}
                        addTocartFun={addTocartFun}
                        handleDeleteCart={handleDeleteCart}
                    ></ShowSingleShirt>)
                }

            </div>

            <div className="order-summery">
                {/* <div className="order-summery  p-10 sticky top-10"> */}
                <h2 className={`${addData.length === 0 ? "addStyle" : "removeStyle"} ${addData.length >= 3 && "addMoneStyle"}` } >Order summery here</h2>

                {/* {
                    addData.map(data => <li> name : {data.name} <button onClick={() => handleDeleteCart(data._id)} >X</button> </li>)
                } */}
                <div>
                    {
                        addData.length === 0 ? <p>Enter some product</p> : addData.map(data => <li> name : {data.name} <button onClick={() => handleDeleteCart(data._id)} >X</button> </li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;