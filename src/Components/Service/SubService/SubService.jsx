import IconListItem from "../../../IconComponents/IconListItem";

const SubService = ({
  reverseLayout,
  title,
  description,
  serviceList,
  summary,
  img,
}) => {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <div
        className={`text-gray-500 sm:text-lg dark:text-gray-400 ${
          reverseLayout && "order-1"
        }`}
      >
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-8 font-light lg:text-xl">{description}</p>
        <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">

          {serviceList.map((service, index) => (
            <li className="flex space-x-3" key={index}>

              <IconListItem className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" />

              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                {service}
              </span>
            </li>
          ))}
          
        </ul>
        <p className="mb-8 font-light lg:text-xl">{summary}</p>
      </div>
      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={img}
        alt="dashboard feature image"
      ></img>
    </div>
  );
};

export default SubService;
