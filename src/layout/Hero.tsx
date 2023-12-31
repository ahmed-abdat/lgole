import hero from "/img/heros.png";
import Drawere from "./Drawer";

function Hero() {
  return (
    <section className="flex flex-col md:justify-around justify-center items-center  md:flex-row hero px-3">
      <img
        src={hero}
        alt="hero"
        className="sm:w-1/2 lg:w-1/2 md:w1/2 xl:order-1"
      />
      <div className="flex flex-col items-center lx:flex-row md:w-1/3 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold my-4">
          مع خدمة <span className="text-green-600 font-bold ">الغول</span> حول
          فظتك بكل سهولة و أمان
        </h1>
        <Drawere />
      </div>
    </section>
  );
}
export default Hero;
