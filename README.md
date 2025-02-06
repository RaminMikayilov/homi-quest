# 🏡 Homi Quest

Homi Quest is a platform inspired by Airbnb, designed to help users find, book, and manage rentals. It provides a seamless experience for both renters and property owners, offering features like property listings, bookings, reviews, and more.

## ✨ Features

- **Home Page**: Discover and explore available rentals.
- **Favorites**: Save your favorite rentals for easy access.
- **Bookings**: Manage your upcoming and past bookings.
- **Reviews**: Read and write reviews for rentals.
- **Reservations**: View and manage your reservations.
- **Create Rental**: List your property for rent.
- **My Rentals**: Manage your listed properties.
- **Admin**: Access admin-specific features and controls.
- **Profile**: Manage your personal profile and settings.

## 🛠️ Technologies Used

- **Frontend**:

  - [Next.js](https://nextjs.org/) (v14.2.1)
  - [React](https://reactjs.org/) (v18)
  - [Tailwind CSS](https://tailwindcss.com/) (v3.4.1)
  - [Radix UI](https://www.radix-ui.com/) for accessible UI components
  - [Recharts](https://recharts.org/) for data visualization
  - [Leaflet](https://leafletjs.com/) for maps
  - [React Icons](https://react-icons.github.io/react-icons/) for icons
  - [Zustand](https://zustand-demo.pmnd.rs/) for state management

- **Backend**:

  - [Prisma](https://www.prisma.io/) (v6.1.0) for database ORM
  - [Supabase](https://supabase.io/) (v2.47.10) for backend services
  - [Stripe](https://stripe.com/) (v17.6.0) for payment processing

- **Authentication**:

  - [Clerk](https://clerk.dev/) (v5.0.1) for user authentication

- **Other Libraries**:
  - [Axios](https://axios-http.com/) (v1.7.9) for HTTP requests
  - [Zod](https://zod.dev/) (v3.24.1) for schema validation
  - [Date-fns](https://date-fns.org/) (v3.6.0) for date manipulation
  - [React Share](https://github.com/nygardk/react-share) (v5.1.2) for social sharing
  - [World Countries](https://github.com/mledoze/countries) (v5.0.0) for country data

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v7 or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/raminmikayilov/homi-quest.git
   cd homi-quest
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the required variables.

4. **Generate Prisma client**:

   ```bash
   npx prisma generate
   ```

5. **Run the development server**:

   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Visit `http://localhost:3000` to view the application.

## 📜 Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Generates the Prisma client and builds the application for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Runs ESLint to check for code issues.

## 🌍 Routes

The application includes the following routes:

- **Home**: `/`
- **Favorites**: `/favorites`
- **Bookings**: `/bookings`
- **Reviews**: `/reviews`
- **Reservations**: `/reservations`
- **Create Rental**: `/rentals/create`
- **My Rentals**: `/rentals`
- **Admin**: `/admin`
- **Profile**: `/profile`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'feat: add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- Inspired by Airbnb.
