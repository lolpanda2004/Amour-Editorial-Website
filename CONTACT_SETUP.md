# 🚀 Enhanced Contact Us Setup Guide

## 📋 **Prerequisites**

Before setting up the enhanced Contact Us functionality, ensure you have:

- Node.js (v18 or later)
- npm or yarn package manager
- A Gmail account (or other email service) for sending emails
- Code editor (VS Code recommended)

## 🔧 **Backend Setup**

### 1. **Environment Configuration**

1. Copy the environment example file:

   ```bash
   cd amour-Backend
   cp .env.example .env
   ```

2. **Configure Email Service** (Gmail Setup):
   - Enable 2-Factor Authentication on your Google account
   - Generate an App Password:
     - Go to [Google Account Settings](https://myaccount.google.com/)
     - Security → 2-Step Verification → App passwords
     - Select "Mail" and "Other (Custom name)"
     - Copy the 16-character password
3. **Edit `.env` file**:

   ```env
   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   EMAIL_RECEIVER=admin@amoureditorial.com

   # Server Configuration
   NODE_ENV=development
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   ```

### 2. **Install Dependencies**

```bash
cd amour-Backend
npm install
```

### 3. **Test Email Configuration**

Create a test script to verify email setup:

```bash
# Create test file
echo 'const { sendTestEmail } = require("./utilise/emailService");
sendTestEmail().then(() => process.exit(0)).catch(err => {
  console.error(err);
  process.exit(1);
});' > test-email.js

# Run test
node test-email.js

# Clean up
rm test-email.js
```

## 🎨 **Frontend Setup**

### 1. **Environment Configuration**

```bash
cd amour-next-ts
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 2. **Install Dependencies**

The necessary dependencies should already be installed. If not:

```bash
cd amour-next-ts
npm install
```

## 🚀 **Running the Application**

### Option 1: Run Both Services Separately

**Terminal 1 (Backend):**

```bash
cd amour-Backend
node index.js
```

**Terminal 2 (Frontend):**

```bash
cd amour-next-ts
npm run dev
```

### Option 2: Run Both Services Together

From the root directory:

```bash
npm run start
```

## 🧪 **Testing the Contact Form**

1. **Navigate to Contact Page**: Visit `http://localhost:3000/contact`

2. **Test Form Validation**:

   - Try submitting with empty fields
   - Enter invalid email format
   - Test phone number validation
   - Submit with very short messages

3. **Test Successful Submission**:

   - Fill all required fields correctly
   - Submit the form
   - Check for success toast notification
   - Verify email received at EMAIL_RECEIVER address

4. **Test Rate Limiting**:
   - Submit 6+ forms quickly to test rate limiting
   - Should receive 429 error after 5 submissions

## 🛡️ **Security Features Implemented**

### ✅ **Input Sanitization**

- HTML/script tag removal
- Character limit enforcement
- XSS prevention

### ✅ **Validation**

- Client-side and server-side validation
- Email format verification
- Phone number validation
- Required field checks

### ✅ **Rate Limiting**

- 5 requests per hour per IP address
- Prevents spam and abuse

### ✅ **Error Handling**

- Structured error responses
- Development vs production error details
- Proper HTTP status codes

### ✅ **Security Headers**

- CORS configuration
- XSS protection headers
- Content security policies

## 🎨 **Design Features**

### ✅ **Modern UI/UX**

- Gradient backgrounds with amber/orange theme
- Animated components using AOS
- Responsive design for all devices
- Glass morphism effects

### ✅ **User Experience**

- Real-time form validation
- Loading states during submission
- Toast notifications for feedback
- Contact information display
- Call-to-action sections

### ✅ **Accessibility**

- Proper form labels
- Error message associations
- Keyboard navigation support
- Screen reader friendly

## 🔧 **Troubleshooting**

### **Email Not Sending**

1. Check `.env` configuration
2. Verify Google App Password is correct
3. Ensure 2FA is enabled on Google account
4. Check console for specific error messages
5. Run email test script

### **CORS Errors**

1. Verify `FRONTEND_URL` in backend `.env`
2. Check if ports match (3000 for frontend, 3001 for backend)
3. Ensure both services are running

### **Form Not Submitting**

1. Check browser console for JavaScript errors
2. Verify `NEXT_PUBLIC_API_URL` in frontend `.env.local`
3. Test API endpoint directly with Postman/curl

### **Rate Limiting Issues**

1. Wait 1 hour or restart backend server
2. Check IP address in logs
3. Adjust rate limits in `formController.js` if needed

## 🚀 **Production Deployment**

### **Backend (Railway/Render/Vercel)**

1. Set environment variables on hosting platform
2. Update `NODE_ENV=production`
3. Configure production domain in `FRONTEND_URL`

### **Frontend (Vercel/Netlify)**

1. Update `NEXT_PUBLIC_API_URL` to production backend URL
2. Ensure all environment variables are set
3. Test form functionality on staging before production

## 📊 **Features Overview**

| Feature                 | Status   | Description                            |
| ----------------------- | -------- | -------------------------------------- |
| ✅ Modern UI            | Complete | Glass morphism, gradients, animations  |
| ✅ Form Validation      | Complete | Client + server-side validation        |
| ✅ Email Service        | Complete | HTML emails with Gmail/SMTP            |
| ✅ Security             | Complete | Sanitization, rate limiting, CORS      |
| ✅ Error Handling       | Complete | Structured errors, proper status codes |
| ✅ Toast Notifications  | Complete | Success/error feedback                 |
| ✅ Responsive Design    | Complete | Mobile-first, all screen sizes         |
| ✅ Contact Info Display | Complete | Business details with icons            |
| ✅ Loading States       | Complete | Smooth UX during submission            |

## 🎯 **Next Steps**

Consider adding these enhancements:

- Email templates with your branding
- Database logging of form submissions
- Admin dashboard for managing inquiries
- Integration with CRM systems
- A/B testing for form conversion
- Multi-language support
