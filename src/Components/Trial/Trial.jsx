import Button from "../../ReusableComponents/Button";
import SectionHeading from "../../ReusableComponents/SectionHeading";

const Trial = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <SectionHeading
            title="Start your free trial today"
            description="Try Landwind Platform for 30 days. No credit card required."
          />
          <Button type="primary" to="#">
            Free trial for 30 days
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trial;
