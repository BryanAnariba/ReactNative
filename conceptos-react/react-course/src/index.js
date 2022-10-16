import React from 'react';
import ReactDOM from 'react-dom/client';

function Saludar () {
    const married = true;

    function add ( x, y ) {
        return x + y;
    }

    const user = {
        firsName: 'Ryan',
        lastName: 'Ray'
    };

    return (
        <>
            <h1>Hello World { user.firsName } { user.lastName }, { ( married ) ? 'I am married' : 'I am not married' }</h1>
            <p>Lorem ipsum</p>
            <p>add: { add( 30, 10 ) } </p>
        </>
    )
    
}

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <>
        <Saludar/>
    </>
);

// 53 



