import React from 'react';

import Head from 'next/head'
import '../styles/globals.css'

function MyApp({Component,pageProps}) {
    return (
        <>
            <Head>
                <link 
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" 
                  rel="stylesheet" 
                  integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" 
                  crossorigin="anonymous" 
                />
                <script 
                  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" 
                  integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" 
                  crossorigin="anonymous"
                />
                <script 
                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" 
                  integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" 
                  crossorigin="anonymous"
                />
            </Head>
            <Component {...pageProps}/>
        </>
    );
}

export default MyApp;
