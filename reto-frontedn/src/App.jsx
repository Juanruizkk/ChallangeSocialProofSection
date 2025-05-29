import Hero from "./components/Hero";
import RatingContainer from "./components/Rating/RatingContainer";
import ReviewContainer from "./components/Review/ReviewContainer";

function App() {
  return (
    <>
      <main className="font-League-Spartan p-6 py-20">
        <Hero />
        <RatingContainer />
        <ReviewContainer />
      </main>
    </>
  );
}

export default App;
