import React from 'react';
import Profilprop from './Profilprop';

const Profil = () => {

    const alertMyInput = fullName => alert(fullName);

    return (
        <div>
            <Profilprop fullName="med" bio="bach" profession="Front dev" alertMyInput={alertMyInput}>
                children pros test
            </Profilprop>
        </div>
    );
};

export default Profil;