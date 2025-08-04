"use client"

type CardProps = {
  title?: string;
  desc?: string;
  roll?: number;
};

const Card = ({ title = "Title Here", desc = "Description Here", roll = 90}: CardProps) => {
  const moveDash = (vh: number) => {
    const dash = document.getElementById('dash');
    if (dash) {
      dash.style.transform = `translateY(-${vh}vh)`;
    }
  }

  return (
    <button onClick={() => moveDash(roll)} className="h-full w-[16%] rounded-r-3xl rounded-l-xl bg-back1 border border-line flex flex-row cursor-pointer hover:scale-[105%] drop-shadow-black transition-all duration-150 ease-linear">
        <div className="w-[5%] bg-primary rounded-l-3xl drop-shadow-sm drop-shadow-primary"></div>
        <div className="flex flex-col w-full h-full 2xl:py-[10%] py-[5%] px-[2%] gap-1">
            <div className="font-bold text-center 2xl:text-xl lg:text-lg w-full">{title}</div>
            <span className="font-bold text-center 2xl:text-lg lg:text-sm text-lowwhite w-full">{desc}</span>
        </div>
    </button>
  );
};

export default Card;
