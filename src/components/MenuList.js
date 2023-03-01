import { BiHomeSmile, BiAlbum } from "react-icons/bi";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast  } from "react-icons/fa";
import { BiPulse } from "react-icons/bi";

const MenuList = [
    {
    id: 1,
    icon: <BiHomeSmile />,
    name: "Home",
},

{
    id: 2,
    icon: <BiPulse />,
    name: "Discover",

},
{
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
},
{
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
},
{
    id: 4,
    icon: <BiAlbum />,
    name: "Album",
},
{
    id: 5,
    icon: <BiHomeSmile />,
    name: "Home",
},
{
    id : 6,
    icon: <FaPodcast />,
    name: "Podcast",
}];

export { MenuList };