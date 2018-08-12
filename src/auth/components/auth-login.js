import React from 'react';
import { Link } from 'react-router-dom';

function AuthLogin () {
  return (
    <div className="panel panel-auth col-md-4 panel-white">
      <div className="panel-heading clearfix">
        <h6>Inicia sesión con:</h6>
        <button className="btn btn-neutral btn-login btn-icon mr-3">
          <i className="fa fa-facebook" /> Facebook
        </button>
        <button className="btn btn-neutral btn-login btn-icon">
          <i className="fa fa-google" /> Google
        </button>
      </div>
      <div className="panel-body">
        <form className="form-signin">
          <h5 className="mb-3 font-weight-normal">
            O usa tu correo y contraseña
          </h5>
          <div className="input-group mb-3">
            <span className="input-group-addon">
              <i className="fa fa-envelope" />
            </span>
            <input
              type="email"
              id="inputEmail"
              className="form-control form-control-adjust"
              placeholder="Correo"
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-addon">
              <i className="fa fa-lock" />
            </span>
            <input
              type="password"
              id="inputPassword"
              className="form-control form-control-adjust"
              placeholder="Contraseña"
              required
            />
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Iniciar sesión
          </button>
          <Link to="/auth/signup">
            <p className="mt-3">¿No tienes cuenta? Regístrate</p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default AuthLogin;