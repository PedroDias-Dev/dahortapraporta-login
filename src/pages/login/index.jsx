import React, {useState} from 'react'

import './styles.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";

// images
import OrderDelivered from '../../assets/img/order-delivered.svg'
import Logo from '../../assets/img/logo.png'

//toast
import { useToasts } from 'react-toast-notifications';

const Login = () => {
//   const [email, setName] = useState("")
//   const [password, setPassword] = useState("")

  const {addToast} = useToasts();

  function confirm(event){
    event.preventDefault();

    addToast('Olá! Este site não é funcional, e sim apenas uma demonstração.', { appearance: 'warning' });
  }

  return (
    <div className="App">
        <div className="auth-wrapper">
            <div className="auth-inner">
                <div className="icon">
                    <img src={OrderDelivered} alt="Ícone representando uma entrega" />
                </div>
                <div className="form">
                    <form onSubmit={event => confirm(event)}>
                        <div className="login-title">
                            <img src={Logo} alt="Logo da Da Horta Pra Porta" />
                        </div>

                        <div className="login-options">
                            <a href="/">
                                <div className="google-div">
                                    <FaGoogle className="social-icon"/>
                                    <label>Google</label>
                                </div>
                            </a>
                            <a href="/">
                                <div className="facebook-div">
                                    <FaFacebookSquare className="social-icon"/>
                                    <label>Facebook</label>
                                </div>
                            </a>
                            <a href="/">
                                <div className="twitter-div">
                                    <FaTwitter className="social-icon"/>
                                    <label>Twitter</label>
                                </div>
                            </a>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control-input" placeholder="CPF ou E-mail" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control-input" placeholder="Senha" />
                        </div>

                        <div className="form-group">
                            <div className="custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Lembre de mim</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                        <p className="forgot-password text-right">
                            Esqueceu <a href="/">sua senha?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
