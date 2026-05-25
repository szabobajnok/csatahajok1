import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'

export const Single = () => {
    const params = useParams();
    const id = params.shipNev;
    const [hajo, setHajo] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        axios.get(`https://localhost:7074/api/Hajo/ByName/${id}`)
        .then(response => {
            setHajo(response.data);
            setPending(false);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setPending(false);
        });
    }, [id]);

    return (
     <div className="p-5 m-auto text-center content bg-ivory">
        {isPending || !hajo.nev ? (
            <div className="spinner-border"></div>
        ) : (
            <div className="container"> {/* Bootstrap középre igazított tartalom, fix szélességi töréspontokkal */}

  <h2 className="mb-4"> {/* mb-4 = margin-bottom 4 egység (kb 1.5rem) */}
    Csatahajó részletei
  </h2>

  <div className="row g-4 justify-content-center"> 
      
      <div className="col-12 col-sm-10 col-md-8 col-lg-6">
        
        <div className="card shadow-lg">

           <div className="card-body text-center">
            {/* card-body = kártya tartalom része, automatikus padding */}

            <h6 className="card-title">
                {hajo.nev}
            </h6>
            {/* card-title = kártya cím stílus */}

            <p className="card-text">
                Osztály: <b>{hajo.osztaly}</b>
            </p>

            <p className="card-text">
                Felavatva: <b>{hajo.felavatva}</b>
            </p>

            <p className="card-text">
                Agyúk száma: <b>{hajo.agyukSzama}</b>
            </p>

            <p className="card-text">
                Kaliber: <b>{hajo.kaliber}</b>
            </p>

            <p className="card-text">
                Vízkiszorítás: <b>{hajo.vizkiszoritas}</b>
            </p>

          </div>

        </div>

      </div>
  </div>

</div>
        )
    }

     </div>)};