import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import views from '../../assets/home_assets/views_total.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer w-full p-10 bg-[#0ba13b] text-neutral-content custome-footer mb-10">
            <div>
                <span className="text-2xl font-bold">ADDRESS</span>
                <a>
                    Road#06 New, <br /> Plot#999, <br />
                    Mirpur DOHS, Pallabi, <br />
                    Dhaka-1216, <br /> Bangladesh.
                </a>
            </div>
            <div>
                <span className="text-2xl font-bold">EMAIL</span>
                <a>best-one@best-one.com.bd</a>
                <a>info@best-one.com.bd</a>
            </div>
            <div>
                <span className="text-2xl font-bold">PHONE</span>
                <a>+88-02-51040138</a>
                <ScrollToTop smooth className='grid place-items-center scrl-top'></ScrollToTop>
            </div>
        </footer>
    );
};

export default Footer;