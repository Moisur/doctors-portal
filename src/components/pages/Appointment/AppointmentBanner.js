import React from 'react';
import chair from '../../../assets/images/chair.png';
import banner from '../../../assets/images/bg.png';
const AppointmentBanner = () => {
    return (
        <div style={{
            background:`url(${banner})`,
            backgroundPosition:'center',
            backgroundSize:'cover'
        
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={chair} alt='Chair images ' />
                </div>
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;