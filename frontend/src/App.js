import { Route } from "react-router-dom/cjs/react-router-dom.min";
import {Chats} from "./pages/Chats.js"
import axios from "axios"

function App() {
  return (
    <div className="App">
      
      <Route path="/" component={Chats}></Route>
      
    </div>
  );
}

export default App;
