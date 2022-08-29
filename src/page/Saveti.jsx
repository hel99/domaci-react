import ListaSaveta from "../component/ListaSaveta";

function Saveti() {

    const slika = "https://i.insider.com/61969ba3a2e68800198aeade?width=1136&format=jpeg";

    return (
        <div>
            <h1 className="h1-n">Upravljanje budžetom</h1>
            <ListaSaveta slika={slika} />
        </div>
    )
}

export default Saveti;