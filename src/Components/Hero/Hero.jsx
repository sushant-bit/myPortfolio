import profile from "../../assets/images/profile.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <p className="hero-name">Sushant Adhikari</p>

        <h1 className="hero-title">Aspiring Full Stack Developer</h1>

        <p className="hero-description">
          Bringing your ideas to life with clean, efficient, and scalable code.
          Whether it's building web apps, optimizing performance, or solving
          complex technical challenges.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Contact me</button>
          <button className="btn-secondary">View projects</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
};
