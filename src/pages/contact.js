import React from 'react';

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>I'm mostly active on Twitter: <a href="https://www.twitter.com/timtangonan" target="_blank" rel="noopener noreferrer">@timtangonan</a>.</p>
        </Layout>
    )
}

export default ContactPage;