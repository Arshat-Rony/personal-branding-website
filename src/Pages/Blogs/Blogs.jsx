import React from 'react';
import "./Blogs.css"
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1 className='heading'>Welcome to MyBlog</h1>
            <div className="questions text-start">
                <div className="question mt-5 ">
                    <h4>Question 1 : What is the difference between authentication and authorization</h4>
                    <hr />
                    <p><strong>Answer : </strong>  Authentication is the process of verifying who someone is whereas authorization is the process of verifying what specific user has access to. The situation is like that of a gateman will decide who will come to the school.</p>
                </div>
                <div className="question mt-5 ">
                    <h4>Question 2 : Why are you using firebase ? What other options do you have ?</h4>
                    <hr />
                    <p><strong>Answer : </strong> Firbase is a Googles app development platform. It will help you to build, improve, and grow your application in a smooth and standardized way.
                        1.The platform works well for mobile and web applications, and it is designed to increase the general productivity of creating digital products.
                        <br />
                        2.Firebase helps us by giving this features NoSQL databases, real-time queries, scalable hosting, file storage, REST APIs, authentication, and analytics.
                        <br />
                        <strong> Options other than Firebase - </strong>
                        <br />

                        1. Back4App
                        <br />
                        2.AWS Amplify <br />
                        3.Kuzzle <br />
                        4.Nhost <br />

                    </p>
                </div>
                <div className="question mt-5 ">
                    <h4>Question 3 : What other services does firebase provide other than authentication ?</h4>
                    <hr />
                    <p><strong>Answer : </strong> Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use of it.
                        <br />
                        <strong>Services of Firebase --</strong>
                        <br />
                        1.Cloud Firestore <br />
                        2.Clound Functions <br />
                        3.Hoisting <br />
                        4.Google Analytics <br />
                        5.Remote Config <br />

                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;