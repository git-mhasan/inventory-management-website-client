import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h3><span>Question-1: </span>Difference between authorization and authentication.</h3>
            <p className='text-justify text-wrap'><span style={{ fontWeight: "700" }}>Answer:</span> Authentication is the process in which it is being verified that a user is a true user. On the other hand authorization is the process of verifying what specific applications, files, and data a user has access to. When a user tries to login to the system, the verification process is called authentication. After signing in different user has the different level of access to the resources of the website. this is called the authorization. For example, an admin might get the full authorization of certain feature. On contrary, general user might not have the same access as the admin.</p>
            <h3><span style={{ fontWeight: "700" }}>Question-2: </span>Why are you using firebase ? What other options do you have to implement authentication ?</h3>
            <p><span style={{ fontWeight: "700" }}>Answer:</span> We mainly used firebase for authentication purpose. We also used firebase hosting service. In addition to that firebase offer many services, such as firestore database, realtime databade, cloud storage etc.
                <br />
                There are many open source alternative to firebase in the marketplace. Some of them are mentioned below: <br />
                1. Auth0<br />
                2. Okta<br />
                3. Amazon Cognito<br />
                4. Keycloak<br />
                5. Passport etc.</p>
            <h3><span style={{ fontWeight: "700" }}>Question-3: </span>What other services does firebase provide other than authentication.</h3>
            <p className='mb-5 pb-5'><span>Answer:</span>Other than authentication service, firebase offer different services. such as:<br />
                1. Firebase Hosting: Firebase is used to host website.<br />
                2. Firebase Database: used to store users data like chat messages, users details and other metadata.<br />
                3. Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.<br />
                4. Firebase Cloud Messaging: used to send notification.<br />
                5. Firebase Remote Config: used to perform A/B testing on the go.</p>
        </div>
    );
};

export default Blogs;