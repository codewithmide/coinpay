import React from 'react';
import OnboardingScreen from './OnboardingScreen';

export default function Screen2() {
  return (
    <OnboardingScreen
      image={require('@/assets/images/onboarding2.png')}
      title="Spend money abroad, and track your expense"
      currentStep={1}
      totalSteps={3}
      nextRoute="/(onboarding)/screen3"
    />
  );
}