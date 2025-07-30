import LoadingPage from "@/components/ui/loading/LoadingPage";
import { Suspense } from "react";
const withSuspense = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
