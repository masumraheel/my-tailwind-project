import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

const NavBar = () => {
    const [open, setOpen]=useState(false);

    const routes = [{ id: 1, title: "Home", path: "/" },
     { id: 2, title: "About", path: "/about" },
     { id: 3, title: "Services", path: "/services" },
     { id: 4, title: "Products", path: "/products" },
     { id: 5, title: "Contact", path: "/contact" }];
   
    return (
        <nav className="bg-yellow-500 p-4">
         <div className="text-2xl md:hidden" onClick={() => setOpen(!open) }>
            {
                open === true ?<GrClose></GrClose>
                : <RiMenu2Fill></RiMenu2Fill>
            }
         
         </div>
           <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-10':'-top-60'} bg-yellow-400 p-12 text-black`}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;