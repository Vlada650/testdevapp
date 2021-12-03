import React from "react";
import dmca from '../assets/images/DMCA.png';
import logo1 from '../assets/images/logo1.png'

const Footer = () => {

    return (
        <> <div className="footer">

            <div className="footer__company">
                <img src={logo1} alt="logo" className="footer-header img" />
                <p>All Rights Reserved to info.com</p>
                <p>Privacy Policy</p>
                <p>© DDD – Web Marketing</p>
                <img src={dmca} alt="dmca" className='img' />
            </div>

            <div className="footer__contact">
                <p className="footer-header">CONTACT US</p>
                <div className="contact">
                    <p>UK</p>
                    <p><span className='tel'>+44-2020202020</span>
                        <br /> <span className='tel'>+44-2020202020</span></p>
                    <p>AUT</p>
                    <p><span className='tel'>+44-2020202020</span></p>
                    <p>AUS</p>
                    <p><span className='tel'>+44-2020202020</span></p>
                </div>
            </div>

            <div className="footer__adress">
                <div>
                    <p className="footer-header">ADRESS</p>
                    <p className="footer-text">Lorem ipsum
                        <br /> set amet</p>
                </div>
                <div className="office-hours">
                    <p className="footer-header">OUR OFFICE HOURS</p>
                    <p className="footer-text">Mon-Fr: 8: 00-18: 00 GMT
                        <br /> Sat/Su: Closed</p>
                </div>
            </div>

            <div>
                <p className="footer-header">EMAIL US</p>
                <p className="footer-text">info @info.com</p>
            </div>

        </div>
        </>
    )
}

export default Footer;