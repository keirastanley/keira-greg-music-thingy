import {useEffect} from "react";
import React from "react";
import queryString from "query-string";
// import express from "express";
import axios from "axios";
import './App.css';

function App() {

  function base64_urlencode(str) {
    return window.atob(String.fromCharCode.apply(null, 
      new Uint8Array(str)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
  }
  useEffect (() => {
    async function request(){
      const client_id = '07db115cda594f6da4340bc8c73ca816';
      const redirect_uri = 'http://keirastanley.github.io/keira-greg-music-thingy/callback/';
      const state = base64_urlencode();
      const scope = 'user-read-private user-read-email';

      return axios.get('/login').then((res) => res.redirect('https://accounts.spotify.com/authorize?' +
      queryString.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })))
    } request()
  }, [])

  // useEffect(() => {
    
  //   var app = express();

  //   app.get('/login', function(req, res) {


      
    // });
  // })

  return (
    <div className="App">
      <h1>Keira and Greg's amazing music thingy</h1>
    </div>
  );
}

export default App;
