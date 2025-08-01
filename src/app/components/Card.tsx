type CardProps = {
  title?: string;
  desc?: string;
};

const Card = ({ title = "Title Here", desc = "Description Here"}: CardProps) => {

  return (
    <div className="h-full w-[16%] rounded-r-3xl rounded-l-xl bg-back1 border border-line flex flex-row cursor-pointer hover:scale-[105%] drop-shadow-black transition-all duration-150 ease-linear">
        <div className="w-[5%] bg-primary rounded-l-3xl drop-shadow-sm drop-shadow-primary"></div>
        <div className="flex flex-col w-full h-full py-[10%] px-[2%] gap-1">
            <div className="font-bold text-center text-xl w-full">{title}</div>
            <span className="font-bold text-center text-lg text-lowwhite w-full">{desc}</span>
        </div>
    </div>
  );
};

export default Card;
