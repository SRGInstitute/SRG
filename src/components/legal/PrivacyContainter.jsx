import React from 'react';
import Back from '../common/back/Back';
import PrivacyCard from '../legal/privacy-policy'; // Separate component for the content
import './PrivacyCard.css';
const PrivacyPolicy = () => {
  return (
    <>
      <Back title="Privacy Policy" />
      <PrivacyCard />
    </>
  );
};

export default PrivacyPolicy;
