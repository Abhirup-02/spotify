import React, { useEffect, useState } from 'react'
import SpotifyWebApi from "spotify-web-api-js"
import './App.css'
import Login from './pages/login/Login'
import { getTokenFromUrl } from './context/spotify'
import Player from './pages/player/Player'
import { useDataLayerValue } from './context/DataLayer'

const spotify = new SpotifyWebApi()

const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token


    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })


      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })


      spotify.setAccessToken(_token)
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
    }

    /*spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );

    spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );*/

    /*dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });*/


  }, [])



  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}

    </div>
  )
}

export default App

