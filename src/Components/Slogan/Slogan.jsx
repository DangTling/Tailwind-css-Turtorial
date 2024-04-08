import Card from "../../assets/Web/isocard.svg";

const Slogan = () => {
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p>
          Earn{" "}
          <span className="dark:text-purple-300 text-purple-500">More</span>
        </p>
        <p>Pay Less</p>
        <button className="text-white text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:text-25 md:py-[8px] md:px-8">
          Start
        </button>
      </div>
      <div className="mt-[69px] md:absolute md:right-[-5rem]">
        <img src={Card} alt=" Credit Card" />
      </div>
    </section>
  );
};

export default Slogan;
