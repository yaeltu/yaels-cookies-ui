import {
    RouterProvider
} from "react-router-dom";
import router from "./configs/router";

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
