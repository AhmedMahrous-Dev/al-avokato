# ⚖️ Al-Avokato

**A front-end training project — a legal consultation platform concept connecting clients with lawyers.**

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 About the Project

**Al-Avokato** is a front-end training project built during my Front-End Web Development training with NTI, in partnership with ATI. It's a concept for a legal-tech platform that would connect clients with specialized lawyers, focused on practicing real front-end skills:

- A directory of lawyers with their specialties and experience.
- Case categories (personal status, criminal, real estate, etc.) with the required documents listed for each type.
- A consultation form that collects case details from the client before the chat starts.
- A front-end chat interface between client and lawyer, built with JavaScript and localStorage.

---

## 📸 Screenshots

| Home | Cases |
|---|---|
| ![Homepage](screenshots/home.png) | ![Cases](screenshots/cases.png) |

| Lawyer Directory | Lawyer Profile |
|---|---|
| ![Lawyer Directory](screenshots/lawyer-directory.png) | ![Lawyer Profile](screenshots/lawyer-profile.png) |

| Consultation Form | Chat |
|---|---|
| ![Consultation Form](screenshots/consultation-form.png) | ![Chat](screenshots/live-chat.png) |

---

## ⚠️ Project Scope

This is a **front-end-only** training project:

- No backend, no database, no real matching algorithm — lawyers are picked from static cards.
- **Login / Sign Up** are form UI only, not a real authentication system.
- **Live Chat** is a front-end experience built with JavaScript and `localStorage` (message rendering, persistence, and automated replies) — not real-time messaging via an API.
- All lawyer stats (success rate, number of cases, etc.) are placeholder values for the design, not real data.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 Login / Sign Up | Two separate account type forms (client / lawyer) — UI only |
| 📂 Case Categories | Browse case types with details and required documents |
| 👨‍⚖️ Lawyer Directory | Cards for lawyers (specialty - years of experience - governorate) |
| 🪪 Lawyer Profile | Bar registration number, success rate, number of cases and clients, consultation fee (placeholder data) |
| 📝 Consultation Form | A short questionnaire about the dispute details before starting the chat |
| 💬 Front-End Chat | Message rendering and persistence with JavaScript and localStorage |
| 🌙 Arabic UI (RTL) | Fully Arabic interface, mobile-responsive |

---

## 🗂️ Project Structure

```
al-avokato/
│
├── css/                     # Stylesheets (Bootstrap + custom styles)
├── img/                     # Lawyer photos and icons
├── js/                      # JavaScript files
│
├── index.html               # Homepage
├── consultation.html        # Case type selection page
├── consultation-form.html   # Consultation details form
├── lawyer-profile.html      # Lawyer's personal profile page
└── style.css                # Global site styling
```

---

## 🧭 Site Pages

1. **Home (index.html):** Platform introduction + "How to Start?" section (4 steps) + "Why Al-Avokato?" section.
2. **Cases (consultation.html):** Search and select a case type (real estate - criminal - personal status...) along with the required documents.
3. **Lawyer Directory:** Display cards for lawyers with options to consult or view their full profile.
4. **Lawyer Profile (lawyer-profile.html):** Detailed info (bar number, experience, specialties, success rate, consultation fee — placeholder data).
5. **Consultation Form (consultation-form.html):** A questionnaire that collects dispute details before the chat starts.
6. **Front-End Chat:** Chat UI between the client and the selected lawyer, built with JavaScript and localStorage.
7. **Login / Sign Up:** Separate form UI for logging in and creating a new account (client / lawyer) — no real authentication.

---

## 🛠️ Tech Stack

- **HTML5** for page structure
- **CSS3 + Bootstrap** for styling and responsive design
- **JavaScript** for interactivity (DOM manipulation, forms, dynamic rendering, localStorage)

> Front-end only — no backend, no database, no server-side code.

---

## 🚀 Running Locally

1. Clone the project from GitHub:
   ```bash
   git clone https://github.com/USERNAME/al-avokato.git
   ```
2. Move into the project folder:
   ```bash
   cd al-avokato
   ```
3. Open `index.html` directly in your browser, or run the project using the Live Server extension in VS Code.

---

## 🗺️ User Flow

1. The client selects the case type from the Cases page.
2. They review the case details and required documents.
3. They choose the right lawyer from the Lawyer Directory.
4. They fill out the consultation details form.
5. They start a chat with the lawyer to complete the consultation (front-end UI, no real messaging backend).

---

## 📌 Roadmap

- [ ] Connect the forms to a real database (Backend)
- [ ] Online payment system for consultation fees
- [ ] Lawyer dashboard for managing cases and clients
- [ ] Real client ratings and reviews
- [ ] Instant notifications for new chat messages
