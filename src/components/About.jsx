import React from 'react'

const About = () => {
    return (
        <div className="dark:bg-gray-900 min-h-screen w-full px-8 bg-center bgFaq bg-fixed bg-cover bg-no-repeat flex flex-col justify-center items-center" >
            <section className="dark:bg-gray-800 dark:text-gray-100 md:w-3/4 w-full h-full">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 mt-24">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">About</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is cors?</summary>
                            <div className="px-4 pb-4">
                                <p>CORS is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Why are you using firebase? What other options do you have to implement authentication?</summary>
                            <div className="px-4 pb-4">
                                <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                                    Cookie-Based authentication
                                    Token-Based authentication
                                    Third party access(OAuth, API-token)
                                    OpenId
                                    SAML</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does the private route work?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login. The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline" >What is Node? How does Node work?</summary>
                            <div className="px-4 pb-4">
                                <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.

                                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default About