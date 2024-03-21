const NavBar = () => {
    const routes = [{ id: 1, title: "Home", path: "/" },
     { id: 2, title: "About", path: "/about" },
     { id: 3, title: "Services", path: "/services" },
     { id: 4, title: "Products", path: "/products" },
     { id: 5, title: "Contact", path: "/contact" }];
   
    return (
        <nav>
            {
                routes.map(route => <li key={route.id}>
                    <a href={`route.path`}>
                    {route.title}
                    </a></li>)
            }
        </nav>
    );
};

export default NavBar;