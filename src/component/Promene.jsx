import { useState } from 'react';

function Promene(props) {

    const [tipTransakcije, setTipTransakcije] = useState('');
    const [iznos, setIznos] = useState();

    function handleSelect(e) {
        setTipTransakcije(e.target.value)
    }

    function handleIznos(e) {
        setIznos(parseInt(e.target.value));
    }



    return (
        <div>
            <select id="prihod-trosak-select" onChange={handleSelect} value={tipTransakcije}>
                <option>Izaberi tip</option>
                <option value="prihod">Prihod</option>
                <option value="trosak">Trošak</option>
            </select>

            <input type="number" id="input-iznos" onChange={handleIznos} value={iznos} />

            <div>
                <button id='btn-unesi' onClick={() => props.promeniStanje(tipTransakcije, iznos)}>Unesi</button>
            </div>
        </div>
    )
}

export default Promene;