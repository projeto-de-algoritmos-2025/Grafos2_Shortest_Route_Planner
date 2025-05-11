import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GraphView } from './GraphView';


export const AppRoutes = () => {

    return(
        <>
        
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<GraphView />} />
                    <Route path= '*' element= {<Navigate to = '/'/>}/>

                </Routes>
                          
            
            </BrowserRouter>            
        
        </>
    )
}