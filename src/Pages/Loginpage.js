import React from 'react';
import '../scss/Loginpage.scss';
import { useNavigate} from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      
    
      
    
      navigate('/dashboard');
  };
  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src="/mandocompany.jpg" alt="Logo" className="login-image" />
        <img 
                    src="/HL_Mando.jpg" 
                    alt="Small" 
                    className="small-image" 
                />
      </div>
      <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
    <h2 className="welcome-text">
        Welcome Back
        <img 
            src="/hand.png" 
            alt="Hand icon" 
            style={{ width: '24px', height: '24px', marginLeft: '8px', verticalAlign: 'middle' }}
        />
    </h2>
          
          <p className="welcome-subtext">
            Today is a new day. It's your day. You shape it.
            <br />
            Sign in to start managing your projects.
          </p>
          <label for="email" class="input-label">Email</label>
          <input
            type="email"
            name='Email'
            placeholder="Example@email.com"
            className="login-input"
            required
          />
            <label for="password" class="input-label">Password</label>
          <input
            type="password"
            name='Password'
            placeholder="At least 8 characters"
            className="login-input"
            required
          />
          <div className="forgot-password">
            <a href="/forgot-password" className="forgot-password-link"style={{ color: 'white' }}>Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Sign In</button>
          <div className="signup-link">
            Don’t you have an account? <a href="/signup" className="signup-link-a"style={{ color: 'white' }}>Sign Up</a>
          </div>
          <footer className="footer">
            © 2024 ALL RIGHTS RESERVED
          </footer>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
