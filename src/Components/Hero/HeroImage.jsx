import heroImage from "../../../src/assets/hero.png"
const HeroImage = () => {
  return (
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={heroImage} alt="hero image" />
    </div>
  );
};

export default HeroImage;
