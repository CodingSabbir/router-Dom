
import { Route, Routes } from "react-router-dom"
import UserData from "./components/UserData"



function App() {

return (
<>


<Routes>
  <Route path="/" element={<UserData />}/>
  <Route path="/home" element={<UserData />}/>
</Routes>
</>
)
}

export default App
