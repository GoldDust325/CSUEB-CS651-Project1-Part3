import plate from '../../images/plate.svg';

// Reused on both React starting pages; props change its content.
export default function PageIntro({ eyebrow, title, children }) {
  return (
    <main id="main-content" className="page-content container">
      <div className="row align-items-center g-4">
        <div className="col-md-7">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {children}
        </div>
        <div className="col-md-5">
          <img className="hero-art" src={plate} alt="Illustrated plate of grilled chicken, rice, and broccoli" />
        </div>
      </div>
    </main>
  );
}
