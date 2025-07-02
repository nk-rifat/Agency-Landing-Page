import IconAirbnb from "../../IconComponents/IconAirbnb";
import IconGoogle from "../../IconComponents/IconGoogle";
import IconMicrosoft from "../../IconComponents/IconMicrosoft";
import IconSpotify from "../../IconComponents/IconSpotify";
import IconMailchimp from "../../IconComponents/IconMailchimp";
import IconMashable from "../../IconComponents/IconMashable";

const Brands = () => {
  const brandIconClassName = "h-9 hover:text-gray-900 dark:hover:text-white";

  const brandList = [
    <IconAirbnb className={brandIconClassName} />,
    <IconGoogle className={brandIconClassName} />,
    <IconMicrosoft className={brandIconClassName} />,
    <IconSpotify className={brandIconClassName} />,
    <IconMailchimp className={brandIconClassName} />,
    <IconMashable className={brandIconClassName} />,
  ];

  const brand = brandList.map((brand, index) => <div key={index}>{brand}</div>);
  
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {brand}
        </div>
      </div>
    </section>
  );
};

export default Brands;
