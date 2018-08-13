import React from 'react';
import { Link } from 'react-router-dom';

function AuthRegister (props) {
  return (
    <div className="panel panel-auth col-md-4 panel-white">
      <div className="panel-heading clearfix">
        <h6>Regístrate con:</h6>
        <button onClick={props.handleFBLogin} className="btn btn-neutral btn-login btn-icon">
          <i className="fa fa-facebook" /> Facebook
        </button>
        {/* <button className="btn btn-neutral btn-login btn-icon">
          <i className="fa fa-google" /> Google
        </button> */}
      </div>
      <div className="panel-body">
        <form onSubmit={props.handleSignup} className="form-signin">
          <h5 className="mb-3 font-weight-normal">
            O usa tu correo y contraseña
          </h5>
          <div className="input-group mb-3">
            <span className="input-group-addon">
              <i className="fa fa-user" />
            </span>
            <input
              type="text"   
              onChange={props.authInputChange}
              value={props.username} 
              id="usernameInput"         
              className="form-control form-control-adjust"
              placeholder="Nombre de Usuario"
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-addon">
              <i className="fa fa-envelope" />
            </span>
            <input
              type="email"
              onChange={props.authInputChange}
              value={props.email}  
              id="emailInput"          
              className="form-control form-control-adjust"
              placeholder="Correo"
              minLength="8"              
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-addon">
              <i className="fa fa-lock" />
            </span>
            <input
              type="password"
              onChange={props.authInputChange}
              value={props.password}
              id="passwordInput"
              className="form-control form-control-adjust"
              placeholder="Contraseña"
              minLength="8"
              required
            />
          </div>
          { 
            props.isVerifyPasswordInput === true ?
            <div className={props.arePasswordsEqual ? 'input-group mb-3 has-success' : 'input-group mb-3 has-error'}>
              <span className="input-group-addon">
                <i className={props.arePasswordsEqual ? 'fa fa-check' : 'fa fa-times'} />
              </span>
              <input
                type="password"
                onChange={props.authInputChange}
                value={props.verifyPassword}
                id="verifyPasswordInput"
                className="form-control form-control-adjust"
                placeholder="Verifica tu contraseña"
                required
              />
            </div>
            : <div></div>
          }
          {
            props.message ?
            <small className="password-message">Tu contraseña debe de coincidir antes de registrate</small> : ''
          }
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Regístrate
          </button>
          <Link to="/auth/login">
            <p className="mt-3">¿Ya tienes cuenta? Inicia sesión</p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default AuthRegister;