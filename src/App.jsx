import React from 'react'
import Team1 from './pages/Team1'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Team2 from './pages/Team2'
import Team3 from './pages/Team3'
import Team4 from './pages/Team4'
import Team5 from './pages/Team5'
import Team6 from './pages/Team6'
import Team7 from './pages/Team7'
import Team8 from './pages/Team8'
import Team9 from './pages/Team9'
import Team10 from './pages/Team10'
import Team11 from './pages/Team11'
import Team12 from './pages/Team12'
import Team13 from './pages/Team13'
import Team14 from './pages/Team14'
import Team15 from './pages/Team15'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Team1/>
      </>
    )
  },
  {
    path: '/team1',
    element: (
      <>
      <Team1/>
      </>
    )
  },
  {
    path: '/team2',
    element: (
      <>
      <Team2/>
      </>
    )
  },
  {
    path: '/team3',
    element: (
      <>
      <Team3/>
      </>
    )
  },
  {
    path: '/team4',
    element: (
      <>
      <Team4/>
      </>
    )
  },
  {
    path: '/team5',
    element: (
      <>
      <Team5/>
      </>
    )
  },
  {
    path: '/team6',
    element: (
      <>
      <Team6/>
      </>
    )
  },
  {
    path: '/team7',
    element: (
      <>
      <Team7/>
      </>
    )
  },
  {
    path: '/team8',
    element: (
      <>
      <Team8/>
      </>
    )
  },
  {
    path: '/team9',
    element: (
      <>
      <Team9/>
      </>
    )
  },
  {
    path: '/team10',
    element: (
      <>
      <Team10/>
      </>
    )
  },
  {
    path: '/team11',
    element: (
      <>
      <Team11/>
      </>
    )
  },
  {
    path: '/team12',
    element: (
      <>
      <Team12/>
      </>
    )
  },
  {
    path: '/team13',
    element: (
      <>
      <Team13/>
      </>
    )
  },
  {
    path: '/team14',
    element: (
      <>
      <Team14/>
      </>
    )
  },
  {
    path: '/team15',
    element: (
      <>
      <Team15/>
      </>
    )
  },
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App