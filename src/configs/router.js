import {
    createBrowserRouter
} from "react-router-dom";
import BoxesPage from "../pages/BoxesPage";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/boxes",
        element: <BoxesPage />,
    },
]);

export default router;