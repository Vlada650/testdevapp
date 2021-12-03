import React, { useState } from "react";
import IntlTelInput from 'react-bootstrap-intl-tel-input';

const ContactForm = () => {

    const [hover, setHover] = useState(false);

    return (
        <>
            <form className="form">
                <h1 className="form-header"><span className="form-header active">Contact</span> Us</h1>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control border-light" id="inputFirstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control border-light" id="inputLastName" placeholder="Last Name" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <IntlTelInput className="border-light"
                            preferredCountries={['US', 'GB']}
                            defaultCountry={'US'}
                            defaultValue={'+1 555-555-5555'}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control border-light" id="inputEmail4" placeholder="Email" />
                    </div>
                </div>

                <div className="form-group ">
                    <textarea className="form-control col-md-12 border-light" id="exampleFormControlTextarea1" placeholder="Tell Us What Happened" rows="3"></textarea>
                </div>
                <div className="dark-btn-wrapper">
                    <div className={hover ? { display: 'none' } : "dark-btn-container"}>
                        <button className={hover ? 'dark-btn-container__hover' : "dark-btn-container__static"} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}> <a className="link" href="#" >Send</a>
                        </button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default ContactForm;