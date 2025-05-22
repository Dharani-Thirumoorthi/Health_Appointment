import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Group of Doctors" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Health Plus</span>
        </h3>
        <p className="about-description">
          At Health Plus, we believe healthcare should be simple, accessible, and centered around you. 
          With a dedicated team of certified medical professionals, we provide virtual consultations and tailored treatments 
          — anytime, anywhere. Whether you're managing a chronic condition or seeking expert advice, Health Plus is here to support your journey to better health.
        </p>

        <h4 className="about-text-title">How It Works</h4>

        <SolutionStep
          title="Find the Right Doctor"
          description="Browse our network of certified healthcare professionals across multiple specialties. Select a doctor based on your unique health needs and preferences."
        />

        <SolutionStep
          title="Book an Appointment"
          description="Choose a convenient time for your consultation. Our platform ensures a hassle-free scheduling experience tailored to your availability."
        />

        <SolutionStep
          title="Receive Expert Care"
          description="Connect with your doctor through a secure video call. Get expert medical advice, prescriptions, and ongoing support—all from the comfort of your home."
        />
      </div>
    </div>
  );
}

export default About;
