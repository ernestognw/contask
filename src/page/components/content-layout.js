import React from 'react';
import './content-layout.css';

function ContentLayout (props) {
  return (
    <div className="page-content">    
      { props.children }
    </div>
  )
}

export default ContentLayout;