import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './Features/Home/Home'
import Movies from './Features/Movies/Movies'
import TvShows from './Features/TVShows/TvShows'
import MediaDetails from './Features/Details/MediaDetails'
import Auth from './Features/Auth/Auth'
import Actors from './Features/Actors/Actors'
import ActorDetails from './Features/ActorDetails/ActorDetails'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/tvshows",
        element: <TvShows />
      },
      {
        path: "/:type/:id",
        element: <MediaDetails />
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/actors",
        element: <Actors />
      },
      {
        path: "/actor/:id",
        element: <ActorDetails />
      }
    ]
  }
])