import React from 'react';
import { useParams } from 'react-router-dom';

function Cardpage() {
    const params = useParams()
  return (
    <div>
        <h1>Hello Cardpage {params.id} </h1>
    </div>
  );
}

export default Cardpage