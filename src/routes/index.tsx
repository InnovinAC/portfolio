import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../pages";

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Index/>}/>
            </Routes>
        </BrowserRouter>
            )
}

export default AllRoutes;