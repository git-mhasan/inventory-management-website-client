import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h3><span>Question-1: </span>What are the difference between Javascript and NodeJS ?</h3>
            <p><span style={{ fontWeight: "700" }}>Answer:</span>

                <table>
                    <thead>
                        <tr>
                            <th>
                                S.No
                            </th>
                            <th>
                                Javascript
                            </th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Javascript is a scripting language that is used for making website dynamic and interactive.</td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>NodeJS integrate browser library to run javascript outside the browser.</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Javascript basically used on the client-side.</td>
                            <td>NodeJS mostly used on the server-side.</td>
                        </tr>

                        <tr>
                            <td>4.</td>
                            <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                            <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Javascript is used in frontend development.</td>
                            <td>Nodejs is used in server-side development.</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</td>
                            <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>It is also called ECMA script that uses Chrome’s V8 engine written in C++.</td>
                            <td>Nodejs is written in C, C++ and Javascript.</td>
                        </tr>
                    </tbody>
                </table>
            </p>

            <h3><span style={{ fontWeight: "700" }}>Question-2: </span>When should you use NodeJS and when should you use MongoDB ?</h3>
            <p><span style={{ fontWeight: "700" }}>Answer: </span>
                NodeJS is an open-source, cross-platform JavaScript runtime environment, whareas MongoDB is a cross-platform, NoSQL database program. MongoDB uses JSON-like documents to store data. NodeJS runs on the V8 engine and executes JavaScript code outside a web browser. Basically, it is used for server-side development.</p>

            <p>
                NodeJS is used for non-blocking, event-driven servers. It's used for traditional web sites and back-end API services. On the other hand, MongoDB is used for storing data of a website. When the data is document-centric and doesn't fit well into the schema of a relational database, when it is needed to accommodate massive scale it is a good choice to use MongoDB instead of using any other SQL Database.
            </p>

            <h3 style={{ marginTop: "20px" }}><span style={{ fontWeight: "700" }}>Question-3: </span>What is the differences between SQL and NoSQL databases ?</h3>
            <p><span style={{ fontWeight: "700" }}>Answer: </span>
                <table>
                    <thead>
                        <tr>
                            <th>
                                S.No
                            </th>
                            <th>
                                SQL Databases
                            </th>
                            <th>NoSQL Databases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>SQL is a Relational Database System.</td>
                            <td>NoSQL is a distributed database system.</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>SQL databases are table-based.</td>
                            <td>NoSQL databases are document, key-value, graph, or wide-column stores.</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>SQL Database requires a fixed schema.</td>
                            <td>NoSQL Database does not require a fixed schema.</td>
                        </tr>

                        <tr>
                            <td>4.</td>
                            <td>SQL Database is Vertically Scalable.</td>
                            <td>NoSQL Database is Horizontally scalable.</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>SQL Database is best for Complex Queries.</td>
                            <td>NoSQL are not so good at Complex Queries.</td>
                        </tr>
                    </tbody>
                </table>


            </p>

            <h3><span style={{ fontWeight: "700" }}>Question-4: </span>What is the purpose of jwt and how does it work ?</h3>
            <p><span style={{ fontWeight: "700" }}>Answer: </span>
                JWT stands for JSON Web Token. It is an open standard which is used to share security information between two parties, a client and a server or server to server.
                Each JWT contains encoded JSON objects and a claim. The claim cannot be altered once the token is issued.

                After a user logs in to an application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access.
            </p>
        </div>
    );
};

export default Blogs;