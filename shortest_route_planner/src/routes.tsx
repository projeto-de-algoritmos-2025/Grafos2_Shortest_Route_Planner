import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GraphView } from './GraphView'; // ajuste o caminho conforme sua pasta


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