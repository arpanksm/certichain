/**
 * Generate a random hash for certificate
 */
export const generateHash = (length: number = 32): string => {
  const chars = "0123456789abcdef";
  let hash = "0x";
  for (let i = 0; i < length; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
};

/**
 * Format date to readable string
 */
export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Truncate hash for display
 */
export const truncateHash = (hash: string, start: number = 6, end: number = 4): string => {
  if (hash.length <= start + end) return hash;
  return `${hash.slice(0, start)}...${hash.slice(-end)}`;
};

/**
 * Calculate risk level from AI score
 */
export const getRiskLevel = (score: number): { level: string; color: string } => {
  if (score <= 20) return { level: "Very Low", color: "text-green-500" };
  if (score <= 40) return { level: "Low", color: "text-green-400" };
  if (score <= 60) return { level: "Medium", color: "text-yellow-500" };
  if (score <= 80) return { level: "High", color: "text-orange-500" };
  return { level: "Very High", color: "text-red-500" };
};

/**
 * Simulate file upload progress
 */
export const simulateUploadProgress = (
  onProgress: (progress: number) => void,
  duration: number = 2000
) => {
  const steps = 20;
  const interval = duration / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += 100 / steps;
    onProgress(Math.min(Math.round(current), 100));

    if (current >= 100) {
      clearInterval(timer);
    }
  }, interval);

  return () => clearInterval(timer);
};

/**
 * Validate certificate file
 */
export const validateCertificateFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ["application/pdf"];

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: "Only PDF files are allowed" };
  }

  if (file.size > maxSize) {
    return { valid: false, error: "File size must be less than 10MB" };
  }

  return { valid: true };
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const user = localStorage.getItem("user");
  return !!user;
};

/**
 * Get current user
 */
export const getCurrentUser = (): any => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

/**
 * Check if user is admin
 */
export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === "admin";
};
