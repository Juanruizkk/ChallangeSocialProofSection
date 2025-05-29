
import Hero from "./components/Hero";
import RatingContainer from "./components/Rating/RatingContainer";
import ReviewContainer from "./components/Review/ReviewContainer";
import BackgroundSection from "./components/BackgroundSection";
function App() {
  return (
    <>
      <main className="relative font-League-Spartan p-6 py-20">
       <BackgroundSection/>
        <div className="mb-12">
          <Hero />
          <RatingContainer />
        </div>
        <ReviewContainer />
      </main>
    </>
  );
}

export default App;
