import IconFacebook from "../../IconComponents/IconFacebook";
import IconInstragram from "../../IconComponents/IconInstragram";
import IconTwiter from "../../IconComponents/IconTwiter";
import IconGithub from "../../IconComponents/IconGithub";
import IconBall from "../../IconComponents/IconBall";

const FooterSocialLinks = () => {
  const iconClass = "w-5 h-5";
  const socialIcon = [
    <IconFacebook className={iconClass}></IconFacebook>,
    <IconInstragram className={iconClass}></IconInstragram>,
    <IconTwiter className={iconClass}></IconTwiter>,
    <IconGithub className={iconClass}></IconGithub>,
    <IconBall className={iconClass}></IconBall>,
  ];
  return (
    <ul className="flex justify-center mt-5 space-x-5">
      {socialIcon.map((social, index) => (
        <li key={index}>
          <a
            
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            {social}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialLinks;
