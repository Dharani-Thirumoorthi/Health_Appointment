import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Care<span className="legal-siteSign">Connect</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Overview</p>
        <p className="legal-description">
          Welcome to CareConnect — your digital partner in modern healthcare. By accessing or using our services, you agree to comply with our terms and policies designed to safeguard your health data and streamline your experience.
        </p>

        <p className="legal-title">Privacy Commitment</p>
        <p className="legal-description">
          We are committed to protecting your privacy. Our Privacy Policy explains what information we collect, how we use it, and the steps we take to secure your data. Your health records and personal details are always handled with strict confidentiality and care.
        </p>

        <p className="legal-title">User Agreement</p>
        <p className="legal-description">
          By using CareConnect, you agree to our Terms of Use. These include responsible use of the platform, mutual respect between users and healthcare providers, and acknowledgment of limitations regarding online consultations. Please review these terms before using our services.
        </p>

        <p className="legal-title">Virtual Consultations</p>
        <p className="legal-description">
          Our licensed doctors offer online consultations that are secure, convenient, and professional. These are intended for non-emergency advice, prescription renewals, or health guidance. Always provide accurate information during consultations for the best care.
        </p>

        <p className="legal-title">Using the Platform</p>
        <p className="legal-description">
          CareConnect is built to simplify your healthcare journey. Browse specialists, book appointments, and consult via video or chat. Please note: our platform is not a substitute for emergency services. In urgent situations, contact your local healthcare provider immediately.
        </p>
      </div>
    </div>
  );
}

export default LegalDocs;
