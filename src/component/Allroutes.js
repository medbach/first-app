import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Episodejsx from './Episodejsx';
import Formall from './Formall';

const Allroutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Formall} />

                <Route path="/jsx" exact component={Episodejsx} />
            </Switch>
        </div>
    );
};

export default Allroutes;