import React from 'react';
import './Toolbar.css';

function Toolbar() {

    return (
        
            <div className="toolbar">
                <li className='li'>
                <a href="https://api.whatsapp.com/send?phone=+919571144478">
                    <i className="fabtoolbar fab fa-whatsapp"></i>
                </a>
                </li>
                <li className='li'><a href="https://www.facebook.com/profile.php?id=100085906783783">
                    <i className="fabtoolbar fab fa-facebook-f"></i>
                </a>
                </li>
                <li className='li'>
                    <a href="https://twitter.com/explore">
                        <i className="fabtoolbar fab fa-twitter"></i>
                    </a>
                </li>
                <li className='li'>
                    <a href="https://instagram.com/alxtrip.online?igshid=YzU1NGVlODEzOA==">
                    <i className="fabtoolbar fab fa-instagram"></i>
                    </a>
                </li>
                <li className='li'>
                    <a href="https://www.linkedin.com/company/alxtrip/">
                        <i className="fabtoolbar fab fa-linkedin-in"></i>
                    </a>
                </li>
                <ul className='url'>
                    {/* <a href="tel:919602646089">
                        <li><i className="lnr lnr-phone"></i>
                            +91-9602646089</li></a> */}
                    <a href="tel:919571144478">
                        <li><i className="lnr lnr-phone"></i>
                            +91-9571144478</li></a>
                    <a href="https://www.google.com/maps/place/ALXTrip+-+Cab+Rental+Services/@26.9152224,75.7380337,17z/data=!3m1!4b1!4m6!3m5!1s0x396db31537cf78cb:0x62eac10b97e36138!8m2!3d26.9152176!4d75.7406086!16s%2Fg%2F11t5t0_s_f?entry=ttu">
                        <li><i className="lnr lnr-map-marker">
                        </i>
                        605, SGH, Vaishali Nagar, Jaipur, India</li></a>
                </ul>
            </div>
        
    );
}

export default Toolbar;