import { Link } from "react-router-dom";
function FormLogin() {

   const handleSubmit = (data: any) => {
    console.log(data);
   };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Iniciar Sesión</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Introduce tu correo"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Introduce tu contraseña"
            required
          />
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
  );
} 


export  default  FormLogin