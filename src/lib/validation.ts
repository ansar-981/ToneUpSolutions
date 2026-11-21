export const validateEmail = (email: string) => {
  if (!email) return true; // Optional field
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone: string) => {
  // Basic validation: allows 10-15 digits, optional +, spaces, hyphens
  const re = /^\+?[\d\s-]{10,15}$/;
  return re.test(phone);
};

export const sanitizeInput = (input: string) => {
  return input.trim().replace(/<[^>]*>?/gm, ""); // Basic XSS prevention
};