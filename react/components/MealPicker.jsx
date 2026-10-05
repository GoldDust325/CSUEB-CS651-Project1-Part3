// The parent decides what to do with an image; this component renders the controls.
export default function MealPicker({ onSelectPhoto, onSelectSample }) {
  function handleChange(event) {
    const file = event.target.files[0];
    if (file) onSelectPhoto(file);
    // Allow the same photo to be selected again after Start over.
    event.target.value = '';
  }

  return (
    <>
      <p className="eyebrow mb-2">01 · Your meal</p>
      <h2 className="workspace-heading" id="meal-picker-heading">Start with a photo.</h2>
      <p className="demo-note">Choose a meal image, or use our sample illustration.</p>
      <label className="form-label fw-semibold" htmlFor="meal-photo">Meal photo</label>
      <input className="form-control meal-file-input" id="meal-photo" type="file"
        accept="image/*" onChange={handleChange} />
      <button className="btn btn-outline-primary mt-3" type="button"
        onClick={onSelectSample}>Use sample meal</button>
    </>
  );
}
