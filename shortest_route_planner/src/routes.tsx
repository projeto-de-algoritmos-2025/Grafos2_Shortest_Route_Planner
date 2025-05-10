import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { GraphView } from './GraphView'; // ajuste o caminho conforme sua pasta


export const AppRoutes = () => {

    return(
        <>
        
            <BrowserRouter>

                <Routes>

                    <Route path= '/home' element= {<Home/>}/>
                    <Route path="/graph" element={<GraphView />} />
                    <Route path= '*' element= {<Navigate to = '/home'/>}/>

                </Routes>
                          
            
            </BrowserRouter>            
        
        </>
    )
}