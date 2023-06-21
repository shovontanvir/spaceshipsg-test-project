import Skeleton from "./components/Skeleton";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <section className="w-screen min-h-screen flex justify-center items-center">
      <Skeleton>
        <LandingPage />
      </Skeleton>
    </section>
  );
}

export default App;
