import '../styles/globals.css';

import React from 'react';
import Amplify, { Auth } from 'aws-amplify';


import awsconfig from '../aws-exports';
import AuthContext from "../context/AuthContext.tsx";

Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
      <React.Fragment>
          <AuthContext>
            <Component {...pageProps} />
          </AuthContext>
      </React.Fragment>
  );
}

export default MyApp
