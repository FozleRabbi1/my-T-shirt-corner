import React, { useContext } from 'react';
import { MoneyContext } from '../GrandFother/GrandFother';

const SisFriends = () => {
    const [money , setMoney] = useContext(MoneyContext)
    return (
        <div>

            <h6>S-friends</h6>
            <h5>Money {money}</h5>
            <button className='bg-green-400 px-5 rounded-md' onClick={()=>setMoney(money + 500)}>add s money</button>


        </div>
    );
};

export default SisFriends;