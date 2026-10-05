import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MealPicker from './components/MealPicker';
import MealPreview from './components/MealPreview';
import CompanionSelector from './components/CompanionSelector';
import SampleResults from './components/SampleResults';
import plate from '../images/fork-knife-plate.png';
import '../css/app.css';

export default function App() {
  // App owns the shared state; children receive values and callbacks through props.
  const [mealImage, setMealImage] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [companion, setCompanion] = useState('Casual');

  // Release each temporary image URL when the photo changes or App unmounts.
  useEffect(() => {
    return () => {
      if (mealImage && !mealImage.isSample) URL.revokeObjectURL(mealImage.url);
    };
  }, [mealImage]);

  function selectPhoto(file) {
    setMealImage({ url: URL.createObjectURL(file), name: file.name, isSample: false });
    setShowResults(false);
  }

  function selectSample() {
    setMealImage({ url: plate, isSample: true });
    setShowResults(false);
  }

  function resetMeal() {
    setMealImage(null);
    setShowResults(false);
  }

  return (
    <>
      <Navbar currentPage="App" />
      <main id="main-content" className="page-content container meal-workspace">
        <header className="workspace-intro mb-4">
          <p className="eyebrow">Your companion at the table</p>
          <h1>What's on your plate?</h1>
          <p className="lead mt-3">Bring a meal to the table. Preview a photo, explore sample food results, and find your companion style.</p>
        </header>

        {/* Bootstrap columns sit beside each other on desktop and stack on mobile. */}
        <div className="row g-4 align-items-start">
          <div className="col-lg-6">
            <section className="workspace-panel" aria-labelledby="meal-picker-heading">
              <MealPicker onSelectPhoto={selectPhoto} onSelectSample={selectSample} />
              <MealPreview image={mealImage} />
              <div className="d-flex flex-wrap gap-2 mt-4">
                <button className="btn btn-primary" type="button" disabled={!mealImage}
                  onClick={() => setShowResults(true)}>Submit</button>
                {mealImage && <button className="btn btn-outline-primary" type="button"
                  onClick={resetMeal}>Start over</button>}
              </div>
            </section>
          </div>

          <div className="col-lg-6">
            <section className="workspace-panel mb-4" aria-labelledby="companion-heading">
              <CompanionSelector value={companion} onChange={setCompanion} />
            </section>
            {/* Composition: SampleResults uses both the result state and companion state. */}
            <section className="workspace-panel" aria-labelledby="results-heading">
              <SampleResults visible={showResults} companion={companion} />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
