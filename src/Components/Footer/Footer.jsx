import FooterContent from "./FooterContent";
import FooterNavItems from "./FooterNavItems";
import FooterSocialLinks from "./FooterSocialLinks";

const Footer = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <FooterNavItems />
        <FooterContent />
        <FooterSocialLinks />
      </div>
    </section>
  );
};

export default Footer;
