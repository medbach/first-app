import React from 'react';

const Profilprop = ({fullName,bio,profession,alertMyInput}) => {
    
    return (
        <div>
            <p>


            fullName: {fullName}<br/>
            bio : {bio}<br/>
            profession :{profession}<br/>
            {/* welcome {props.children} */}
            <button onClick={() => alertMyInput(fullName)}>
                ClickMe
            </button>
            </p>
           

        </div>
    );
};

export default Profilprop;