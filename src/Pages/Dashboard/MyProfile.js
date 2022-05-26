import React from 'react';

const MyProfile = () => {
    return (
        <div>
           <div className='text-bold text-primary'>
            <div className='w-50'>
                <h1 className='text-2xl font-bold'>About Me</h1>
                <p>
                    Hello, I am Niamul Hasan.A couple of reasons motivated me to build my career in web development.
                    </p>
                    <p> Firstly, My interest which is grown during my Bachelor degree. The undergraduate curriculum in Information and Communication Engineering (ICE) introduces me to a wide variety of technological field. So i explored a lot of thing and i came up to a conclusion that it is the best suited career for me. 
                        </p>
                        <p>Secondly, Web development is very fun to do. It is the perfect place to expose all my skills, creativity with the most efficient way through my work.</p>
                        <p>I want to be a top level web developer within two years.</p>

                    <h1 className='text-2xl font-bold'>My Projects link</h1>
                    <ul>
                        <li><a href="https://fitbuzz-gym.web.app">Fitbuzz gym</a></li>
                        <li><a href=" https://motorcycle-inventory-764ea.web.app">Motorcycle inventory</a></li>
                        <li><a href="https://zippy-tanuki-4e2d1d.netlify.app/">Letter Box</a></li>
                    </ul>
                 
            </div>
        </div>
        </div>
    );
};

export default MyProfile;