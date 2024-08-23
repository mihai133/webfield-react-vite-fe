import { RouterProvider } from 'react-router-dom'
import { router } from './pages/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss'

export default function App () {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}