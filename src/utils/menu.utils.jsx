import { MdHome } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { IoMusicalNotes } from "react-icons/io5";
import { RiCompassDiscoverFill } from "react-icons/ri";
export const menu=[
  {
    name:"Home",
    icon:<MdHome/>,
    link:"/"
  },
  {
    name:"Trends",
    icon:<IoIosTrendingUp/>,
    link:"/trends"
  },
  {
    name:"Library",
    icon:<IoMusicalNotes/>,
    link:"/library"
  },
  {
    name:"Discover",
    icon:<RiCompassDiscoverFill/>,
    link:"/discover"
  }
]
