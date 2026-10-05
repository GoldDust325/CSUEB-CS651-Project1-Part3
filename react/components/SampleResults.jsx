// Fixed classroom examples, independent of the selected photograph.
const foods = [
  { name: 'Grilled chicken', portion: '1 Serving', calories: 250 },
  { name: 'Rice', portion: '1 Serving', calories: 205 },
  { name: 'Broccoli', portion: '1 Serving', calories: 55 },
];

const suggestions = {
  Casual: 'Good start! However, try adding a little more color, carrots are in season right now!',
  Strict: 'Missing color: carrots, beans, kale...',
  Athlete: 'I told you to lay off the donuts. Remove the fried food from the plate right now.',
};

export default function SampleResults({ visible, companion }) {
  const totalCalories = foods.reduce((total, food) => total + food.calories, 0);

  return (
    <>
      <p className="eyebrow mb-2">02 · At a glance</p>
      <h2 className="workspace-heading" id="results-heading">Get to know your plate.</h2>
      {/* This live region announces results when the parent changes React state. */}
      <div aria-live="polite" aria-atomic="true">
        {visible ? (
          <>
            <p className="demo-note">Sample results for chicken, rice, and broccoli. These examples stay the same for every photo.</p>
            <div className="sample-total my-4">
              <div><span className="sample-label">Sample estimate</span><p className="mb-0 mt-2">Total meal calories</p></div>
              <strong>{totalCalories}<small> cal</small></strong>
            </div>
            <ul className="food-results list-unstyled mb-4">
              {foods.map((food) => (
                <li className="food-result" key={food.name}>
                  <div><h3>{food.name}</h3><p>{food.portion}</p></div>
                  <span>{food.calories} cal</span>
                </li>
              ))}
            </ul>
            <div className="sample-suggestion">
              <h3>{companion} companion · Sample suggestion</h3>
              <p className="mb-0">{suggestions[companion]}</p>
            </div>
          </>
        ) : (
          <div className="results-empty mt-3">
            <p className="fw-semibold mb-2">A fresh plate, a fresh start.</p>
            <p className="mb-0">Choose a photo or use the sample meal, then select Submit to explore an example.</p>
          </div>
        )}
      </div>
    </>
  );
}
