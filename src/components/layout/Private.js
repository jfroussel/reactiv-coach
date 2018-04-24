import React from 'react';
import {auth} from '../../firebase'


const Private = () => 
    <section className="cover-container pb-5 text-center">
        <div className="cover-inner container">
            <p className="lead ">Your private space <br />{auth.currentUser().email}</p>
        </div>
    </section>

export default Private