import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import ListedBooks from './Components/ListedBooks/ListedBooks'
import TotalBook from './Components/TotalBook/TotalBook'
import PostRead from './Components/PostRead/PostRead'
import SortBy from './Components/SortBy/SortBy'
import LongBookStyle from './Components/LongBookStyle/LongBookStyle'
import LongBook from './Components/LongBook.jsx/LongBook'
import NewContainer from './Components/NewContainer/NewContainer'
import Add_Products from './Components/Add_Products/Add_Products'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
     {
      path:"/",
      element:<Home></Home>,
     
     },
     {
      path:"/listed",
      element:<ListedBooks></ListedBooks>,
     },
     {
      path:"/listed",
      element:<SortBy></SortBy>
     },
    
     {
      path:"/book/:id",
      element:<TotalBook></TotalBook>,
      
     },
     {
      path:"/book/:id",
      element:<LongBookStyle></LongBookStyle>,
      
     },
     {
      path:"/book/:id",
      element:<LongBook></LongBook>,
     
     },
     {
      path:"/pages",
      element:<PostRead></PostRead>,
     },
     {
      path:"/container/:id",
      element:<NewContainer></NewContainer>,
      
      },
      {
        path: "/new-product",
        element: <Add_Products></Add_Products>,
      
     }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
