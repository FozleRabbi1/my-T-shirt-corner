import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowSingleShirt from './ShowSingleShirt';

const Home = () => {
    const getShirtData = useLoaderData();
    const datas = JSON.parse(getShirtData);
    console.log(datas)

    return (
        <div>

            <div className="main-dive grid w-11/12 mx-auto my-10 justify-center md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-28">
                {
                    datas?.map(data => <ShowSingleShirt
                        data={data}
                    ></ShowSingleShirt>)
                }

            </div>
        </div>
    );
};

export default Home;