import { useUser, UserButton } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Header() {
    const {user, isSignedIn} = useUser
  return (
    <div className="flex justify-between items-center shadow-sm p-3">
      <Link to="/">
        <img src="/logo.png" alt="logo" width={120} height={120} />
      </Link>
        <ul className="hidden md:flex gap-16">
            <li className="font-medium cursor-pointer hover:scale-105 transition-all hover:text-primary" >Home</li>
            <li className="font-medium cursor-pointer hover:scale-105 transition-all hover:text-primary">Search</li>
            <li className="font-medium cursor-pointer hover:scale-105 transition-all hover:text-primary">New</li>
            <li className="font-medium cursor-pointer hover:scale-105 transition-all hover:text-primary">Pre-Owned</li>
        </ul>

        {isSignedIn ? 
            <div className="flex items-center gap-5"> <UserButton/><Link to = "/profile">  <Button>Submit Listing</Button> </Link></div> : <Button>Submit Listing</Button> 
        }
    </div>
  )
}

export default Header