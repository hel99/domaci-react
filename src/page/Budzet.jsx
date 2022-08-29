import { useState } from 'react';
import Promene from '../component/Promene';

function Budzet() {

    const [stanje, setStanje] = useState(25000);


    return (
        <div>
            <h1 className="h1-n">Moj budžet</h1>
            <h1 className="h1-n">Stanje: {stanje}</h1>

            <Promene stanje={stanje} />
        </div>
    )
}

export default Budzet;