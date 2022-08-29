
function ListaSaveta(props) {
    return (
        <div className="lista-saveta-div">

            <div className='kartice-div'>

                <div className="card">
                    <h2 className="card-title mb-3 mt-2"> Upravljanje kućnim budžetom</h2>
                    <img src={props.slika} className="card-img-top" />
                    <div className="card-body">
                        <p className="card-text">Finansijsko planiranje je neophodno pogotovo za početnike da biste mogli da se posvetite ostvarivanju svojih životnih ciljeva, potrebna vam je veština sistematskog finansijskog planiranja.</p>    </div>
                    <button className='btn btn-dark'>Poseti stranicu</button>
                </div>

                <div className="card">
                    <h2 className="card-title mb-3 mt-2"> 40 saveta za uštedu kućnog budžeta</h2>
                    <img src={props.slika} className="card-img-top" />
                    <div className="card-body">
                        <p className="card-text">Štednja je potpuno u trendu: ne samo zbog ekonomske krize već i zbog ekologije i očuvanja resursa naše planete Zemlje.Ekonomska kriza će proći ali prirodni resursi planete nisu neiscrpni – mislimo zato i na život budućih generacija.</p>    </div>
                    <button className='btn btn-dark'>Poseti stranicu</button>
                </div>

                <div className="card">
                    <h2 className="card-title mb-3 mt-2"> Kako da oporavite svoj kućni budžet</h2>
                    <img src={props.slika} className="card-img-top" />
                    <div className="card-body">
                        <p className="card-text">Često vas brine kako ćete da se rešite dugova, minusa, kao i to kako da uklopite standard života u svoja primanja? Nudimo nekoliko saveta kako da efikasno 'oživite' svoj kućni budžet. </p>    </div>
                    <button className='btn btn-dark'>Poseti stranicu</button>
                </div>

            </div>
        </div>
    )
}

export default ListaSaveta;