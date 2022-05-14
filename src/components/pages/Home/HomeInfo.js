import React from 'react';
import HomeCardInfo from './HomeCardInfo';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const HomeInfo= () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <HomeCardInfo bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]" img={clock} title='Opening Hours' text='Lorem Ipsum is simply dummy text '></HomeCardInfo>
            <HomeCardInfo bgClass="bg-[#3A4256]" img={marker} title='Visit our location' text='Brooklyn, NY 10036, United States'></HomeCardInfo>
            <HomeCardInfo bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"  img={phone} title='Contact us now' text='+000 123 456789'></HomeCardInfo>
        </div>
    );
};

export default HomeInfo;