# Book Shopping Application

**Author:** Huy Tran  
**Project Proposal Date:** September 3, 2024  
**Institution:** DePauw University

## Overview

The Book Shopping Application is a web-based platform created for DePauw students to browse books, add them to a shopping cart, and review them. Users can discover a diverse selection of books, categorized by genre (e.g., fiction, non-fiction, science), get detailed information about each title, and read or contribute reviews after logging in.

## Key Features

1. **Book Browsing and Filtering:**  
   - Browse a large selection of books, each with a thumbnail, title, price, and “Add to Cart” button.  
   - Filter books by category (e.g., fiction, non-fiction, science) and potentially by ratings, price range, and availability.

2. **Shopping Cart Functionality:**  
   - Add books to a personal shopping cart.  
   - Adjust quantities, view total costs, and remove items.  
   - Proceed to checkout to complete a purchase.

3. **Review System (CRUD Operations):**  
   - Securely post, update, and delete reviews for purchased books.  
   - Read existing reviews from previous buyers to make informed purchase decisions.  
   - Session & JWT (or alternative authentication) ensures that only logged-in users can contribute or modify reviews.

4. **User Authentication & Authorization:**  
   - Users must register and log in to access features like posting reviews and maintaining a personalized shopping cart.  
   - JWT-based session management (or Firebase Authentication if integrated) secures endpoints and ensures only authorized access.

## Technology Stack

**Frontend:**  
- **React.js:** For building reusable UI components and efficient state management.  
- **HTML, CSS, JavaScript:** Core web technologies for structure, style, and behavior.  
- **Tailwind CSS (or Material UI):** For rapid, consistent, and responsive styling.  
- **Axios:** For making API requests to the backend.

**Backend:**  
- **Node.js & Express.js:** For building RESTful API endpoints, handling server-side logic, and performing CRUD operations.  
- **MySQL (or Firestore if adapted):** For structured data storage (users, books, reviews).  
- **JWT Authentication (or Firebase Auth if adapted):** For secure, session-based authentication.

## Project Structure (Proposed)

- **`/frontend`**: React application code, including components, pages, and styling.  
- **`/backend`**: Express.js server, API routes, database models, and authentication logic.  
- **`/database`**: SQL schema or scripts to set up MySQL (or configuration for Firestore if used).  
- **`/public`**: Static assets (images, icons, etc.).  
- **`/docs`**: Project documentation, proposals, and planning resources.

## Getting Started

### Prerequisites

- **Node.js & npm:** Ensure you have the latest stable versions installed.  
- **MySQL database (if using SQL):** Set up a MySQL database instance and run any provided schema scripts.  
  *Or*  
- **Firestore (if using Firebase):** Configure Firebase project and credentials as described in documentation.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/itsnothuy/DePauw_Book_Store.git
   cd DePauw_Book_Store
