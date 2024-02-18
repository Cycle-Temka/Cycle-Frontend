import React from 'react';


function Header(transparent:boolean) {
  return (
    <header className='Header'>
      <img src='/bikes_logo_white.png' alt='Logo' style={{width:"87px", height:"49px"}}/>

      <div className='Sections'>
        1
      </div>

      <div className='Icon_Sections'>
        2
        
      </div>
      
      <nav className='More'>
        3
      </nav>
    </header>
  );
};

export default Header;