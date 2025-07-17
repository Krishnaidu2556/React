import React, { useEffect, useState } from 'react';

function Six() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {
        data ? (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        ) : (
          <p>Loading.....</p>
        )
      }
    </div>
  );
}

export default Six;
