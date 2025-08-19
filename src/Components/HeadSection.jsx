
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Welcome to <span>Fiomart</span>
        </h1>
        <p>Shop Smart. Shop Fast. Shop Fiomart.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Explore Categories</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrVf5Qi_QUUXqdtRq2YofR30lr2VhfWaVQisfiq3k9_eGUxlTOI9wwhEfzra8kPE2mCmvEcfvRSARKzRyoOh0ialCWyVGRBkmDLioFsXY0yRHelDw_FTU0gv3hfLGlAARgDcJo=s1360-w1360-h1020-rw"
          alt="Shopping illustration"
        />
        <div className="discount-badge">🔥 Up to 50% OFF</div>
      </div>
    </section>
  );
};

export default HeroSection;
