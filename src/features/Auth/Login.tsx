import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService';
import { Link } from 'react-router-dom';
import "./Login.css"
import { toast } from 'react-toastify';
import authApi from '../../api/authApi';
import { User } from '../../models/User';
import { useForm } from 'react-hook-form';
import authService from '../../services/authService';
import { useUser } from '../User/context/UserContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 
  const { loadUser } = useUser();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const user : any = {
        email,
        password,
      };
      await authService.login(user)
      setError(null);
      navigate('/');
    } catch (error: any) {
      if (error.message) {
        setError(error.message);
        toast.error(error.message);
      } else {
        setError('An unexpected error occurred');
        toast.error('An unexpected error occurred');
      }
    }
  };
  useEffect(() => {
    loadUser()
  },[loadUser])

  return (
    <>
    <section className="page-head-section">
      <div className="container page-heading">
        <h2 className="h3 mb-3 text-white text-center">Login</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb flex-lg-nowrap justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="ri-home-line"></i> Home
              </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              Login
            </li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="login-hero-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-10 m-auto">
              <div className="login-data">
                
                <form onSubmit={handleSubmit} className="auth-form">
                  <h2>Sign in</h2>
                  <div className="form-input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="form-input">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      required
                    />
                    <i className="ri-lock-password-line"></i>
                  </div>
                  <button type="submit" className="btn theme-btn submit-btn w-100 rounded-2">
                    Log-in
                  </button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <p className="fw-normal content-color">
                    By creating an account, I accept the
                    <span className="fw-semibold"> Terms & Conditions & Privacy Policy</span>
                  </p>
                </form>


                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
