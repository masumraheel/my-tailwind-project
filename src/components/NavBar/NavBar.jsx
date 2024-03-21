import Link from "../Link/Link";
const NavBar = () => {
    const routes = [{ id: 1, title: "Home", path: "/" },
     { id: 2, title: "About", path: "/about" },
     { id: 3, title: "Services", path: "/services" },
     { id: 4, title: "Products", path: "/products" },
     { id: 5, title: "Contact", path: "/contact" }];
   
    return (
        <nav>
           <ul className="md:flex text-center justify-center">
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;