import React from 'react';
import Addresse from "./Adresse"
import FullName from "./FullName"
import ProfilePhoto from './ProfilePhoto';

const Profile = () => {
    return (
        <div>

        <div className='profilito'>
            <ProfilePhoto />
            <div className='bgprofil'>
            <FullName />
            <Addresse />

            </div>
              

        </div>
             

        </div>
    );
};

export default Profile;