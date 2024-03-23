import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/layout/Layout"
import { routes } from "./Routes"

export const AppRouter = () => {
  return (
    <div>
          <Routes>
            <Route element={<Layout />}>
              {routes.map(({id, path, Element}) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Route>

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
    </div>
  )
}
