import SignupForm from "../forms/SignupForm";
import { RiEmotionLaughLine } from "react-icons/ri";
import AuthPageLayout from "../layout/AuthPageLayout";

export default function SignupPage() {
  return (
    <AuthPageLayout
      reverse
      heading={"Let's do it!"}
      link={"Thanks, I already have one!"}
      linkHref={"/auth/login"}
      linkIcon={<RiEmotionLaughLine className="text-xl" />}
    >
      <SignupForm />
    </AuthPageLayout>
  );
}
