import { AppNavigation } from "@/navigation";
import { registerRootComponent } from "expo";

const App = () => {
  return <AppNavigation />;
};

export default registerRootComponent(App);
