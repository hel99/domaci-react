import { useState } from 'react';

function Promene() {

    const [tipTransakcije, setTipTransakcije] = useState('');

    function handleSelect(e) {
        setTipTransakcije(e.target.value)
    }

    console.log(tipTransakcije);

    return (
        <div>
            <select id="prihod-trosak-select" onChange={handleSelect} value={tipTransakcije}>
                <option value="prihod">Prihod</option>
                <option value="trosak">Trošak</option>
            </select>

            <input type="text" id="input-iznos" />
        </div>
    )
}

export default Promene;