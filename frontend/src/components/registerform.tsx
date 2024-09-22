import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/Error";
import { IUser } from "../interfaces/user.interface";
import { useMutation } from "@tanstack/react-query";
import { createAcount } from '../api/authApi';

function RegisterForm() {


  const initialValues: IUser = {
    name: "",
    email: "",
    password: "",

  };
  const navigate = useNavigate()

  const {
    register,

    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>({ defaultValues: initialValues });



  const { mutate, } = useMutation({
    mutationFn: createAcount,
    onError: (error) => {
      alert(error)
      console.log(error)
    },
    onSuccess: () => {
     alert('Usuario registrado correctamente')
      reset()
      navigate("/login")
    },


  })

  const handleRegister = (formData: IUser) => {
    mutate(formData)
  };


  return (

    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Registrase</h3>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Introduce tu nombre"
              {...register('name', {
                required: 'El Nombre de usuario es obligatorio',
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Introduce tu correo"
              {...register('email', {
                required: 'El Email de registro es obligatorio',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'E-mail no válido',
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"

              {...register('password', {
                required: 'El Password es obligatorio',
                minLength: {
                  value: 8,
                  message: 'El Password debe ser mínimo de 8 caracteres',
                },
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">Registrar</button>
        </form>

        <p className="text-center text-muted">
          ¿Ya tienes una Cuenta?{' '}
          <Link to="/login" className="text-primary">
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm;