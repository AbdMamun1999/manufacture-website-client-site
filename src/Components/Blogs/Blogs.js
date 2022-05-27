import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/6 mx-auto grid grid-cols-1 gap-y-5 mb-8'>
            <div>
                <h1 className='text-2xl font-bold'>How will you improve the performance of a React Application?</h1>
                <p>
                    Use binding functions in constructors.Avoid inline style attributes.Creating a separate style.js file and importing in the component instead of using inline style attribute.Avoid extra tags by using React fragments.Using react fragments decreases the no. of additional tags and satisfies the necessity of having a single parent element in the component.Avoid inline function in the render method. If we use the inline function, the function will generate a new instance of the object in every render and there will be multiple instances of these functions which will lead to consuming more time in garbage collection.Avoid bundling all of the front end code in a single file
                </p>

            </div>
            <div>
                <h1 className='text-2xl font-bold'> What are the different ways to manage a state in a React application?</h1>
                <p>
                    There are four main types of state you need to properly manage in your React apps.
                    1.Local state 2.Global state 3.Server state 4.URL state
                    <p>*<span className='font-bold'>Local state:</span> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</p>

                    <p>*<span className='font-bold'>Global state:</span> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>

                    <p>*<span className='font-bold'>Server state:</span> Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>

                    <p> *<span className='font-bold'>URL state:</span> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one</p>
                </p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>How does prototypical inheritance work?</h1>
                <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

                </p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>What is a unit test? Why should write unit tests? </h1>
                <p>
                    In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use
                </p>
                <p>
                    Unit tests help to fix bugs early in the development cycle and save costs.
                    It helps the developers to understand the testing code base and enables them to make changes quickly
                    Good unit tests serve as project documentation
                    Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
                </p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>
                    There are 2 way to find product by name.
                    1.array.filter() 3.array.includes()
                </p>
                <p>
                    <span className='font-bold'>array.filter():</span>We can use the Array.filter() method to find elements in an array that meet a certain condition.
                </p>
                <p>
                    <span className='font-bold'>array.includes():</span>The includes() method determines whether an array includes a certain value and returns true or false as appropriate.
                </p>
            </div>
        </div>
    );
};

export default Blogs;