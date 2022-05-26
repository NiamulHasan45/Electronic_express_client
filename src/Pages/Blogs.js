import React from 'react';

const Blogs = () => {
    return (
        <div className='text-start m-5'>
            <div className=''>
                <div className='m-3'>
                    <h2>How will you improve the performance of a React Application?</h2>
                    <ul>
                        <li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li>Windowing or list virtualization in React.</li>
                    </ul>
                </div>
                <div className='m-3'>
                    <h2>What are the different ways to manage a state in a React application?</h2>
                    <p>
                        There are four main types of state you need to properly manage in your React apps:

                        Local state
                        Global state
                        Server state
                        URL state
                        Let's cover each of these in detail:

                        Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.


                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.



                        Server state – Data that comes from an external server that must be integrated with our UI state.



                        URL state – Data that exists on our URLs, including the pathname and query parameters.


                    </p>
                </div>
                <div className='m-3'>
                    <h2 >How does prototypical inheritance work?</h2>
                    <p>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
                <div className='m-3'>
                    <h2 >What is a unit test? Why should write unit tests?</h2>
                    <p>
                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                    </p>
                </div>
                <div className='m-3'>
                    <h2 >You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?  </h2>
                    <p>
                    

                        const result = products.find(name) arrow function name === 'name' ;

                        console.log(result)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;