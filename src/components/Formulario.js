import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import formulario from '../css/formulario.css';
import contenedor from '../css/formulario.css';
import { Navigate } from "react-router-dom";


// <p className="exito">Formulario enviado con exito!</p>



const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<div className='contenedor'>
		<>
			<Formik 
				initialValues={{
					nombre: '',
					correo: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					
				
					resetForm();
					console.log('Formulario enviado');
					
					cambiarFormularioEnviado(true);
					//setTimeout(() => cambiarFormularioEnviado(false), 5000);
					

				

				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="ingrese su nombre"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						
						
						

						<button type="submit">Enviar</button>
						{formularioEnviado && <Navigate to="/micuenta" />}
						
					</Form>
				)}


				
			</Formik>
		</>
		</div>
	);
}
 
export default Formulario;