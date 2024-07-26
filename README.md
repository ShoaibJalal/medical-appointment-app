# Project Documentation

## <a name="Project Demo is Live at"> [CarePlan] (https://medical-appointment-app.vercel.app/) </a>

## <a name="introduction">🤖 Introduction</a>
A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN

## <a name="features">🔋 Features</a>

👉 **Register as a Patient**: Users can sign up and create a personal profile as a patient.

👉 **Book a New Appointment with Doctor**: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

👉 **Manage Appointments on Admin Side**: Administrators can efficiently view and handle all scheduled appointments.

👉 **Confirm/Schedule Appointment from Admin Side**: Admins can confirm and set appointment times to ensure they are properly scheduled.

👉 **Cancel Appointment from Admin Side**: Administrators have the ability to cancel any appointment as needed.

👉 **Send SMS on Appointment Confirmation**: Patients receive SMS notifications to confirm their appointment details.

👉 **Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

👉 **File Upload Using Appwrite Storage**: Users can upload and store files securely within the app using Appwrite storage services.
and many more, including code architecture and reusability

👉 **Manage and Track Application Performance Using Sentry**: The application uses Sentry to monitor and track its performance and detect any errors.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/ShoaibJalal/medical-appointment-app.git
cd healthcare
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.



## Dependencies

This project uses the following dependencies:

### @hookform/resolvers
- **Version**: ^3.9.0
- **Description**: Provides resolver support for `react-hook-form` to integrate with various validation libraries like Yup, Zod, Joi, etc.

### @radix-ui/react-alert-dialog
- **Version**: ^1.1.1
- **Description**: Accessible alert dialog component from Radix UI, a set of low-level, accessible components for building accessible design systems and applications.

### @radix-ui/react-checkbox
- **Version**: ^1.1.1
- **Description**: Accessible checkbox component from Radix UI.

### @radix-ui/react-dialog
- **Version**: ^1.1.1
- **Description**: Accessible dialog (modal) component from Radix UI.

### @radix-ui/react-dropdown-menu
- **Version**: ^2.1.1
- **Description**: Accessible dropdown menu component from Radix UI.

### @radix-ui/react-label
- **Version**: ^2.1.0
- **Description**: Accessible label component from Radix UI.

### @radix-ui/react-radio-group
- **Version**: ^1.2.0
- **Description**: Accessible radio group component from Radix UI.

### @radix-ui/react-select
- **Version**: ^2.1.1
- **Description**: Accessible select component from Radix UI.

### @radix-ui/react-slot
- **Version**: ^1.1.0
- **Description**: Utility component for passing slots (component children) in Radix UI.

### @tanstack/react-table
- **Version**: ^8.19.3
- **Description**: Headless UI for building powerful tables and datagrids. Provides hooks for building tables with React.

### class-variance-authority
- **Version**: ^0.7.0
- **Description**: A utility for handling conditional class names in JavaScript and TypeScript.

### clsx
- **Version**: ^2.1.1
- **Description**: A tiny utility for constructing `className` strings conditionally, similar to `classnames`.

### input-otp
- **Version**: ^1.2.4
- **Description**: A React component for inputting One Time Passwords (OTPs) with multiple input fields.

### lucide-react
- **Version**: ^0.408.0
- **Description**: A collection of simply beautiful open-source icons for React.

### next
- **Version**: 14.2.5
- **Description**: The React Framework for production, provides features like server-side rendering and static site generation.

### next-themes
- **Version**: ^0.3.0
- **Description**: An easy way to handle themes in a Next.js application.

### node-appwrite
- **Version**: ^13.0.0
- **Description**: Appwrite's Node.js SDK to interact with Appwrite server APIs.

### react
- **Version**: ^18
- **Description**: A JavaScript library for building user interfaces.

### react-datepicker
- **Version**: ^7.3.0
- **Description**: A simple and reusable datepicker component for React.

### react-dom
- **Version**: ^18
- **Description**: React package for working with the DOM.

### react-dropzone
- **Version**: ^14.2.3
- **Description**: Simple React hook to create a HTML5-compliant drag'n'drop zone for files.

### react-hook-form
- **Version**: ^7.52.1
- **Description**: Performant, flexible, and extensible forms with easy-to-use validation, handling forms in React.

### react-phone-number-input
- **Version**: ^3.4.3
- **Description**: A React component for international phone number input.

### tailwind-merge
- **Version**: ^2.4.0
- **Description**: A utility to merge Tailwind CSS classes in JavaScript.

### tailwindcss-animate
- **Version**: ^1.0.7
- **Description**: A Tailwind CSS plugin that provides a set of animations.

### zod
- **Version**: ^3.23.8
- **Description**: TypeScript-first schema declaration and validation library.

## Contributing

If you would like to contribute to this project, please follow the guidelines:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

