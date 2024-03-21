import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const{name, price, features}= option
    return (
        <div className="bg-violet-700 p-6 rounded-md text-lime-100">
            <h2>
                <span className='text-5xl'>{price}</span>
                <span className='text-2xl '>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            {
                features.map((feature,index) => <Feature key={index} feature={feature} ></Feature>)
            }
        </div>
    );
};

PriceOption.PropTypes = {
    option:PropTypes.object
}

export default PriceOption;