import { useState } from 'react';
import Promene from '../component/Promene';

function Budzet() {

    const [stanje, setStanje] = useState(25000);

    function promeniStanje(tip, iznos) {

        if (tip === 'trosak') {
            const novot = stanje - iznos;
            setStanje(novot)
        }
        if (tip === 'prihod') {
            const novot = stanje + iznos;
            setStanje(novot);
        }
    }

    return (
        <div>
            <h1 className="h1-n">Moj budžet</h1>
            <h1 className="h1-n">Stanje: {stanje} RSD</h1>

            <Promene promeniStanje={promeniStanje} />
        </div>
    )
}

export default Budzet;