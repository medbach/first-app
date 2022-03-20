import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Episodejsx from './Episodejsx';
import Formall from './Formall';
import Profile from './Profile';

const Allroutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Formall} />

                <Route path="/jsx" exact component={Episodejsx} />
                <Route path="/profil" exact component={Profile} />
            </Switch>
        </div>
    );
};

export default Allroutes;