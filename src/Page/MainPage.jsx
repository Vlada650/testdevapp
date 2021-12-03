import React from "react";
import Header from "../components/Header";
import MainInfo from "../components/MainInfo";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import '../assets/styles/style.scss'

const MainPage = () => {

    return (
        <>
            <Header />
            <div className="back-wrapper">
                <MainInfo />
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default MainPage;