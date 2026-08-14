# Google Antigravity Build Instructions: "When Rocks Cry Out" E-Commerce Site

## 1. Project Context & Objectives
You are assisting in the development of a single-title e-commerce website for the book **"When Rocks Cry Out"** by Horace Butler. 

The local directory already contains:
- `firebase.js` (Project credentials and initialization)
- `wrco.png` (The target UI/UX design layout reference)

Please analyze `wrco.png` as the primary design benchmark. The layout, typography, and component structure must heavily mirror this visual reference while strictly adhering to Google Material 3 (M3) design principles.

## 2. Tech Stack & Architecture
* **Frontend:** React.js, Vanilla JavaScript, Google Material 3 (M3) Design Framework.
* **Backend Infrastructure (Google Firebase):** 
  * Firestore (for storing order history, review data, and dynamic content)
  * Firebase Storage (for high-res book covers and assets)
  * Firebase Hosting (deployment target)
  * Firebase Authentication (for admin login or customer accounts if needed)
  * Firebase Functions (serverless backend for payment processing)
* **Payment Gateways:** Stripe (Primary), Apple Pay, Google Pay (via Stripe Elements/Payment Request Button).

## 3. Book Content (Sourced from Amazon/Web Research)
Populate the site with the following verified metadata and copy.

**Title:** When Rocks Cry Out
**Author:** Horace Butler
**Tagline:** The #1 Dallas Morning News regional nonfiction bestseller now throws open its earth-shattering secrets for the entire world to see!

**Synopsis / Description:**
Gripping from its opening page, *When Rocks Cry Out* pulls you into a real-life deadly chase that uncovers the 'Forbidden Histories' of a 16th-century friar who followed Columbus into the Americas. Uncovered ancient maps and writings show the real ruins of four of the Seven Ancient Wonders of the World that were thought to have vanished from the earth. The secrets hidden within those Wonders explode the very foundations of what we thought we knew about the world and where we had come from.

Listed by the Dallas Community Colleges as a "must read," this book ties together riddles from the Old Testament with ruins of abandoned cities that are thousands of years old...and thousands of miles away from where we thought those cities would be. Often reading like a page-turning novel, this could be one of the most important books written in the last 500 years. From the discovery of Egypt's lost ancient capital, Memphis, to a stunning hidden burial city built by the Pharaohs, to the secret ruins of King David's famed city, this book moves past recent promises about 'codes' and brings you to the real-life secret that was the explosive reason for the creation of the codes.

### Top 10 Reviews to Feature
Integrate these reader reviews into an M3-styled carousel or masonry grid:

1. **5/5 Stars** - "Mr. Butler's work has been a revelation for me. His 12+ years of research have uncovered fresh perspectives on biblical events, which challenge traditional interpretations. Exceptional depth of research."
2. **5/5 Stars** - "This book challenges conventional views of history by suggesting the 'real' locations were in the Americas. It provides sources for verification and takes readers on a journey to reclaim history."
3. **5/5 Stars** - "A must-read. This book has left a lasting impact on my perspective of world history. I realized my understanding needed to be reoriented. Horace Butler has shed light on hidden truths."
4. **5/5 Stars** - "The research presented in this book is exceptional. It offers new insights into our history and the crucial role the Americas played. The discoveries remain unrefuted to date."
5. **4/5 Stars** - "This book sparked intriguing theories that cannot be dismissed. It challenges readers to question everything they thought they knew about geography."
6. **5/5 Stars** - "Serves as therapy, helping readers rid themselves of colonialist thinking and reconnect with their ancestors. It delves deep into Central American history."
7. **5/5 Stars** - "Offers physical proof and documented histories from around the world, making it a significant discovery in my lifetime. Thank you, Horace Butler!"
8. **5/5 Stars** - "This book stands out for its unique narrative style and wealth of information. It has had a profound impact on me, inspiring me in ways I never thought possible."
9. **5/5 Stars** - "An eye-opener, revealing that history can be hidden. Readers are encouraged to take notes as they delve into this captivating book, exploring America's lesser-known past."
10. **4/5 Stars** - "Often reads like a page-turning novel. It ties together riddles from the Old Testament with ruins of abandoned cities. A thought-provoking dive into hidden histories."

## 4. Development Workflow & Implementation Steps

### Step 1: UI/UX & Component Scaffolding
* Parse `wrco.png` to define the DOM structure, color palette, and M3 elevation models.
* Create modular React components (e.g., `HeroSection`, `Synopsis`, `ReviewCarousel`, `CheckoutModal`).
* Apply Google Material 3 web components for buttons, cards, typography, and form inputs.

### Step 2: Firebase Integration
* Import the existing `firebase.js` configuration.
* Set up Firestore listeners for dynamic stock updates or review fetching.
* Prepare Firebase Functions boilerplate for the payment intents.

### Step 3: Checkout & Payment Gateway Integration
* Integrate `@stripe/react-stripe-js` and `@stripe/stripe-js`.
* Implement the Stripe Payment Request Button to natively support Apple Pay and Google Pay.
* Create a Firebase HTTP Function to securely generate Stripe Client Secrets for transaction processing.

### Step 4: Refinement
* Ensure fully responsive behavior (Mobile-first, scaling up to Desktop).
* Enforce senior-level code standards: robust error handling on network requests, React best practices (hooks, memoization where necessary), and clean separation of concerns between the UI and Firebase service layers.
