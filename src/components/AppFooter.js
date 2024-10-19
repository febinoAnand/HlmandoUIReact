import React from 'react';

const AppFooter = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '  #f4f4f4',
    padding: '10px', 
    boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)', 
    color: '#333', 
  };

  return (
    <footer style={footerStyle}>
      <div>
        HLMANDO <span>&copy; 2024</span>
      </div>
    </footer>
  );
};

export default React.memo(AppFooter);
