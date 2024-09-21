import{Link} from 'react-router-dom';
function RegisterForm () {

    const handleSubmit = (data: any) => {
        console.log(data);
    };
   

    return (
       
          <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
            <h3 className="text-center mb-4">Registrase</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Introduce tu nombre"
                  required
                />
                </div>
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