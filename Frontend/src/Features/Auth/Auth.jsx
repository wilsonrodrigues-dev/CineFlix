import React, { useState, useEffect } from "react";
import styles from "./Auth.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Read initial state from incoming route state, defaults to false (Sign Up)
  const [isLogin, setIsLogin] = useState(location.state?.isLogin ?? false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate auth success
    localStorage.setItem("token", "dummy-auth-token");
    navigate("/");
  };

  const handleGoogleSubmit = () => {
    // Simulate google oauth success
    localStorage.setItem("token", "dummy-google-token");
    navigate("/");
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.backdrop}></div>
      <div className={styles.overlay}></div>
      
      <div className={styles.authCard}>
        <h2 className={styles.title}>{isLogin ? "Welcome Back" : "Create Account"}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}
          
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className={styles.btnSubmit}>
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className={styles.divider}>
          <span>or continue safely with</span>
        </div>

        <button className={styles.btnGoogle} onClick={handleGoogleSubmit}>
          <GoogleIcon />
          Continue with Google
        </button>

        <div className={styles.toggle}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
