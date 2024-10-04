import React from 'react';
import OnboardingScreen from './OnboardingScreen';

export default function Screen1() {
  return (
    <OnboardingScreen
      image={require('@/assets/images/onboarding1.png')}
      title="Trusted by millions of people, part of one part"
      currentStep={0}
      totalSteps={3}
      nextRoute="/(onboarding)/screen2"
    />
  );
}