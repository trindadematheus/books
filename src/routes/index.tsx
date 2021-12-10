import { useAuth } from "../hooks/use-auth";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";

function Routes() {
  const { user } = useAuth()

  return (
    <>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}

export default Routes;