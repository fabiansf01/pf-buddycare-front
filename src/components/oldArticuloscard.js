import { useState, useEffect } from 'react';

function Articuloscard() {

    const options = {
        method: "GET"
      };

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/articulos', options)
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
       console.log(articulos)
        setArticulos(articulos)
      })
  }, [])

  return (
    <div>
      
          {articulos.map(art => {
            return (
             <div>
                <p>{art.id}</p>
                <p>{art.id}</p>
                <p>{art.descripcion}</p>
                <p>{art.precio}</p>
             </div>
            );
          })}
       
    </div>
  );
}

export default Articuloscard;


  