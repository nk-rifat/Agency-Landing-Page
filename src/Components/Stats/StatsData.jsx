import IconUptime from "../../IconComponents/IconUptime";
import IconUsers from "../../IconComponents/IconUsers";
import IconCountries from "../../IconComponents/IconCountries";
import IconCart from "../../IconComponents/IconCart";

const StatsData = () => {
  const iconListClass =
    "w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500";

  const iconList = [
    <IconUptime className={iconListClass} />,
    <IconUsers className={iconListClass} />,
    <IconCountries className={iconListClass} />,
    <IconCart className={iconListClass} />,
  ];

  const statsDataTitle = [
    "99.99% uptime",
    "600M+ Users",
    "100+ countries",
    "5+ Million",
  ];

  const statsDataDescription = [
    "For Landwind, with zero maintenance downtime",
    "Trusted by over 600 million users around the world",
    "Have used Landwind to create functional websites",
    "Transactions per day",
  ];

  return (
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      {statsDataTitle.map((title, index) => (
        <div key={index}>
          <div>{iconList[index]}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {statsDataDescription[index]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsData;
