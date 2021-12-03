import React, { useState } from "react";

const Button = () => {

    const [hover, setHover] = useState(false);

    return (
        <> <div className={hover ? { display: 'none' } : "dark-btn-container"}>
            <button className={hover ? 'dark-btn-container__hover' : "dark-btn-container__static"} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <a className='link' href="#"> Get a free consultation</a>
            </button>
        </div>

        </>
    )
}

export default Button;