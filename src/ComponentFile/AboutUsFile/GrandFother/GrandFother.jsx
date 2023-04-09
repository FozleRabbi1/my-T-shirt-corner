import React, { createContext, useState } from 'react';
import Fother from '../Fother/Fother';
import Mother from '../Mother/Mother';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import './grandFother.css'

export const RingContext = createContext("golden ring")
export const MoneyContext = createContext(0)

const GrandFother = () => {
    const [money, setMoney] = useState(0)
    return (
        <div className='mt-10 grand-fother'>
            <h2>grand fother</h2>
            <small>money {money}</small>
            {/* <small>ring : {RingContext}</small> */}
            <div className="familly grid grid-cols-3 mt-10">
                <RingContext.Provider value='golder ring'>
                    <MoneyContext.Provider value={[money, setMoney]}>
                        <Fother></Fother>
                        <Mother></Mother>
                        <Brother></Brother>
                        <Sister></Sister>
                    </MoneyContext.Provider>
                </RingContext.Provider>
            </div>
        </div>
    );
};

export default GrandFother;