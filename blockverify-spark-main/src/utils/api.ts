import axios from "axios";

// Mock API base URL
const API_BASE_URL = "/api";

// Certificate API endpoints
export const api = {
  // Upload certificate
  uploadCertificate: async (data: FormData) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          hash: `0x${Math.random().toString(36).substring(2, 15)}`,
          txId: `0xbc${Math.random().toString(36).substring(2, 15)}`,
        });
      }, 1500);
    });
  },

  // Verify certificate
  verifyCertificate: async (hash: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const certificates = JSON.parse(
          localStorage.getItem("certificates") || "[]"
        );
        const cert = certificates.find((c: any) => c.hash === hash);

        resolve({
          success: !!cert,
          certificate: cert || null,
          blockchainTxId: `0xbc${Math.random().toString(36).substring(2, 15)}`,
          aiRiskScore: Math.floor(Math.random() * 10) + 1,
        });
      }, 1500);
    });
  },

  // Get user certificates
  getUserCertificates: async (userId: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const certificates = JSON.parse(
          localStorage.getItem("certificates") || "[]"
        );
        resolve({
          success: true,
          certificates,
        });
      }, 1000);
    });
  },

  // Admin: Get all certificates
  getAllCertificates: async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const certificates = JSON.parse(
          localStorage.getItem("certificates") || "[]"
        );
        resolve({
          success: true,
          certificates,
        });
      }, 1000);
    });
  },

  // Admin: Approve certificate
  approveCertificate: async (hash: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Certificate approved",
        });
      }, 1000);
    });
  },

  // Admin: Reject certificate
  rejectCertificate: async (hash: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Certificate rejected",
        });
      }, 1000);
    });
  },
};

// Authentication endpoints
export const auth = {
  login: async (email: string, password: string, role: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            email,
            name: email.split("@")[0],
            role,
          },
        });
      }, 1000);
    });
  },

  signup: async (name: string, email: string, password: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            name,
            email,
            role: "user",
          },
        });
      }, 1000);
    });
  },
};
