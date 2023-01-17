import axios from "axios";
import Swal from "sweetalert2";

export const actionTypes = {
  GET_ARTICULOS: "GET_ARTICULOS",
  
};


export function getArticulos() {
  return function (dispatch) {
    return axios("/articulos")
      .then((response) => {
        return dispatch({
          type: actionTypes.GET_ARTICULOS,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
        return Swal.fire({
          icon: "error",
          title: "FALLA EN GETARTICULOS",
          html: "LINEA 24 ACTIONS",
        });
      });
  };
}


