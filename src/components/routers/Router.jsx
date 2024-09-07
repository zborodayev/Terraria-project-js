import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { ErrorNotFound } from "../../assets/Errors/ErrorNotFound"

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<ErrorNotFound/>} path="*" />
        </Routes>
    </BrowserRouter>
  )
}
