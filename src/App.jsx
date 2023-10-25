
import { Route, Routes } from "react-router-dom"
import UserData from "./components/UserData"
import NotMatch from "./NotMatch"
import UserInfo from "./components/UserInfo"



function App() {

return (
<>


<Routes>
  <Route path="/" element={<UserData />}/>
  <Route path="/home" element={<UserData />}/>
  <Route path="*" element={<NotMatch/>}/>
  <Route path="/user/:userID" element={<UserInfo/>}/>
</Routes>
</>
)
}

export default App
 