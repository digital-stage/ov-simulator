import * as React from "react";
import Head from 'next/head';
import {AuthProvider} from "../libs/useAuth";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <AuthProvider
                authUrl={process.env.NEXT_PUBLIC_AUTH_URL}
            >
                <Component {...pageProps} />
            </AuthProvider>
        </>
    );
}

export default MyApp
