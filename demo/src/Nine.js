import React from 'react';

function Nine() {
  const [backgroundColor, setBackgroundColor] = React.useState('red');

  const handleClick = () => {
    const newColor = backgroundColor === 'red' ? 'blue' : 'red';
    setBackgroundColor(newColor);
  };

    
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: backgroundColor,
        height: '100px',
        width: '100px',
        cursor: 'pointer',
     
      }}
    >
      Click me to Change Color
    </div>
  );
}

export default Nine;
