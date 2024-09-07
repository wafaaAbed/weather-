import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';
import Root from '../Components/RootPage/Root';
import ProtectedRoutes from '../Components/ProtectedRoutes';
import Loading from "../assets/lotiieLoading.json";
import { Suspense } from 'react';
import Lottie from 'lottie-react';

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Suspense fallback={<Lottie animationData={Loading}/>}><Root /></Suspense> ,
      errorElement: <h1>Error Page</h1>,
    },
    {


      path: "home",
      element: <ProtectedRoutes>
        <Suspense fallback={<Lottie animationData={Loading}/>}>
        <Home />
        </Suspense>
        
      </ProtectedRoutes>,
    }



  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes
