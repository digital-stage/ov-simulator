import * as React from "react";
import Head from 'next/head';
import {AuthConsumer, AuthProvider} from "../libs/useAuth";
import {StageProvider} from "../libs/useStage";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <AuthProvider
                authUrl={process.env.NEXT_PUBLIC_AUTH_URL}
            >
                <AuthConsumer>
                    {({token}) => (
                        <StageProvider token={token}>
                            <Component {...pageProps} />
                        </StageProvider>
                    )}
                </AuthConsumer>
            </AuthProvider>
        </>
    );
}

export default MyApp
