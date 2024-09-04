import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../AuthContext'; // Ensure this path is correct
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, cartItems } = useAuth(); // Use context to get user and cart items

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null); // Clear user state in context
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to='/' className="nav-link" style={{ fontSize: "1.5em", fontWeight: 'bold' }}>
      <FontAwesomeIcon icon={faStore} flip style={{color: "#2ede17",}} /> 
        GOODSTORE
      </Link>
      <ul className="nav navbar-nav mx-auto nav-ul">
        <li className="nav-item"></li>
      </ul>
      <ul className="nav navbar-nav ml-auto">
        {user ? (
          <div className="user-menu">
            <button
              className="user-button"
              onClick={() => setShowDropdown(!showDropdown)}
              style={{ backgroundColor: "#ffa07a", marginRight: 40, fontSize: "1.5em", border: 'none', color: 'white', cursor: 'pointer' }}
            >
              {user.name}
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <button onClick={handleLogout} className="dropdown-item">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <li className="nav-item">
 <Link 
  to='/login' 
  className="nav-link btn btn-outline-dark d-flex align-items-center"
  style={{
    backgroundColor: "#ffa07a",
    marginRight: 40,
    fontSize: "1.5em",
    padding: "10px 25px",
    borderRadius: "30px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
    color: "#fff",
    border: "none",
    textAlign: "center",
    textDecoration: "none"
  }}
  onMouseEnter={(e) => {
    e.target.style.background = 'linear-gradient(45deg, #228B22, #32CD32)'; // Inverse le dégradé au survol
    e.target.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.2)';
  }}
  onMouseLeave={(e) => {
    e.target.style.background = 'linear-gradient(45deg, #32CD32, #228B22)'; // Couleur originale
    e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
  }}
>
  <i className="fas fa-sign-in-alt" style={{ marginRight: "10px" }}></i>
  Login
</Link>

          </li>
        )}
    <li className="nav-item">
  <Link 
    to='/cart' 
    className="nav-link btn btn-outline-dark d-flex align-items-center justify-content-center"
    style={{
      background: "linear-gradient(45deg, #FFD700, #FFA500)", // Dégradé jaune
      marginRight: 40,
      fontSize: "1.5em",
      padding: "10px 25px",
      borderRadius: "30px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Ombre subtile
      transition: "all 0.3s ease-in-out", // Transition douce
      color: "#fff",
      textDecoration: "none",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <FontAwesomeIcon 
      icon={faShoppingCart} 
      style={{
        marginRight: "10px", 
        animation: "ring 1s infinite", // Animation de type sonnerie
        transformOrigin: "center", // Origine de l'animation
      }} 
    />
    {cartItems.length}
  </Link>
</li>

<style>
  {`
    @keyframes ring {
      0% { transform: rotate(0deg); }
      10% { transform: rotate(15deg); }
      20% { transform: rotate(-10deg); }
      30% { transform: rotate(15deg); }
      40% { transform: rotate(-10deg); }
      50% { transform: rotate(0deg); }
      100% { transform: rotate(0deg); }
    }
  `}
</style>



      </ul>
    </nav>
  );
};

export default Navbar;
