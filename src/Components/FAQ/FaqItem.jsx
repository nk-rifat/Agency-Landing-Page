import IconArrowUp from "../../IconComponents/IconArrowUp";

const FaqItem = ({ question, answer, isActive }) => {
  return (
    <div>
      <h3>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        >
          <span>{question}</span>
          <IconArrowUp />
        </button>
      </h3>
      <div>
        {isActive && (
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
