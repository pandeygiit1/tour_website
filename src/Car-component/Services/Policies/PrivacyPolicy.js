import React from 'react';
import '../../Home-page-components/Home.css'
import Footer from '../../Home-page-components/Footer/Footer';
import './Policies.css'
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
    return (
        <div>
            <Helmet>
            <title>Refund Policy | Your Guide to Hassle-Free Travel Booking | AlxTrip</title>
            <meta name="description" content="Explore our refund policy for worry-free travel booking. Get insights on cancellations, refunds, and the peace of mind you deserve when planning your journey." />
            <link rel="canonical" href='https://alxtrip.online/privacy-policy'/>
            </Helmet>
            <div className='Aboutimage'>
                <h1 className='h2Aboutnames'>
                 Privacy Policy</h1>
                <p className='p2Aboutnames'> We guarantee a secure journey. It is important for you to familiarize with our privacy policy terms for better tranparency.</p>
            </div>
            <section className="Privacy-section">
                <div className="Privacycontainer">
                    <div className="Privacyrow">
                        <div className="Privacy-col-8">
                            <div className="Privacy-rn-faq-item">
                                <div className="Privacy-rn-faq-icon">
                                    <i className="fabs fas fa-question"></i>
                                </div>
                                <div className="rn-faq-content">
                                    <h2 className="Privacy-rn-faq-title">Alxtrip's Privacy Policy</h2>
                                    <p className='Privacy-rn-faq-peregraf'>This privacy policy explains our policy regarding the collection, use, disclosure and transfer of your information by Alxtrip and/or its subsidiary(ies) and/or affiliate(s) and/or associate(s) (collectively referred to as the "Company"), which operates various websites and other services including but not limited to delivery of information and content via any mobile or internet connected device or otherwise (collectively the "Services"). The Company respects the privacy of the users of the Services and is committed to reasonably protect it in all respects.</p>
                                </div>
                            </div>
                            <div className="Privacy-rn-faq-item">
                                <div className="Privacy-rn-faq-icon">
                                    <i className="fabs fas fa-question"></i>
                                </div>
                                <div className="rn-faq-content">
                                    <h2 className="Privacy-rn-faq-title">Other Websites</h2>
                                    <p className='Privacy-rn-faq-peregraf'>Alxtrip site contains links to other websites. Alxtrip is not responsible for the privacy practices or the content of such websites. User/member interaction features Alxtrip has many features that provide for users/members to disclose their identities and communicate with other users/members. Your use of such features and disclosure of any personal details (e.g. e-mail address) by you through these features are at your sole risk and Alxtrip accepts no responsibility for the same. However, if your privacy has been intruded as a result of participating in such features, you could notify us by e-mail at ajay.kumar@algodox.co.in</p>
                                </div>
                            </div>
                            <div className="Privacy-rn-faq-item">
                                <div className="Privacy-rn-faq-icon">
                                    <i className="fabs fas fa-question"></i>
                                </div>
                                <div className="rn-faq-content">
                                    <h2 className="Privacy-rn-faq-title">We Collect Information in Different Ways</h2>
                                    <p className='Privacy-rn-faq-peregraf'>We collect information directly from you. We collect information directly from you when you contact us. We also collect information if you post a comment on our websites or ask us a question through phone or email. We collect information from you passively. We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website. We get information about you from third parties. For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.</p>
                                </div>
                            </div>
                            <div className="Privacy-rn-faq-item">
                                <div className="Privacy-rn-faq-icon">
                                    <i className="fabs fas fa-question"></i>
                                </div>
                                <div className="rn-faq-content">
                                    <h2 className="Privacy-rn-faq-title">Information We Collect</h2>
                                    <p className='Privacy-rn-faq-peregraf'>Contact information. We might collect your Name , Email, Mobile Number. We might collect your billing name, billing address and payment method. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner.Information you post. We collect information you post in a public space on our website or on a third-party social media site belonging to Alxtrip Demographic information. We may collect demographic information about you, or any other information provided by your during the use of our website. We might collect this as a part of a survey also. Other information. If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.</p>
                                </div>
                            </div>
                            <div className="Privacy-rn-faq-item">
                                <div className="Privacy-rn-faq-icon">
                                    <i className="fabs fas fa-question"></i>
                                </div>
                                <div className="rn-faq-content">
                                    <h2 className="Privacy-rn-faq-title">Notify Us</h2>
                                    <p className='Privacy-rn-faq-peregraf'>If at any time you believe that Alxtrip or its users/members have not adhered to these principles, please notify Alxtrip by e-mail at ajay.kumar@algodox.co.in and we will use all commercially reasonable efforts to promptly determine and correct the problem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Privacy-col-4">
                            <aside className="Privacy-rn-widget-area">
                                <section className="Privacy-rn-widget">
                                    <div className="rn-widget-content">
                                        <div className="rn-support-widget">
                                            <i className="far fa-life-ring"></i>
                                            <h2 className="rn-support-widget-title">Do you need support?</h2>
                                            <p className='Privacy-rn-faq-title-peregra'>Our support agents are available 24/7/365. Call us now</p>
                                            {/* <div className="rn-phone-number">+91-9602646089</div> */}
                                            <div className="rn-phone-number">+91-9571144478</div>
                                        </div>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;