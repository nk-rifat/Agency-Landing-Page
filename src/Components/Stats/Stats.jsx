import StatsContent from "./StatsContent";
import StatsData from "./StatsData";

const Stats = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <StatsContent />
        <StatsData />
      </div>
    </section>
  );
};

export default Stats;
