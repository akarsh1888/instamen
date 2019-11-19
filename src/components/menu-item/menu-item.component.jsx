import React from 'react';
// Styles
import './menu-item.styles.scss';


const MenuItem = ({title, imageUrl, size}) => {
  return (
    <div className={`${size} menu-item`}>
      
      {/* We are disconnecting the backgroundimage with the [content] so it can't move [content] on hover*/}
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        
            <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
            </div>
            
      </div>
    );
};

export default MenuItem;