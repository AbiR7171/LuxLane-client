import React from 'react';

const Sneaker = ({sneaker}) => {


    console.log(sneaker);
    return (
        <div>
              <p>{sneaker.name}</p>
            
        </div>
    );
};

export default Sneaker;