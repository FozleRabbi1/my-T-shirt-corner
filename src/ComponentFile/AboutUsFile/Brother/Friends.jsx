import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../GrandFother/GrandFother';

const Friends = () => {
    const godRing = useContext(RingContext)
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h6>B-friends</h6>
            <small>ring :  {godRing}</small>
            <h5>money {money} </h5>
            <button className='bg-red-400 rounded-md px-5' onClick={()=>setMoney(money + 500)}>Add Money</button>
        </div>
    );
};

export default Friends;