import React, { useState } from 'react';

function Twelve() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile); // check if file is set
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && (
        <div>
          <h3>Image Preview:</h3>
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            style={{ width: '300px', marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Twelve;
