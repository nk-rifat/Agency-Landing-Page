const NavItems = () => {
  const defaultClass =
    "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  const navItems = [
    { name: "Home", href: "#", isActive: true },
    { name: "Company", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Features", href: "#" },
    { name: "Team", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {navItems.map((item, index) => (
        <li key={index}>
          <a href={item.href} className={defaultClass}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
