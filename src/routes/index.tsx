import PrivateRoutes from "./private";
import PublicRoutes from "./public";

function Routes() {
  return (
    <>
      {true ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}

export default Routes;