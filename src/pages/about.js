import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>Hi! I'm Tim. I work with clients to help them create a website that best represents their brand.</p>
            <p><Link to="./contact">Contact Me.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage;