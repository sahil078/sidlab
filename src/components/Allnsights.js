import React from "react";
import "../styles/Allnsights.css";
import a1 from "../image/a1.png";
import a2 from "../image/a2.png";
import a3 from "../image/a3.png";

const AIInsights = () => {
  return (
    <section className="ai-insights">
      <h2 className="title">AI Insights</h2>
      <p className="subtitle">STAY UPDATED WITH THE LATEST NEWS AND DEVELOPMENTS</p>
      <div className="cards-container">
        <div className="card">
          <img src={a1} alt="Industry Update" className="card-image" />
          <h3 className="card-title">Industry Update</h3>
          <p className="card-text">
            There has been significant progress in using AI for medical diagnostics, personalized medicine, drug discovery, and improving patient care. Increased attention on the ethical implications of AI, including fairness, transparency, bias mitigation, and responsible deployment of AI systems.
          </p>
        </div>
        <div className="card">
          <img src={a2} alt="Online Tech Education" className="card-image" />
          <h3 className="card-title">Online Tech Education</h3>
          <p className="card-text">
            Online tech education has witnessed a surge in accessibility, with platforms offering diverse courses in various languages, catering to global audiences. Emphasis on skill-based learning has grown, with platforms offering specialized courses in emerging tech fields such as AI, cybersecurity, and data science.
          </p>
        </div>
        <div className="card">
          <img src={a3} alt="Modern Age Parenting" className="card-image" />
          <h3 className="card-title">Modern Age Parenting</h3>
          <p className="card-text">
            With the rise of technology, there's a surge in digital tools aiding parents—from apps monitoring child activities to educational platforms offering interactive learning experiences. Online forums, social media groups, and virtual communities are thriving, offering a space for parents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
