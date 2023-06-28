import React from "react";

const About = () => {
    return (
        <div>
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />

            <div className="aboutus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="aboutus">
                                <h2 className="aboutus-title">About Us</h2>
                                <p className="aboutus-text">This project has been created by:<br/>Sounak Mandal(20BCE2737), Abhishek Kumar(20BCE2713), Saumya Sejal(20BCE2596), Ishita Kumari(20BCE2648)</p>
                                <p className="aboutus-text">The news app is a comprehensive platform that keeps you updated with the latest news from around the world. With a user-friendly interface and a vast range of news categories, you can stay informed and explore diverse perspectives in just a few clicks.</p>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="aboutus-banner">
                                <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <div className="feature">
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon"></span>
                                        </div>
                                        <div className="feature-content">
                                            <h4>Work with heart(Set up the project):</h4>
                                            <p>
                                                Create a new React project using Create React App or your preferred setup.
                                                Install Bootstrap and any necessary dependencies for making API requests.
                                                Set up the necessary project structure, including components, styles, and API integration files.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon"></span>
                                        </div>
                                        <div className="feature-content">
                                            <h4>Create the news components:</h4>
                                            <p>
                                                Design and create the necessary components for displaying news content, such as a
                                                news list, news card, and news detail view.
                                                Utilize Bootstrap components and styles to achieve a visually appealing and responsive layout.
                                                Implement state management using React hooks or a state management library (e.g., Redux) to handle the data fetched from the API.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon"></span>
                                        </div>
                                        <div className="feature-content">
                                            <h4>Integrate the News API:</h4>
                                            <p>
                                                Register for an API key from a News API provider.
                                                Use an HTTP client library to make API requests to fetch news data based on selected categories or search queries.
                                                Implement the necessary functions and hooks to handle API requests and update the component state with the fetched news data.
                                                Display the news content in the appropriate components, such as rendering a list of news cards or showing detailed information for a selected news article.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;