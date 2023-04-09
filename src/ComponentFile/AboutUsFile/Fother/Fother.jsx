import React, { useContext } from 'react';
import { MoneyContext } from '../GrandFother/GrandFother';

const Fother = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h6>fother</h6>   
            <small>money {money}</small>         
        </div>
    );
};

export default Fother;