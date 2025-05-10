import {BrowserRouter, Route,Navigate} from 'react-router';
import { Home } from './Home';
export const AppRoutes = () => {

    return(
        <>
        
            <BrowserRouter>
            

                <Route path= '/home' element= {<Home/>}/>
                <Route path= '*' element= {<Navigate to = '/home'/>}/>
            
            </BrowserRouter>
            
        
        </>
    )
}