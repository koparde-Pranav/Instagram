import { AiFillCompass, AiFillHeart, AiFillHome, AiFillMessage, AiFillPlusCircle, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const menu = [
    {title: "Home", icon: <AiOutlineHome className="text-2xl mr-5 " />, activeicon: <AiFillHome className="text-2xl mr-5 " />},
    {title: "Search", icon: <AiOutlineSearch className="text-2xl mr-5 "/>, activeicon: <AiOutlineSearch className="text-2xl mr-5 " />},
    {title: "Explore", icon: <AiOutlineCompass className="text-2xl mr-5 " />, activeicon: <AiFillCompass className="text-2xl mr-5 " />}, 
    {title: "Reels", icon: <RiVideoLine className="text-2xl mr-5 " />, activeicon: <RiVideoFill className="text-2xl mr-5 " />}, 
    {title: "Message", icon: <AiOutlineMessage className="text-2xl mr-5 " />, activeicon: <AiFillMessage className="text-2xl mr-5 "/>}, 
    {title: "Notification", icon: <AiOutlineHeart className="text-2xl mr-5 " />, activeicon: <AiFillHeart className="text-2xl mr-5 "/>}, 
    {title: "Create", icon: <AiOutlinePlusCircle className="text-2xl mr-5 " />, activeicon: <AiFillPlusCircle className="text-2xl mr-5 " />},
    {title: "Profile", icon: <CgProfile className="text-2xl mr-5 " />, activeicon: <CgProfile className="text-2xl mr-5 "/>}, 
]