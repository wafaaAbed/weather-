import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Components/Home/Home';
import { Suspense } from 'react';





function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Suspense
        fallback={"Loading..."
          // <div style={{ marginTop: "10%" }}>
          //   <LottieHandler type="loading" message="Loading please wait..." />
          // </div>
        }
      >
      
        <Home />
      </Suspense>,
      errorElement: <p>Error Page</p>,
      children: [
        {
          index: true,
          element: 
            <Home />
            },
       
    
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
