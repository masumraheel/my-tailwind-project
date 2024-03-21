import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions= [
        {
          id: 1,
          name: "Basic Membership",
          price: 29.99,
          features: ["Access to gym equipment",
           "Locker room access",
           "Basic fitness classes"]
        },
        {
          id: 2,
          name: "Premium Membership",
          price: 49.99,
          features: ["Access to gym equipment",
          "Locker room access",
          "All fitness classes included",
          "Personal trainer sessions"]
        },
        {
          id: 3,
          name: "Group Classes Only",
          price: 19.99,
          features: ["Access to group fitness classes",
           "Locker room access"]
        },
        {
          id: 4,
          name: "Single Session Pass",
          price: 9.99,
          features: ["One-time access to gym equipment",
           "Locker room access"]
        }
      ];

    return (
        <div>
           <h1 className="text-4xl mb-6">Best Price Gym in City</h1> 
           <div className="grid md:grid-cols-4 gap-4 ">
                {
                 priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
           </div>
        </div>
    );
};

export default PriceOptions;