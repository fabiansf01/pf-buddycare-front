

import { useSelector, useDispatch } from "react-redux";
import { ArticuloContainer } from "../css/ArticulosContainer.module.css";
//import Swal from "sweetalert2";
import Articulo from "../components/Articulo";
import {
  ArticulosNotFound,
  p_ArticuloNotFound,
} from "../css/PageNotFound.module.css";
import { clearArticulos, deleteArticulo, getArticulos } from "../../actions";

function ArticulosContainer({ lastItemIndex, firstItemIndex }) {
  //https://react-redux.js.org/api/hooks DOCUMENTACION
  const Articulos = useSelector((state) => state.Articulos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteArticulo(id));
    dispatch(clearArticulos());
    dispatch(getArticulos());
  };

  return (
    <>
      {Articulos.length !== 0 ? (
        <div className={ArticuloContainer}>
          {Array.isArray(Articulos) === false ? (
            <>
              <Articulo
                key={Articulos.id}
                Articulos={Articulos}
                
              />
            </>
          ) : (
            Articulos?.slice(firstItemIndex, lastItemIndex).map((Articulo) => {
              return (
                <Articulo
                  Articulos={Articulo}
                  
                  key={Articulo.id}
                />
              );
            })
          )}
        </div>
      ) : (
       
        <>
       


        <div >
        <p >Articulo INEXISTENTE </p>
          </div> 
        <br></br><br></br>
      </>
    )}
  </>
);
}

export default ArticulosContainer;
