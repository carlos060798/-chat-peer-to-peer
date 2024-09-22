
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { IUserLogin } from "../interfaces/user.interface";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from '../api/authApi';
import ErrorMensaje from '../components/Error';
function FormLogin() {
  const initialValues: IUserLogin = {
    email: '',
    password: '',
  };
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });
  const navigate = useNavigate();

  const { mutate } = useMutation({

    mutationFn: loginUser,

    onError: (error) => {
      alert(error)


    },
    onSuccess: () => {
      alert('Usuario logueado correctamente')
        navigate('/chat')
    },

  })
  const handleLogin = (formData: IUserLogin) => {
    mutate(formData);
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Introduce tu correo"
              {...register("email", {
                required: "El Email es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "E-mail no válido",
                },
              })}
            />
            {errors.email && (
              <ErrorMensaje>{errors.email.message}</ErrorMensaje>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Introduce tu contraseña"
              {...register("password", {
                required: "El Password es obligatorio",
              })}
            />
            {errors.password && (
              <ErrorMensaje>{errors.password.message}</ErrorMensaje>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">Iniciar Sesión</button>
        </form>
        <p className="text-center text-muted mt-3">
          ¿No puedes iniciar sesión?{' '}
          <Link to="/register" className="text-primary">
            Crear una cuenta
          </Link>
        </p>
      </div>
    </div>

  )
}


export default FormLogin