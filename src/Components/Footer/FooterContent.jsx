import FooterLogo from "../../../src/assets/logo.svg";
const FooterContent = () => {
  return (
    <>
      <a
        href="#"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          src={FooterLogo}
          className="h-6 mr-3 sm:h-9"
          alt="Learn with Sumit Logo"
        />
        Learn with Sumit{" "}
      </a>
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
        © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
        <a
          href="#"
          target="_blank"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Flowbite
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Tailwind CSS
        </a>
      </span>
    </>
  );
};

export default FooterContent;
