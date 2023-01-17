import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { NavLink } from 'react-router-dom';

export default class Articuloscard extends Component {

    state = {
        articulos: []
        , status: false
    }

   

    cargarArticulos =async () => {
        var url = 'http://localhost:3001/api/articulos';
        
       /* axios.get(url ).then(res => {
          
        
         
        });*/

        const {data}= await axios.get(url)

        this.setState({
          //   articulos: res.data
          //    , status: true
          
                ...this.state, articulos: data  , status: true
          });
    




    }

    


    componentDidMount = () => {
        this.cargarArticulos();

        
    }

    render() {
        return (
            <div>
                <h1>Articulos</h1>
                <table className="table table-info">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id articulo</th>
                            <th>Nombre</th>
                            <th>descripcion</th>
                            <th>precio</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status === true &&
                        (
                            this.state.articulos?.map((arti, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{arti.id}</td>
                                        <td style={{fontWeight: "bold"}}>{arti.nombre}</td>
                                        <td>{arti.descripcion}</td>
                                        <td>{arti.precio}</td>
                                        
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}