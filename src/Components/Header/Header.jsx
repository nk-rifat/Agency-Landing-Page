import Button from "../../ReusableComponents/Button";
import HeaderLogo from "./HeaderLogo";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <>
      <header className="fixed w-full">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <HeaderLogo />
            <div className="flex items-center lg:order-2">
              <Button to="#" type="primary">
                Download
              </Button>
            </div>

            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <NavItems />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
