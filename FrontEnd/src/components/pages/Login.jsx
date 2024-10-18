import React, { useState } from "react";
import styles from "../../style/login.module.css"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:3001/Login?email=${loginData.email}`, {
        method: 'GET',
      });
      const data = await response.json();

      if (data.password != loginData.password) {
        alert("Usuario o contraseña incorrectos");
        return;
      } else{      
        console.log(data);
        navigate('/Dashboard');
      
    }
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    }
  };

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`${styles.container} ${isSignUpMode ? styles['sign-up-mode'] : ''}`}>
      <div className={styles['forms-container']}>
        <div className={styles['signin-signup']}>
          {!isSignUpMode ? (
            <form className={styles['sign-in-form']} onSubmit={handleSubmit}>
              <h2 className={styles.title}>Sign in</h2>
              <div className={styles['input-field']}>
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  placeholder="Username"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles['input-field']}>
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <input type="submit" value="Login" className={`${styles.btn} ${styles.solid}`} />
              <p className={styles['social-text']}>Or Sign in with social platforms</p>
              <div className={styles['social-media']}>
                <a href="#" className={styles['social-icon']}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styles['social-icon']}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={styles['social-icon']}>
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className={styles['social-icon']}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          ) : (
            <form className={styles['sign-up-form']}>
              <h2 className={styles.title}>Sign up</h2>
              <div className={styles['input-field']}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" required />
              </div>
              <div className={styles['input-field']}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required />
              </div>
              <div className={styles['input-field']}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <input type="submit" className={styles.btn} value="Sign up" />
              <p className={styles['social-text']}>Or Sign up with social platforms</p>
              <div className={styles['social-media']}>
                <a href="#" className={styles['social-icon']}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styles['social-icon']}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={styles['social-icon']}>
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className={styles['social-icon']}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className={styles['panels-container']}>
        <div className={`${styles.panel} ${styles['left-panel']}`}>
          <div className={styles.content}>
            <h3>New here ?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className={styles.image} alt=""/>
        </div>
        <div className={`${styles.panel} ${styles['right-panel']}`}>
          <div className={styles.content}>
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className={styles.image} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Login;
