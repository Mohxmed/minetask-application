import LoginForm from "../forms/LoginForm";
import AuthPageLayout from "../layout/AuthPageLayout";
import { TbFaceIdError } from "react-icons/tb";

function LoginPage() {
  return (
    <AuthPageLayout
      heading={"Back Again!"}
      link={"No, I don't have account!"}
      linkHref={"/auth/register"}
      linkIcon={<TbFaceIdError className="text-xl" />}
    >
      <LoginForm />
    </AuthPageLayout>
  );
}

export default LoginPage;
