import React from "react";
import "./Home.css";

function Home() {

  const openPrediction = () => {
    window.open("/prediction", "_self");
  };

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <h1>AI Powered Personalized Medicine</h1>

        <p>
          Transform healthcare with intelligent predictions. CuraPredict helps uncover
          hidden health risks and treatment patterns by analyzing patient data,
          enabling faster insights and more informed medical decisions.     
        </p>

        <button
          className="predict-btn"
          onClick={openPrediction}
        >
          Start Prediction
        </button>

      </section>


      {/* WHY CURAPREDICT */}
 

      <section className="about">

        <h2>Why CuraPredict?</h2>

        <p>
          CuraPredict is an AI powered healthcare decision support system designed
          to assist in early disease risk detection and personalized treatment
          analysis. By combining patient medical history, lifestyle factors and
          clinical indicators, the platform predicts potential health risks and
          treatment effectiveness using advanced deep learning models.
        </p>

        <div className="about-stats">

         {/* <div className="stat">
            <h3>3</h3>
            <p>AI Prediction Models</p>
          </div> */}

          <div className="stat">
            <h3>14+</h3>
            <p>Health Indicators</p>
          </div>

          <div className="stat">
            <h3>Real-Time</h3>
            <p>Risk Prediction</p>
          </div>

          <div className="stat">
            <h3>Data Driven</h3>
            <p>Medical Insights</p>
          </div>

        </div>

      </section>


      {/* FEATURE CARDS */}

      <section className="features">

        <h2 className="features-title">Our Features</h2>

        <div className="features-container">

          <div className="card">
            <h3>Health Risk Analysis</h3>
            <p>Predict patient complication and hospitalization risks.</p>
          </div>

          <div className="card">
            <h3>Heart Disease Prediction</h3>
            <p>Analyze heart disease risk using patient data.</p>
          </div>

          <div className="card">
            <h3>AI Treatment Prediction</h3>
            <p>Understand treatment effectiveness with neural networks.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;