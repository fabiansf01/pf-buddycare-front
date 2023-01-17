import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import formulariomicuenta from '../css/formulariomicuenta.css';
import contenedormicuenta from '../css/formulariomicuenta.css';
import { Navigate } from "react-router-dom";


// <p className="exito">Formulario enviado con exito!</p>



const Formulariomicuenta = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<div className='contenedormicuenta'>
		<>
			<Formik 
				initialValues={{
					nombre: '',
					correo: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion apellido
					if(!valores.apellido){
						errores.apellido = 'Por favor ingresa un apellido'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.apellido = 'El apellido solo puede contener letras y espacios'
					}

                    // Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}


                // Validacion pais
                    if(!valores.pais){
                     errores.nombre = 'Por favor ingresa un pais'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.pais)){
                         errores.nombre = 'El país solo puede contener letras y espacios'
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
					<Form className="formulariomicuenta">
						<div>
							<label htmlFor="apellido">Apellido</label>
							<Field
								type="text" 
								id="apellido" 
								name="apellido" 
								placeholder="ingrese su apellido"
							/>
							<ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
						</div>
						
                        <div>
							<label htmlFor="nombre">Nombres</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="ingrese sus nombres"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						
                        
                         <div>
							<label htmlFor="pais">País</label>
							<Field
								type="text" 
								id="pais" 
								name="pais" 
								placeholder="ingrese país"
							/>
							<ErrorMessage name="pais" component={() => (<div className="error">{errors.pais}</div>)} />
						</div>
						
                        <div>
							<label htmlFor="localidad">Localidad</label>
							<Field
								type="text" 
								id="localidad" 
								name="localidad" 
								placeholder="ingrese localidad"
							/>
							{/*<ErrorMessage name="pais" component={() => (<div className="error">{errors.pais}</div>)} />*/}
						</div>

                        <div>
							<label htmlFor="direccion">Direccion</label>
							<Field
								type="text" 
								id="direccion" 
								name="direccion" 
								placeholder="ingrese direccion"
							/>
							{/*<ErrorMessage name="pais" component={() => (<div className="error">{errors.pais}</div>)} />*/}
						</div>

                        <div>
							<label htmlFor="telefono">Telefono</label>
							<Field
								type="text" 
								id="telefono" 
								name="telefono" 
								placeholder="ingrese telefono"
							/>
							{/*<ErrorMessage name="pais" component={() => (<div className="error">{errors.pais}</div>)} />*/}
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
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
						
					</Form>
				)}


				
			</Formik>
		</>
		</div>
	);
}
 
export default Formulariomicuenta;