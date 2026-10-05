const styles = [
  { name: 'Casual', description: 'A friendly nudge.' },
  { name: 'Strict', description: 'Straight to the point.' },
  { name: 'Athlete', description: 'A little extra drive.' },
];

export default function CompanionSelector({ value, onChange }) {
  return (
    <fieldset>
      <legend className="workspace-heading" id="companion-heading">Pick your companion.</legend>
      <p className="demo-note">Set the tone of your pal.</p>
      <div className="row g-2">
        {styles.map((style) => (
          <div className="col-12 col-sm-4" key={style.name}>
            <input className="btn-check" type="radio" name="companion-style"
              id={`style-${style.name}`} value={style.name} checked={value === style.name}
              onChange={() => onChange(style.name)} />
            <label className="btn btn-outline-primary companion-option" htmlFor={`style-${style.name}`}>
              <span>{style.name}</span>
              <small>{style.description}</small>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
