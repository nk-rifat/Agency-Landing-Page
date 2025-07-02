import IconGreenCheck from "../../IconComponents/IconGreenCheck";
import Button from "../../ReusableComponents/Button";

const PlanCard = ({ title, subtitle, price, features, quantity }) => {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {subtitle}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <IconGreenCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
            <span>{item}</span>
          </li>
        ))}
        

        <li className="flex items-center space-x-3">
          <IconGreenCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
          <span>
            Team size: <span className="font-semibold">{quantity.team}</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <IconGreenCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
          <span>
            Premium support:{" "}
            <span className="font-semibold">{quantity.support}</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <IconGreenCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
          <span>
            Free updates:{" "}
            <span className="font-semibold">{quantity.updates}</span>
          </span>
        </li>
      </ul>
      <Button type="primary" to="#">
        Get Started
      </Button>
    </div>
  );
};

export default PlanCard;
