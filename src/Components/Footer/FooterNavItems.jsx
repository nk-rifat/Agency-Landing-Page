const FooterNavItems = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Help Center",
      links: [
        "Help center",
        "Discord Server",
        "Twitter",
        "Facebook",
        "Contact Us",
      ],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Licensing", "Terms"],
    },
    {
      title: "Download",
      links: ["iOS", "Android", "Windows", "MacOS"],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {section.title}
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              {section.links.map((link, i) => (
                <li className="mb-4" key={i}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
    </>
  );
};

export default FooterNavItems;
