import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './Context/ThemeProvider/ThemeProvider';
import { router } from './Routes/Routes';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
     <div className='h-full' id={theme}>
      <RouterProvider router={router}>

      </RouterProvider>
       <Toaster />
     </div>
  
  );
}

export default App;
