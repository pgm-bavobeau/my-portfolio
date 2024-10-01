import Head from 'next/head';

export default function Helmet() {
    return (
        <Head>
            <title>Test</title>
            <meta name="description" content="Test" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}