import React from "react";
import decor from '../assets/images/Decor.png';
import Button from "./Button";

const MainInfo = () => {
    return (
        <>
            <div className="main-info">
                <div className="right-corner"></div>

                <h1 className="first-header">Lorem ipsum set
                    <br /> ammet test-test</h1>
                <h2 className="second-header active">LET US HELP YOU GET IT ALL BACK!</h2>
                <img src={decor} alt="decor" className="underline" />
                <div className="consultation">
                    <p className="consultation__cases">We currently take cases
                        <br />that are $10,000 US and up</p>
                    <Button></Button>
                </div>

                <div className="left-corner"></div>
            </div>
        </>
    )
}

export default MainInfo;