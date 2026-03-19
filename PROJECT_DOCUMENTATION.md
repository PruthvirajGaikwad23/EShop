# EShop – Dynamic E-Commerce Storefront (React SPA)

---

## 1. Project Name / Title

**EShop – Dynamic E-Commerce Storefront**

A responsive, multi-page Single-Page Application (SPA) that simulates a real-world online retail store, built entirely with modern front-end technologies. The project demonstrates end-to-end front-end engineering skills, from component architecture and client-side routing to live API integration and form validation.

---

## 2. Problem Statement

Traditional e-commerce platforms are often monolithic and difficult to maintain. Small retailers and students learning web development need a lightweight, component-driven storefront that is:

- Easy to navigate across multiple product categories and individual product detail pages.
- Capable of consuming live REST APIs to display up-to-date product and category data without a custom backend.
- Equipped with validated user authentication flows (registration and login) to simulate real-world user management.
- Fully responsive so that shoppers on any device (desktop, tablet, mobile) get a consistent experience.

**EShop** solves these problems by providing a React-based front-end prototype that separates concerns cleanly into reusable components and pages, integrates with public product APIs, and enforces strict client-side form validation — forming a solid foundation for a production-grade e-commerce application.

---

## 3. Tech Stack

### Core Framework
| Technology | Version | Role |
|---|---|---|
| **React** | 19.x | UI library – component-based view layer |
| **React DOM** | 19.x | Renders the React component tree into the browser DOM |

### Routing
| Technology | Version | Role |
|---|---|---|
| **React Router DOM** | 7.x | Declarative client-side routing, `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, `useParams` |

### HTTP & API Integration
| Technology | Version | Role |
|---|---|---|
| **Axios** | 1.x | Promise-based HTTP client; used inside `useEffect` hooks to fetch product and category data from REST APIs |

### Form Management & Validation
| Technology | Version | Role |
|---|---|---|
| **Formik** | 2.x | Form state management – tracks field values, touched state, and submission |
| **Yup** | 1.x | Schema-based validation – validates email format, 10-digit mobile numbers, minimum password length |

### Styling
| Technology | Version | Role |
|---|---|---|
| **Bootstrap** | 4.6 | Responsive grid system, pre-built components (Navbar, Cards, Buttons, Forms) |
| **CSS Modules** | built-in CRA | Scoped component-level styles for Login and Register pages |
| **Google Fonts (Oswald)** | – | Custom typography applied globally via `@import` in `index.css` |

### Tooling & Testing
| Technology | Role |
|---|---|
| **Create React App (react-scripts)** | Zero-config build toolchain (Webpack + Babel under the hood) |
| **@testing-library/react** | Component-level unit/integration testing |
| **@testing-library/jest-dom** | Extended Jest matchers for DOM assertions |
| **@testing-library/user-event** | Simulates realistic user interactions in tests |

### External APIs Consumed
| API | Endpoint | Data |
|---|---|---|
| **Platzi Fake Store API** | `https://api.escuelajs.co/api/v1/products` | Product listings |
| **Platzi Fake Store API** | `https://api.escuelajs.co/api/v1/categories` | Product categories |
| **Fake Store API** | `https://fakestoreapi.com/products/:id` | Individual product details |

---

## 4. Key Features

### 4.1 – Product Catalogue with Live API Integration
Products and categories are fetched in real-time from public REST APIs using **Axios** inside React's `useEffect` hook. The product grid renders dynamically: each product card displays the product image, title, price, and a navigation link to the detail page. Categories are listed as individual clickable cards populated from the categories endpoint. This demonstrates the complete data-flow cycle: API → Axios → `useState` → JSX rendering.

### 4.2 – Client-Side Routing with React Router DOM
The application uses **React Router DOM v7** to implement a fully navigable multi-page experience without any page reloads:
- `/` → Home page (Hero banner + Category grid)
- `/products` → Full product listing
- `/products/:id` → Dynamic product detail page (route parameter extracted with `useParams`)
- `/login`, `/register`, `/about`, `/contact` → Independent page routes
- `*` → Custom 404 error page (catch-all route)

All navigation uses the `<Link>` component, ensuring smooth SPA transitions.

### 4.3 – Form Validation with Formik and Yup
Both the **Login** and **Register** pages implement robust client-side form validation:

- **Login:** email (valid format, required) + password (min 6 characters, required). The submit button is disabled until all fields pass validation.
- **Register:** first name (required), email (valid format, required), mobile (exactly 10 numeric digits, validated with a regex via Yup's `.matches()`), password (min 6 characters, required).

Formik manages field state and touched/error tracking, while Yup provides the declarative validation schema. This pairing is an industry-standard pattern for scalable React form handling.

### 4.4 – Responsive, Component-Driven UI Architecture
The UI is built with a **component hierarchy** that promotes reusability and separation of concerns:
- **Presentational components** (`Product`, `Category`, `Header`) handle only rendering.
- **Container/page components** (`HomePage`, `ProductPage`, `ProductDetailsPage`) compose presentational components and manage data-fetching logic.
- **Bootstrap 4.6** provides a 12-column responsive grid, ensuring the layout adapts across screen sizes.
- **CSS Modules** are used for page-specific scoped styles, avoiding class-name collisions.

---

## 5. Application Architecture

```
src/
├── App.js                  ← Root component; defines all routes
├── index.js                ← Entry point; mounts React app, imports Bootstrap
├── index.css               ← Global styles (Oswald font, body background, .wrapper card)
│
├── components/             ← Reusable, stateless/presentational components
│   ├── Navbar/             ← Site-wide navigation bar
│   ├── Header/             ← Hero jumbotron banner
│   ├── Categories/         ← Category grid + individual Category card
│   ├── ProductList/        ← Product grid + individual Product card
│   └── ProductDetail/      ← Full-page product detail view
│
└── pages/                  ← Route-level page containers
    ├── HomePage/           ← Navbar + Header + Categories
    ├── ProductPage/        ← Navbar + Header + ProductList
    ├── ProductDetailsPage/ ← Navbar + ProductDetail
    ├── LoginPage/          ← Formik login form
    ├── RegisterPage/       ← Formik registration form
    ├── AboutPage/          ← Static informational page
    ├── ContactPage/        ← Static contact page
    └── ErrorPage/          ← 404 catch-all
```

---

## 6. Key Learnings

| Concept | How It Was Applied |
|---|---|
| **React Functional Components & Hooks** | All components are function-based; `useState` manages local state, `useEffect` handles side effects (API calls), `useParams` reads URL parameters |
| **Component Composition** | Pages are built by composing smaller components (e.g., `HomePage` = `Navbar` + `Header` + `Categories`) |
| **React Router (SPA Navigation)** | Declarative routing with nested `<Routes>`, dynamic segments (`:id`), and a catch-all 404 route |
| **REST API Consumption with Axios** | Async data fetching inside `useEffect`, handling responses with `.then()` and errors with `.catch()` |
| **Controlled Forms with Formik** | Form values, error messages, and touched states are fully managed by Formik rather than raw DOM events |
| **Schema Validation with Yup** | Declarative validation rules (type, format, length, regex) decoupled from component logic |
| **CSS Modules** | Scoped, collision-free styling for individual page components |
| **Bootstrap Grid System** | Responsive multi-column layout using `container`, `row`, and `col-*` classes |
| **JavaScript Promises & Async Patterns** | Chaining `.then()` / `.catch()` on Axios requests to handle asynchronous data flows |
| **Separation of Concerns** | Clear distinction between presentational components, page containers, and routing logic |

---

## 7. Scope & Current Status

| Feature | Status |
|---|---|
| Product listing (live API) | ✅ Implemented |
| Category listing (live API) | ✅ Implemented |
| Product detail page | ✅ Implemented |
| Multi-page routing | ✅ Implemented |
| Login form with validation | ✅ Implemented |
| Register form with validation | ✅ Implemented |
| Responsive layout | ✅ Implemented |
| Custom 404 error page | ✅ Implemented |
| Shopping cart functionality | 🔲 Planned (UI button exists) |
| Backend authentication | 🔲 Planned |
| Payment integration | 🔲 Planned |

> **Note:** This project is a front-end prototype developed during the training phase. It demonstrates core React and front-end development competencies and serves as a foundation for future full-stack enhancements.

---

*Developed during Deloitte Training Phase — Internship Project | 2025*
