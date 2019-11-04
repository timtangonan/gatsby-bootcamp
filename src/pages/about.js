import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>Hi! I'm Tim. I work with clients to help them create a website that best represents their brand.</p>
            <p><Link to="/contact">Contact Me.</Link></p>
        </Layout>
    )
}

export default AboutPage;