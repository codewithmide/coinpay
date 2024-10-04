import React from "react";
import OnboardingScreen from "./OnboardingScreen";

export default function Screen3() {
  return (
    <OnboardingScreen
      image={require("@/assets/images/onboarding3.png")}
      title="Receive money from anywhere in the world"
      currentStep={2}
      totalSteps={3}
      nextRoute="/(auth)/welcome"
    />
  );
}
