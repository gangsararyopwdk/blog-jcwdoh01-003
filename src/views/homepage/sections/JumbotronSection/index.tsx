import Image from "next/image";

const JumbotronSection = () => {
  return (
    <div className="w-full h-[600px] relative mb-[100px]">
      <div className="absolute z-[1] w-full h-full bg-black opacity-[0.39]" />

      <div className="absolute z-[0] w-full h-full top-0 left-0">
        <div className="relative w-full h-full">
          <Image
            src="/static/homepage/jumbotron/bg-jumbotron.png"
            alt="Jumbotron Background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto px-16">
        <div className="w-full h-full flex items-center justify-center">
          <div>
            <h1 className="text-[42px] tracking-[0.5] text-white uppercase mb-[4px]">
              Inspiration for travel by real people
            </h1>

            <h2 className="text-xl text-white text-center mb-[40px]">
              Book smart, travel simple
            </h2>

            <div className="w-fit mx-auto">
              <button className="p-[8px_40px] bg-white rounded-[2px] cursor-pointer">
                <p className="p-0 font-mono text-base text-black">
                  Start planning your trip
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronSection;
