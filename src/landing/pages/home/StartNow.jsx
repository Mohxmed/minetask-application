import MainHeading from "@components/ui/typography/MainHeading";
import homeContent from "@/content/landing/homeContent";
import UsagePlanCards from "./UsagePlanCards";

function StartNow() {
  const { title, second } = homeContent.start;
  return (
    <div className="bg-white dark:bg-gray-900/20 py-16">
      <div className="container flex flex-col items-center">
        <MainHeading center={true} second={second}>
          {title}
        </MainHeading>
        <div className="w-full ">
          <UsagePlanCards />
        </div>
      </div>
    </div>
  );
}

export default StartNow;
