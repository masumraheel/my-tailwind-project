const Link = ({route}) => {
    return (
        <li className="mr-12">
            <a href={route.path}>{route.title}</a>
        </li>
    );
};

export default Link;