import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.css"
import reportWebVitals from "./reportWebVitals"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Shiny from "./pages/Shiny"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home name={'Ann'} />,
  },
  {
    path: "/shiny",
    element: <Shiny/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
