import React from 'react';

import imageInSrc from "../imageInSrc.jpg"

import "../allstyles/stylejsx.css"

const Episodejsx = () => {
    return (
        <>
            <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

                <h1 class="title red">Your name here</h1>

                <br/>

                <h1 class="title red">Image src</h1>

                <div className='images'>
                    <img src={imageInSrc} />
                </div>
                

                <br/>

                <h1 class="title red">Image Public</h1>

                <div className='images'>
                    <img src="/imageInPublic.jpg" />
                </div>
                <br/><br/>
                <h1 class="title red">Video Public</h1>
                <video width="320" height="240" controls>

                    <source src="myVideo.mp4" type="video/mp4" />

                </video>
            </div>
        </>
        
    );
};

export default Episodejsx;