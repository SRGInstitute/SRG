import React, { useEffect, useRef } from "react";
import Back from "../common/back/Back";
import ScholarshipPolicyContent from "./scholarship-policy";
import "./scholarship-policy.css";

const ScholarshipPolicy = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Scroll to policy header when component mounts
    const scrollToHeader = () => {
      // Check if there's a hash in the URL
      const hash = window.location.hash;

      if (hash) {
        // If hash exists, scroll to that element
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offset = 100; // Offset for fixed header/navigation if any

          window.scrollTo({
            top: elementPosition - offset,
            left: 0,
            behavior: "smooth",
          });
          return;
        }
      }

      // Default: scroll to policy title/header
      const headerElement =
        document.getElementById("policy-title") ||
        document.getElementById("policy-header") ||
        document.querySelector(".policy-header");

      if (headerElement) {
        const headerPosition =
          headerElement.getBoundingClientRect().top + window.pageYOffset;
        const offset = 100; // Offset for fixed header/navigation if any

        window.scrollTo({
          top: headerPosition - offset,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Fallback to top if header not found
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(scrollToHeader, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Back title="Scholarship Policy" />
      <ScholarshipPolicyContent />
    </>
  );
};

export default ScholarshipPolicy;
