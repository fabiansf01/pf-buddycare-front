import React from "react";



const Profileinterno = () => {
  
  
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    
      <div style={{ backgroundColor: 'purple', color: 'white' }}>
                
        <p style={{ textAlign: 'left' }}> CLIENTE: { localStorage.getItem('logindetalle')}  </p>
       
      </div>
    )
  
};

export default Profileinterno;