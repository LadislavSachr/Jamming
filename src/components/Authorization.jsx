import React, {useState, useEffect} from 'react';

const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}
const codeVerifier  = generateRandomString(64);
const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}
const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}


const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(hashed);
const clientId = '03ce758df8ea4d95bd78e345c1a249bf'; //
const redirectUri = 'http://localhost:5173/';
const scope = "playlist-modify-public";
const authUrl = "https://accounts.spotify.com/authorize"; //

const codeUrl = `${authUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}&code_challenge_method=S256&code_challenge=${codeChallenge}`;

const getReturnCode = par =>{
    const arr = par.split("=");
    return arr[1];
}

const getToken = async code => {
  // stored in the previous step
  const baseUrl = "https://accounts.spotify.com/api/token";
  const codeVer = localStorage.getItem('code_verifier'); //recovers saved code verifier
  const requestBody = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVer
  }).toString();
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: requestBody
  }
  //const tokenUrl = `${baseUrl}?grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&code_verifier=${codeVer}`;
  const body = await fetch(baseUrl, payload);
  const response = await body.json();

  return response;
}

function Authorization({onClick}){
    const [code,setCode] = useState("");

    function handleClickCode(){
        window.localStorage.setItem('code_verifier', codeVerifier); //saves code verifier before requesting code
        window.location = codeUrl;
    };

    function handleClickToken(){
        getToken(code).then((response)=>{
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('expiration', response.expires_in);
            onClick(response);
        }).catch((error)=>{console.log(error)});
    }

    useEffect(()=>{
        console.log("hello");
        if(window.location.href.includes("/?code=")){
            setCode(getReturnCode(window.location.href));
        }
    },[window.location.href]);

    return (
        <div>
            <h1>Please LOGIN</h1>
            <button onClick={code?handleClickToken:handleClickCode} >{code?"GET TOKEN":"GET CODE"}</button>
        </div>
    )
}

export default Authorization;