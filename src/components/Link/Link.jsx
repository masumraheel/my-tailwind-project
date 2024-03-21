import PropTypes from 'prop-types'; // ES6
const Link = ({route}) => {
    return (
        <li className="mr-8 hover:bg-red-500">
            <a href={route.path}>{route.title}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}


export default Link;