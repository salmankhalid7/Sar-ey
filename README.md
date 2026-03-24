# Saraey – Property Listing Platform

Saraey is a web application for adding, managing, and browsing rental properties. Inspired by Airbnb, it allows users to create property listings through a smooth multi-step workflow. Built with modern web technologies, it’s designed to be modular, scalable, and easy to extend.

---

## 🛠 Features

* **Multi-step Listing Workflow**
  Users can add a new property step by step:

  1. Welcome Screen
  2. Property Type Selection
  3. Location & Address
  4. (Future steps: Amenities, Photos, Pricing, Availability)

* **Dynamic State Management**
  Centralized state for listing data, making it easy to manage forms and updates.

* **Modular Components**
  Each step of the workflow is a reusable React component (`WelcomeListing`, `HomeCategories`, `LocationAddress`).

* **Responsive UI**
  Designed to work well across devices (desktop, tablet, mobile).

* **Routing with React Router**
  Single-page application with clean navigation between Home and Create Listing workflow.

---

## 💻 Technologies Used

* **Frontend**: React, React Router DOM
* **State Management**: `useState` with modular update functions
* **Backend (planned)**: Node.js, Express, MongoDB (for storing listings)
* **Styling**: CSS / Tailwind (optional for extension)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/saraey.git
cd saraey
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

The app will open on [http://localhost:3000](http://localhost:3000)

---

## 🧩 Project Structure

```
src/
├─ components/
│  └─ CreateListing/
│     ├─ WelcomeListing.jsx
│     ├─ HomeCategories.jsx
│     └─ LocationAddress.jsx
├─ pages/
│  ├─ Home.jsx
│  └─ CreateListing.jsx
├─ App.js
└─ index.js
```

* `CreateListing.jsx` – Manages the multi-step listing workflow.
* `WelcomeListing.jsx` – Step 1 component.
* `HomeCategories.jsx` – Step 2 component.
* `LocationAddress.jsx` – Step 3 component.

---

## 📈 Future Improvements

* Add more steps:

  * Property details (bedrooms, bathrooms, guests)
  * Amenities selection
  * Photo uploads
  * Pricing and availability
* Connect to backend for persistent storage (MongoDB).
* Add authentication (signup/login) for property owners.
* Add search and filter functionality for users.

---

## 🧑‍💻 Author

**Salman** – Computer Science Student & MERN Stack Developer
Passionate about building user-friendly applications and web platforms inspired by real-world products like Airbnb.

---

## 📄 License

This project is open-source and free to use.
