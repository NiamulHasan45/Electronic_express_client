import React from 'react';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;