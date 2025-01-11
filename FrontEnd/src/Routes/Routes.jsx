import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import UserRoot from "../pages/UserRoot";


const Routes=[{

   
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:":id",
                element:<Detail/>
            }
    ]
}]
export default Routes