import SubService from "./SubService/SubService";
import serviceImage1 from "../../../src/assets/features/feature-1.png";
import serviceImage2 from "../../../src/assets/features/feature-2.png";

const Service = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        
        <SubService
          reverseLayout={false}
          title="Work with tools you already use"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          serviceList={[
            "Continuous integration and deployment",
            "Development workflow",
            "Knowledge management",
          ]}
          summary="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          img={serviceImage1}
        />

        <SubService
          reverseLayout={true}
          title="We invest in the world’s potential"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          serviceList={[
            "Dynamic reports and dashboards",
            "Templates for everyone",
            "Development workflow",
            "Limitless business automation",
            "Knowledge management",
          ]}
          summary="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          img={serviceImage2}
        />
      </div>
    </section>
  );
};

export default Service;
