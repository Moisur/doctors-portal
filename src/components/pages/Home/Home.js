import React from 'react';
import Banner from './Banner';
import HomeInfo from './HomeInfo';
import backgroundImages from '../../../assets/images/bg.png'
import Services from './Services';
import HomeAppointment from './HomeAppointment';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from '../Sheard/Footer/Footer';
const Home = () => {
    return (
        <div className='px-16'>
            <div style={{
                background:`url(${backgroundImages})`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'
            }}>
                <Banner></Banner>
                <HomeInfo></HomeInfo>
            </div>
            <Services></Services>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>






        </div>
    );
};

export default Home;