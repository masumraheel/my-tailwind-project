import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const{name, price, features}= option;
    return (
        <div className="bg-violet-700 p-6 rounded-md text-lime-100">
            <h2 className='text-center'>
                <span className="text-5xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl mt-6 text-center">{name}</h4>
            {
                features.map((feature,index) => <Feature key={index} feature={feature} ></Feature>)
            }
            <button className='btn w-full mt-4 text-xl font-bold text-center bg-red-400 hover:bg-green-400'>Buy Now</button>
        </div>
    );
};

PriceOption.PropTypes = {
    option:PropTypes.object
}

export default PriceOption;