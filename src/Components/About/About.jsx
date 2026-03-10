import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <div className="about-page">

      {/* ABOUT INTRO */}

      <section className="about-intro">

        <h1>About Us</h1>

        <p>
          <strong>CuraPredict</strong> is an AI-powered healthcare decision
          support platform designed to analyze patient health data and generate
          intelligent predictions about potential health risks and treatment
          outcomes.
        </p>

        <p>
          By leveraging artificial intelligence and deep learning models,
          CuraPredict transforms patient demographics, lifestyle patterns, and
          clinical indicators into meaningful medical insights that help support
          smarter healthcare decisions.
        </p>

      </section>



      {/* VISION & MISSION */}

      <section className="vision-mission">

        <div className="vm-card">

          <h2>Vision</h2>

          <p>
            To advance the future of healthcare through intelligent and
            data-driven medical insights that enable early risk detection and
            personalized treatment strategies.
          </p>

        </div>

        <div className="vm-card">

          <h2>Mission</h2>

          <p>
            To empower healthcare professionals and individuals with AI-driven
            tools that analyze patient data, predict health risks, and improve
            treatment decision-making.
          </p>

        </div>

      </section>



      {/* WHAT WE OFFER */}

      <section className="services">

        <h2>What We Offer</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Health Risk Analysis</h3>
            <p>
              Analyze patient health indicators to estimate potential
              complications and hospitalization risks.
            </p>
          </div>

          <div className="service-card">
            <h3>Heart Disease Prediction</h3>
            <p>
              Evaluate cardiovascular risk factors such as blood pressure,
              cholesterol and lifestyle habits.
            </p>
          </div>

          <div className="service-card">
            <h3>AI Treatment Prediction</h3>
            <p>
              Use deep learning models to analyze treatment effectiveness based
              on patient health profiles.
            </p>
          </div>

          <div className="service-card">
            <h3>Real-Time Insights</h3>
            <p>
              Generate predictive insights instantly from patient data to
              support faster medical decision-making.
            </p>
          </div>

        </div>

      </section>



      {/* WHY CURAPREDICT */}

      <section className="why">

        <h2>Why Choose CuraPredict?</h2>

        <p>
          CuraPredict combines multiple healthcare datasets, machine learning
          models, and a simple user interface to transform complex medical data
          into clear predictive insights. Our goal is to make healthcare
          analytics more accessible, intelligent, and data-driven.
        </p>

      </section>



      {/* FUTURE SECTION */}

      <section className="future">

        <h2>Looking Ahead</h2>

        <ul>
          <li>Advanced disease prediction models</li>
          <li>Expanded healthcare datasets</li>
          <li>Interactive visualization dashboards</li>
          <li>Personalized treatment recommendation systems</li>
        </ul>

      </section>

            {/* CONNECT WITH US */}

      <section className="connect">

        <h2>Connect With Us</h2>

        <p>
          Have questions, suggestions, or feedback about CuraPredict? 
          We’re always open to ideas that help improve healthcare
          analytics and predictive intelligence.
        </p>

      <p>
  <a className="contact-link" href="/contact">Contact us</a> to work together
  towards building a future of smarter, data-driven healthcare.
</p>
        <h4>— The CuraPredict Team</h4>

      </section>

    </div>
  );
}

export default AboutPage;