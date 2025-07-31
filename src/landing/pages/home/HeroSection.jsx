import MainButton from "@/components/ui/buttons/MainButton";
import OutlineButton from "@/components/ui/buttons/OutlineButton";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useAuthContext } from "@/features/auth/context/AuthProvider";
import homeContent from "@content/landing/homeContent";

function HeroSection() {
  const { user } = useAuthContext();
  return (
    <>
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/95 max-h-[720px] "></div>
      <div className="min-h-[550px] h-[calc(100vh-64px)] max-h-[720px] overflow-hidden bg-white dark:bg-slate-950 bg-[url('@assets/svgs/mind-map.svg')] max-w-[2000px] m-auto bg-no-repeat bg-right ">
        <div className="container h-full w-full relative flex items-center justify-center ">
          <div className="h-full flex flex-col justify-center items-center text-center group lg:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl dark:text-white">
              {homeContent.hero.title}
              <b className="relative z-10 after:content-[''] after:absolute after:left-0 after:bottom-2 after:h-1.5 after:rounded-lg after:bg-gradient-to-r after:from-primary after:to-blue-300 after:transition-all after:-z-10 after:duration-500 after:w-0 group-hover:after:w-full">
                {homeContent.hero.keyword}
              </b>
            </h1>
            <p className="mt-6 text-slate-500 dark:text-slate-300">
              {homeContent.hero.description}
            </p>
            {!user && (
              <div className="w-max">
                <div className="flex gap-4 mt-8 max-lg:mb-8 max-sm:flex-col">
                  <MainButton
                    to={"/auth/register"}
                    text={homeContent.hero.buttons.account}
                  />
                  <OutlineButton
                    to={"/guest"}
                    text={homeContent.hero.buttons.geust}
                  />
                </div>
              </div>
            )}
            <ScrollAnimation />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
