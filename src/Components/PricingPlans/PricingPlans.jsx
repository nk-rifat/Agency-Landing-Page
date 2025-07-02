import SectionHeading from "../../ReusableComponents/SectionHeading";
import PlanCard from "./PlanCard";

const pricingPlans = [
  {
    id: 1,
    title: "Starter",
    subtitle: "Best option for personal use & for your next project.",
    price: "$29",
    features: {
      text: ["Individual configuration", "No setup, or hidden fees"],
      quantity: {
        team: "1 developer",
        support: "6 months",
        updates: "6 months",
      },
    },
  },
  {
    id: 2,
    title: "Company",
    subtitle: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    features: {
      text: ["Individual configuration", "No setup, or hidden fees"],
      quantity: {
        team: "10 developers",
        support: "24 months",
        updates: "24 months",
      },
    },
  },
  {
    id: 3,
    title: "Enterprise",
    subtitle: "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    features: {
      text: ["Individual configuration", "No setup, or hidden fees"],
      quantity: {
        team: "100+ developers",
        support: "36 months",
        updates: "36 months",
      },
    },
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <SectionHeading
            title="Designed for business teams like yours"
            description="Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
          />
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              features={plan.features.text}
              quantity={plan.features.quantity}
            ></PlanCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
