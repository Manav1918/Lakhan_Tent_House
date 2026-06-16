# Lakhan Tent House & Sound (लखन टेंट हाउस एंड साउंड)

A premium, responsive, and multilingual web application for **Lakhan Tent House & Sound** based in Singhrawan, Barhi Road, Hazaribagh, Jharkhand. 

This website showcases the services, gallery of work, and enables seamless WhatsApp-based booking integration alongside a client verification portal.

---

## 🌟 Key Features

* **Multilingual Support (Hindi & English):** Switch language smoothly with a dynamic toggle. The translation dictionary is managed cleanly inside client-side JavaScript.
* **Interactive WhatsApp Booking:** Multi-select booking tags customize a message template and route booking details directly to the owner's WhatsApp number.
* **Verified Customer Portal:** Clients can register their details (Name, Phone, Email) and check booking history. Completing 3 or more bookings unlocks VIP benefits (like a 10% discount, priority scheduling, and upgrades) with simulated progress indicators.
* **Premium Design Aesthetics:** Modern UI featuring sleek gradients, smooth scroll animations, glassmorphism, responsive navigation drawers, hover indicators, and custom styling.
* **Floating Quick Action Widgets:** Quick-tap floating button for instant WhatsApp catalog browsing and chat.

---

## 🛠️ Tech Stack

* **Structure:** [index.html](file:///d:/Python%20Projects/LTH-Lakhan%20tent%20House/index.html) (HTML5, Semantic structure)
* **Styling:** [styles.css](file:///d:/Python%20Projects/LTH-Lakhan%20tent%20House/styles.css) (Custom CSS3 Variables, responsive layout grid/flexbox)
* **Interactions:** [app.js](file:///d:/Python%20Projects/LTH-Lakhan%20tent%20House/app.js) (Vanilla JavaScript, LocalStorage persistence, multi-lingual translations)
* **Icons:** Bootstrap Icons CDN

---

## 🚀 How to Run Locally

Since this is a client-side static web application, it doesn't require compiling or dependencies. You can open and view it instantly:

### Method A: VS Code Live Server (Recommended)
1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Click the **"Go Live"** button in the bottom right corner of the status bar, or right-click [index.html](file:///d:/Python%20Projects/LTH-Lakhan%20tent%20House/index.html) and select **"Open with Live Server"**.

### Method B: VS Code Launch Configurations
1. Go to the **Run & Debug** panel (`Ctrl+Shift+D`).
2. Select **Launch in Chrome** or **Launch in Edge** from the dropdown menu.
3. Press `F5` to launch.

### Method C: Python Local Server
Run this in your terminal:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 How to Deploy to GitHub Pages

To make the app live on the internet using **GitHub Pages** with **GitHub Desktop**:

1. Open **GitHub Desktop** and add this folder as a local repository (`File` > `Add local repository...`).
2. Click **Publish repository** to upload it to your GitHub profile (make sure to **uncheck** *"Keep this code private"*).
3. Open the repository on [GitHub](https://github.com/), navigate to **Settings** > **Pages**.
4. Set the **Branch** to `master` and click **Save**.
5. Your live URL will appear at the top of the Pages screen within a couple of minutes!

---

## 📂 Project Structure

```text
LTH-Lakhan tent House/
├── .vscode/
│   └── launch.json        # VS Code launch run settings for Chrome & Edge
├── assets/                # Images, background resources, and logo media
├── index.html             # Core markup structure and SEO metadata
├── styles.css             # Layout styling, transitions, and palettes
├── app.js                 # Event handlers, translation data, and customer portal database
└── README.md              # Project overview and instructions
```

---

## 📄 License & Credits
* Developed by: **CID - An Education Hub**
* Client: **Lakhan Tent House & Sound, Hazaribagh, Jharkhand**
* All rights reserved © 2026.
