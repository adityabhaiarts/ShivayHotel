export const trackEvent = (eventName: string, data: Record<string, any> = {}) => {
  // In a real application, this would send data to Google Analytics, Plausible, Mixpanel, etc.
  // For the client demo, we'll log it to show the mechanism is in place.
  console.log(`[Event Tracked] ${eventName}`, data);

  // Example integration with Plausible if it was available:
  // if (typeof window !== 'undefined' && window.plausible) {
  //   window.plausible(eventName, { props: data });
  // }
};
