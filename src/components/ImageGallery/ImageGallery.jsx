import { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    
   
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEY1WB43gwxMJKh11pWpFpziCumPirhMEBUA&s',
      title: 'Image Title 6',
      description: 'Image Description 6'
    }
  ];

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '') {
      alert('Invalid email address. Please enter a valid email address.');
    } else {
      alert(`Email successfully submitted: ${email}`);
      setEmail('');
    }
  };

  return (
    <>
      <div
  className="moving-text"
  style={{
    color: '#FF5733',
    fontSize: '10em', 
    fontFamily: 'sans-serif',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
    background: 'linear-gradient(135deg, #f06, #00f)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'textMove 5s ease-in-out infinite', 
  }}>welcome
</div>

      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-box">
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
        <h1>Sign up to our newsletter</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ fontSize: 18, width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input 
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
              placeholder="Enter your email here" 
              style={{ width: '150%', height: 50, padding: 10, textAlign: 'center', marginBottom: 10, border: '1px solid #ccc', borderRadius: 5 }} 
            />
          </label>
          <button 
           type="submit" 
           style={{ width: '100%',maxWidth: '200px',height: '50px',padding: '10px 20px',fontSize: '18px',background: 'linear-gradient(45deg, #ffa07a, #ff7f50)',color: 'white', border: 'none',borderRadius: '30px',boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',cursor: 'pointer',transition: 'all 0.3s ease-in-out',fontWeight: 'bold',letterSpacing: '1px',display: 'flex',alignItems: 'center',justifyContent: 'center',
                  
           }}
           onMouseEnter={(e) => {e.target.style.background = 'linear-gradient(45deg, #228B22, #32CD32)';e.target.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.2)';
           }}
           onMouseLeave={(e) => {e.target.style.background = 'linear-gradient(45deg, #32CD32, #228B22)';e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
           }}
          >
          <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>
          Submit
          </button>

        </form>
      </div>
    </>
  );
};

export default ImageGallery;
