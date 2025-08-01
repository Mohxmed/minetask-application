import { RiEmotionLaughLine } from "react-icons/ri";
import ResetPassForm from "../forms/ResetPassForm";
import AuthPageLayout from "../layout/AuthPageLayout";

export default function ResetPassPage() {
  return (
    <AuthPageLayout
      reverse
      heading={"Dont' Worry!"}
      link={"Take me back, I remembered it"}
      linkHref={"/auth/login"}
      linkIcon={<RiEmotionLaughLine className="text-xl" />}
    >
      <ResetPassForm />
    </AuthPageLayout>
  );
}
