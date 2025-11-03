# CertiChain - AI-Based Blockchain Certificate Verification

A modern, production-ready web application for secure certificate verification using blockchain technology and AI-powered fraud detection.

## 🚀 Features

- **Blockchain Integration**: Immutable certificate storage with hash verification
- **AI Fraud Detection**: Advanced machine learning algorithms for authenticity verification
- **User Dashboard**: Upload, verify, and manage certificates
- **Admin Panel**: Complete certificate management and analytics
- **QR Code Generation**: Instant verification via QR codes
- **Responsive Design**: Beautiful UI with Framer Motion animations
- **Mock API**: Fully functional localStorage-based backend simulation

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI components
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **QR Codes**: qrcode.react

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd certichain
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will be running at `http://localhost:8080`

## 🎯 Quick Start Guide

### For Users:

1. **Sign Up**: Create a new account from the login page
2. **Upload Certificate**: Navigate to "Upload Certificate" and fill in the details
3. **Verify Certificate**: Use the certificate hash to verify authenticity
4. **View Certificates**: Check all your certificates in "My Certificates"

### For Admins:

1. **Login**: Use admin credentials
2. **Dashboard**: View system statistics and analytics
3. **Manage Certificates**: Approve or reject pending certificates
4. **User Management**: Monitor and manage system users

### Test Credentials:

**User Account:**
- Email: user@example.com
- Password: any password (mock authentication)

**Admin Account:**
- Email: admin@certichain.com
- Password: any password (mock authentication)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AnimatedCard.tsx
│   ├── DashboardLayout.tsx
│   └── BackgroundAnimation.tsx
├── pages/              # Route pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Upload.tsx
│   ├── Verify.tsx
│   ├── MyCertificates.tsx
│   ├── Profile.tsx
│   ├── AdminPanel.tsx
│   └── NotFound.tsx
├── utils/              # Utility functions
│   ├── api.ts          # Mock API calls
│   └── helpers.ts      # Helper functions
├── hooks/              # Custom React hooks
├── lib/                # Library configurations
└── App.tsx            # Main app component
```

## 🎨 Key Features Breakdown

### 1. Landing Page
- Animated hero section with gradient backgrounds
- Statistics showcase (certificates verified, institutions, fraud detected)
- Feature highlights with glassmorphic cards
- Smooth scroll animations

### 2. Certificate Upload
- Drag-and-drop file upload
- Form validation for certificate metadata
- Blockchain hash generation
- Upload progress animation
- Success confirmation with animations

### 3. Certificate Verification
- Hash-based verification
- Blockchain transaction ID display
- AI risk score calculation
- QR code generation for verified certificates
- Detailed certificate information display

### 4. User Dashboard
- Overview statistics
- Recent activity feed
- Quick access navigation
- Responsive sidebar layout

### 5. Admin Panel
- System-wide statistics
- Certificate management table
- Approve/Reject functionality
- User management
- Analytics overview

## 🎭 Mock API Endpoints

All API calls are simulated using `localStorage` for demonstration:

- `POST /api/login` - User authentication
- `POST /api/signup` - User registration
- `POST /api/upload` - Certificate upload
- `GET /api/verify/:hash` - Certificate verification
- `GET /api/certificates` - Get user certificates
- `GET /api/admin/certificates` - Get all certificates (admin)
- `PUT /api/admin/approve/:hash` - Approve certificate
- `PUT /api/admin/reject/:hash` - Reject certificate

## 🎨 Design System

The app uses a custom cyber-tech theme with:

- **Primary**: Electric Purple (`hsl(270 70% 60%)`)
- **Secondary**: Cyber Teal (`hsl(180 70% 50%)`)
- **Accent**: Neon Blue (`hsl(210 100% 60%)`)
- **Background**: Dark Navy (`hsl(230 25% 8%)`)

Custom utility classes:
- `.glass-card` - Glassmorphic card effect
- `.gradient-primary` - Primary gradient background
- `.gradient-secondary` - Secondary gradient background
- `.text-gradient` - Gradient text effect
- `.glow-primary` - Primary glow effect

## 📱 Responsive Design

Fully responsive across:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

Mobile features:
- Bottom navigation bar
- Collapsible sidebar
- Touch-friendly interactions

## 🎬 Animations

Powered by Framer Motion:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states
- Success/Error feedback
- Micro-interactions

## 🔒 Security Features

- Input validation on all forms
- Protected routes for authenticated users
- Role-based access control (User/Admin)
- Secure hash generation
- AI-powered fraud detection simulation

## 🚀 Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## 📝 Environment Variables

No environment variables needed for the demo version. For production:

```env
VITE_API_URL=your_api_url
VITE_BLOCKCHAIN_NETWORK=your_network
VITE_AI_SERVICE_URL=your_ai_service
```

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize!

## 📄 License

MIT License - feel free to use this project for learning or as a template.

## 🎓 Notes

This is a frontend demonstration with mock backend functionality. For production use:

1. Replace mock API with real backend endpoints
2. Implement actual blockchain integration (e.g., Ethereum, Polygon)
3. Connect to real AI/ML services for fraud detection
4. Add proper authentication (JWT, OAuth)
5. Implement database storage
6. Add proper error handling and logging
7. Set up CDN for static assets
8. Configure proper security headers

## 🆘 Troubleshooting

**Issue**: White screen on load
- Solution: Clear browser cache and reload

**Issue**: Certificates not persisting
- Solution: Check browser localStorage is enabled

**Issue**: Animations not smooth
- Solution: Try reducing browser extensions or use a different browser

## 📧 Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
