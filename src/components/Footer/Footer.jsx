import React from 'react'
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

function Footer() {
  return (
    <div className="fixed bottom-0 bg-white z-5 w-full block sm:hidden border-t-2 border-slate-500 rounded-t-2xl dark:bg-slate-800 dark:text-white">
        <ul className="flex items-center justify-around space-x-6 py-2">
          <li className="flex flex-col items-center">
            <span>
              <HouseOutlinedIcon fontSize="small" />
            </span>
            <span>Home</span>
          </li>
          <li className="flex flex-col items-center">
            <span>
            <LocalMallOutlinedIcon fontSize="small" />
            </span>
            <span>Bag</span>
          </li>
          <li className="flex flex-col items-center">
            <span>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </span>
            <span>Wishlist</span>
          </li>
          <li className="flex flex-col items-center">
            <span>
              <ContactMailOutlinedIcon fontSize="small" />
            </span>
            <span>Contact Us</span>
          </li>
          
        </ul>
    </div>
  )
}

export default Footer