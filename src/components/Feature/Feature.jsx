import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2'>
            <p className='text-green-400'><IoMdCheckmarkCircle></IoMdCheckmarkCircle></p>
            <h2>{feature}</h2>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;