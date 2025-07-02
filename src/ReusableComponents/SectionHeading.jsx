const SectionHeading = ({ title, description }) => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
        {description}
      </p>
    </>
  );
};

export default SectionHeading;
