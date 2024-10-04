import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './content/Home'
export const routes=createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
        path:'/',
        element:<Home/>
        }
]   
}])