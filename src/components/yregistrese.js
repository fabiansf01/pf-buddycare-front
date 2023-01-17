import React from 'react';
import ReactDOM from 'react-dom';

// or
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
  <GoogleLogin
    clientId="1095507538368-pb7a4hgship0e6jntuprt4vdlaj1e7so.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={respuestaGoogle}
    onFailure={respuestaGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);

export default responseGoogle;