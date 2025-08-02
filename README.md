# RK

RK is a project for [describe your project purpose here].

## Features
- Modern frontend powered by Vite
- Tailwind CSS for rapid UI development
- Organized source code in `src/`
- Static assets in `public/img/`

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Project
To start the development server:
```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure
```
RK/
├── public/
│   └── img/           # Image assets
├── src/
│   ├── App.jsx        # Main App component
│   ├── Components/    # Reusable components
│   ├── data/          # Data files
│   └── assets/        # Other assets
├── index.html         # Main HTML file
├── package.json       # Project metadata and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## Scripts
- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build

## License
[Specify your license here]

## Author
Rachit Gupta (Website created by Rachit Gupta)

# Hero Section Component Logic

The `HeroSection` component is a visually engaging, interactive slider for the homepage. Here are the main logics and features used:

- **Image Slider Logic:**
  - Maintains the current slide index using React's `useState`.
  - Automatically transitions between images every 3 seconds using `useEffect` and `setInterval`.
  - Manual navigation is enabled via left/right buttons (`FaChevronLeft`, `FaChevronRight` from `react-icons`).
  - Supports swipe gestures on touch devices (mobile/tablet) using `onTouchStart`, `onTouchMove`, and `onTouchEnd` handlers.

- **Animated Typing Text:**
  - Uses the `TypeAnimation` component from `react-type-animation` to display animated, cycling text messages over the slider.

- **Responsive Design:**
  - The slider and navigation buttons are styled with Tailwind CSS for responsiveness and modern look.
  - Navigation buttons are hidden on mobile (`md:flex`).

- **Overlay and Styling:**
  - A semi-transparent overlay with blur effect (`backdrop-blur-sm`) is used for text readability over images.
  - Text and buttons are styled for clarity and emphasis.

- **Accessibility:**
  - Navigation buttons are large and easy to interact with.
  - Images have `alt` attributes for better accessibility.

# Navbar Component Logic

The `Navbar` component in this project is a responsive navigation bar built with React and Tailwind CSS. Here are the main logics and features used:

- **Responsive Design:**
  - Uses Tailwind CSS utility classes to show/hide navigation links based on screen size (`md:flex` for desktop, `md:hidden` for mobile).
  - Hamburger menu icon appears on mobile devices, toggling the mobile menu.

- **State Management:**
  - Utilizes React's `useState` hook to manage the open/close state of the mobile menu (`menuOpen`).

- **Navigation:**
  - Uses `react-router-dom`'s `Link` component for client-side routing.
  - Navigation links are mapped from an array for both desktop and mobile views, ensuring consistency.

- **Logo and Branding:**
  - Displays a logo image and styled brand name using Tailwind classes.

- **Animated Underline Effect:**
  - Each navigation link has a hover effect with an animated underline using Tailwind and custom classes.

- **Mobile Menu Logic:**
  - When the hamburger icon is clicked, the mobile menu appears.
  - Clicking a link in the mobile menu closes the menu (`handleClick`).

- **Accessibility:**
  - The hamburger button uses `focus:outline-none` for better accessibility.

# Service Section Component Logic

The `ServiceSection` component displays a grid of service cards with smooth animations and modern styling. Here are the main logics and features used:

- **Service Data Structure:**
  - Services are defined in an array of objects, each containing a name, description, and image path.

- **Animated Cards:**
  - Uses the `framer-motion` library to animate service cards as they appear in the viewport.
  - Each card fades in and slides up with a staggered delay for a dynamic effect.
  - Animation variants are defined for hidden and visible states, with spring transitions.

- **Responsive Grid Layout:**
  - Cards are arranged in a responsive grid using Tailwind CSS (`md:grid-cols-4`, `sm:grid-cols-2`, `grid-cols-1`).
  - Ensures optimal display on desktop, tablet, and mobile devices.

- **Card Design:**
  - Each card features a rounded border, shadow, and hover effect for interactivity.
  - Service image is displayed at the top, followed by the name and description.

- **Accessibility:**
  - Images have descriptive `alt` attributes.
  - Cards are large and easy to interact with.

# Product Section Component Logic

The `ProductSection` component showcases a selection of products in an animated, responsive grid. Here are the main logics and features used:

- **Product Data Integration:**
  - Imports product data from a separate file (`../data/product`).
  - Displays up to 8 products on the main section, each with image, name, and description.

- **Animated Product Cards:**
  - Uses `framer-motion` for smooth entrance animations as cards come into view.
  - Each card fades in and slides down with a staggered delay for a dynamic effect.

- **Responsive Grid Layout:**
  - Product cards are arranged in a responsive grid using Tailwind CSS (`grid-cols-1`, `sm:grid-cols-2`, `md:grid-cols-3`, `lg:grid-cols-4`).
  - Ensures optimal display across all device sizes.

- **Card Design:**
  - Each card features a rounded border, shadow, and hover effect for interactivity.
  - Product image is displayed at the top, followed by name and description.

- **Navigation:**
  - Clicking a product card navigates to its detail page using React Router (`/product/:id`).
  - A "View More" button at the bottom links to the full products page.

- **Accessibility:**
  - Images have descriptive `alt` attributes.
  - Cards and buttons are large and easy to interact with.

# Stats Section Component Logic

The `StatsSection` component displays animated statistics with a visually appealing background. Here are the main logics and features used:

- **Stats Data Structure:**
  - Statistics are defined in an array of objects, each with a label and value (e.g., Projects, Clients, Awards, Years of Experience).

- **Animated Counting:**
  - Uses the `react-countup` library to animate numbers counting up when the section comes into view.
  - The `useInView` hook from `react-intersection-observer` triggers the animation only once when the section is visible.

- **Background and Overlay:**
  - Section uses a fixed, centered background image with a blackish-orange gradient overlay for readability and style.

- **Responsive Grid Layout:**
  - Stats are displayed in a responsive grid (`grid-cols-2`, `sm:grid-cols-4`) for optimal viewing on all devices.

- **Icon Integration:**
  - Each stat value is followed by a plus icon (`FaPlus` from `react-icons`) for emphasis.

  - **Accessibility:**
  - Images and icons are styled for clarity.
  - Text is large and easy to read.

# FAQ Section Component Logic

The `FAQSection` component provides an interactive FAQ and service request form. Here are the main logics and features used:

- **FAQ Data Structure:**
  - Frequently asked questions are stored in an array of objects, each with a question and answer.

- **Accordion Logic:**
  - Uses React's `useState` to track which FAQ is open.
  - Clicking a question toggles its answer visibility (accordion style).
  - Only one answer is open at a time for clarity.

- **Responsive Layout:**
  - The section is split into two columns on desktop (FAQ left, form right) and stacks on mobile for better usability.

- **Google Form Integration:**
  - Embeds a custom `GoogleForm` component for service requests or queries.
  - Users can fill out the form directly from the FAQ section.

- **Accessibility:**
  - Questions are buttons for keyboard accessibility.
  - Answers use `whitespace-pre-line` for readable formatting.

# LocationMap Component Logic

The `LocationMap` component embeds a Google Map to display the business location. Here are the main logics and features used:

- **Google Maps Embed:**
  - Uses an `<iframe>` to embed a Google Map with the business location.
  - The map is fully responsive, filling the width and height of its container.
  - The `src` attribute contains the Google Maps embed URL with location coordinates.

- **Styling and Layout:**
  - The map container uses Tailwind CSS for width and height (`w-full h-[400px]`).
  - The iframe has no border for a clean look (`className="border-0"`).

- **Performance and Security:**
  - The iframe uses `loading="lazy"` for better performance.
  - The `referrerPolicy` is set to `no-referrer-when-downgrade` for privacy.

  - **Accessibility:**
  - The iframe includes a descriptive `title` attribute for screen readers.

# Footer Component Logic

The `Footer` component provides a comprehensive footer for the website with multiple sections and contact details. Here are the main logics and features used:

- **Multi-Column Layout:**
  - Uses a responsive grid to display four columns: Air System Product, Quick Links, About Us, and Contact/Social Info.
  - Adapts layout for desktop, tablet, and mobile using Tailwind CSS grid classes.

- **Contact and Social Links:**
  - Displays email, phone number, and social media icons (`FaInstagram`, `FaFacebookF`, `FaYoutube` from `react-icons`).
  - Social icons are styled and grouped for easy access.

- **Branding:**
  - Shows the company logo and credits the website creator (Webnics).

- **Popular Categories:**
  - Includes a horizontal list of popular product categories for SEO and user navigation.

- **Location Info:**
  - Shows the business address in a highlighted bar for quick reference.

- **Copyright:**
  - Displays copyright notice and year.

- **Accessibility:**
  - All icons and images have descriptive attributes.
  - Text is clear and readable across devices.

# AllProducts Component Logic

The `AllProducts` component displays all available products in a responsive, animated grid. Key logics and features:

- **Product Data:**
  - Imports product data from a central file and maps over it to render each product card.

- **Animated Cards:**
  - Uses `framer-motion` for fade-in and slide-up effects as cards enter the viewport.

- **Responsive Grid:**
  - Adapts layout for mobile, tablet, and desktop using Tailwind CSS grid classes.

- **Navigation:**
  - Each card links to its product detail page (`/product/:id`).

- **Card Design:**
  - Cards feature images, name, short description, and a "View Details" prompt.

- **Accessibility:**
  - Images have `alt` attributes, cards are keyboard-accessible.

# ContactPage & GoogleForm Component Logic

The `ContactPage` component provides company info and a contact form. Key logics and features:

- **Company Info:**
  - Shows business name, description, phone, email, address, and hours in a styled card.

- **GoogleForm Integration:**
  - Embeds a custom form that posts to Google Forms using real entry IDs.
  - Handles submission, shows success message, and resets form.

- **Responsive Layout:**
  - Splits into two columns on desktop, stacks on mobile.

- **Accessibility:**
  - All fields are labeled, form is keyboard-accessible.

# ProductDetail Component Logic

The `ProductDetail` component shows detailed info for a selected product. Key logics and features:

- **Dynamic Routing:**
  - Uses React Router's `useParams` to get product ID from URL.

- **Image Gallery:**
  - Main image and clickable thumbnails for product images.

- **Description & Points:**
  - Renders multiple paragraphs and bullet points for product features.

- **Accessibility:**
  - Images have `alt` attributes, layout is responsive.

# Layout Component Logic

The `Layout` component wraps all pages with a consistent Navbar and Footer. Key logics and features:

- **Outlet Usage:**
  - Uses React Router's `Outlet` to render nested routes between Navbar and Footer.

- **Consistent UI:**
  - Ensures all pages have navigation and footer.

# ServicePage Component Logic

The `ServicePage` component details company services with animated sections. Key logics and features:

- **Animated Images:**
  - Uses `framer-motion` for left/right slide-in effects on images.

- **Service Sections:**
  - Multiple sections for maintenance, fabrication, repair, and upgrades, each with image and description.

- **Responsive Layout:**
  - Alternates image/text alignment for visual interest.

- **Accessibility:**
  - Images have `alt` attributes, text is readable.

# MainSection Component Logic

The `MainSection` component provides routing for product listing and detail pages. Key logics and features:

- **Routing:**
  - Uses React Router to switch between product grid and detail view.

- **Component Structure:**
  - Keeps product-related routes organized and isolated.
