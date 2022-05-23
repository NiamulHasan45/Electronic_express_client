import React from 'react';
import banner from '../../../assets/banner.png'
import bg from '../../../assets/banner-bg.png'
import PrimaryButton from '../../../SharedComponents/PrimaryButton';

const Banner = () => {
    return (
        <div   style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen m-0">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner}/>
                <div>
                    <h1 class="text-5xl font-bold">Welcome To The Paradise Of Electronic and Hardware</h1>
                    <p class="py-6">Electronic hardware consists of interconnected electronic components which perform analog or logic operations on received and locally stored information to produce as output or store resulting new information or to provide control for output actuator mechanisms.</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;