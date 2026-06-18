export const PHONE_NUMBER = "07317264933";
export const DISPLAY_PHONE = "073172 64933";
export const HOTEL_NAME = "Hotel Shivoy Palace & V2 Restaurant";
export const ADDRESS = "Roadways Tiraha, Jaipurwa, GVM Convent School Road, Basti, Uttar Pradesh 272001";
export const EMAIL = "booking@shivoypalace.com"; // Placeholder

// Analytics tracking mock
export const trackEvent = (eventName: string, data?: any) => {
  console.log(`[Analytics Event]: ${eventName}`, data);
  // Example of where you would link Google Analytics or Plausible:
  // if (window.plausible) window.plausible(eventName, { props: data });
  // if (window.gtag) gtag('event', eventName, data);
};

// WhatsApp link generator
export const getWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/91${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`;
};
