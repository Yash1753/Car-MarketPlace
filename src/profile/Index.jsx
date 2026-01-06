import Header from "../components/Header.jsx"
import {Button} from "@/components/ui/button.jsx"
import {Link} from "react-router-dom"
import MyListing from "./components/MyListing.jsx"
function Profile() {
  return (
    <div>
        <Header/>
         <div className="px-10 md:px-20 my-10">
              <MyListing/>
         </div>
    </div>
  )
}

export default Profile