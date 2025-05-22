import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Trusted Specialists</span>
        </h3>

        <p className="dt-description">
          Get to know our experienced and compassionate doctors who are here
          to support you on your wellness journey. At CareConnect, our team is
          committed to delivering exceptional care tailored to your needs.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Amelia Carter"
          title="Cardiologist"
          stars="4.9"
          reviews="2200"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Liam Turner"
          title="Neurologist"
          stars="4.8"
          reviews="1350"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Sophia Bennett"
          title="Dermatologist"
          stars="4.7"
          reviews="980"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Ethan Rivera"
          title="Pediatrician"
          stars="4.9"
          reviews="1650"
        />
      </div>
    </div>
  );
}

export default Doctors;
