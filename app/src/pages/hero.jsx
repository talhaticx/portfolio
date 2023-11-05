import React from "react";
import Header from "../components/header";
import Button from "../components/button";
import Lottie from 'react-lottie';
import animationData from './../assets/programming.json';

const Hero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <Header />
            <section className="flex flex-col items-center justify-evenly gap-2 md:flex-row">
                <section className="info flex flex-col gap-8 items-center justify-center pl-8 md:pl-0">
                    <div className='border-l-2'>
                        <div className="px-6">
                            <h1 className="text-6xl font-normal gig mb-5">TALHA AYYAZ</h1>
                            <span className="text-3xl font-normal">MERN Stack - Web Developer</span>
                        </div>
                    </div>
                    <Button title='contact'/>
                </section>
                <section className="pic">
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </section>
            </section>
        </>
    );
};

export default Hero