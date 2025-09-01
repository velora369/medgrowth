# Overview

MedGrowth is a modern medical marketing website built to showcase digital marketing services specifically for healthcare professionals. The application is a single-page landing site designed to convert medical practitioners into clients by highlighting personalized digital marketing strategies, case studies, and comprehensive service offerings. The site emphasizes ethical medical marketing practices and features a clean, professional design that builds trust and authority in the healthcare space.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application uses a **React-based SPA (Single Page Application)** architecture with the following key design decisions:

- **Component Framework**: React 18 with TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS with custom CSS variables for brand consistency and shadcn/ui component library for pre-built, accessible UI components
- **Routing**: Wouter for lightweight client-side routing (single page application with smooth scrolling navigation)
- **State Management**: React Query (@tanstack/react-query) for server state management and form handling
- **Build Tool**: Vite for fast development and optimized production builds

The frontend follows a **component-based architecture** with clear separation of concerns:
- Page components (`/pages`) - Top-level route components
- UI components (`/components/ui`) - Reusable shadcn/ui components
- Feature components (`/components`) - Business logic components for different sections
- Hooks (`/hooks`) - Custom React hooks for shared logic
- Utilities (`/lib`) - Helper functions and configurations

## Backend Architecture

The backend uses **Express.js with TypeScript** in a minimalist API design:

- **Server Framework**: Express.js for handling HTTP requests
- **API Design**: RESTful endpoints with focused contact form handling
- **Validation**: Zod schemas for runtime type checking and validation
- **Development Setup**: Integrated with Vite for seamless development experience

The backend is designed as a **thin API layer** primarily handling:
- Contact form submissions with validation
- Future database operations preparation
- Static file serving in production

## Data Storage Strategy

Currently implements **in-memory storage** with preparation for database integration:

- **Storage Interface**: Abstract `IStorage` interface allowing easy swapping of storage implementations
- **Current Implementation**: `MemStorage` class for development and testing
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema for future data persistence
- **Schema Definition**: Centralized in `/shared/schema.ts` for type safety across frontend and backend

## Design System and Styling

**Tailwind CSS-first approach** with custom design tokens:

- **Component Library**: shadcn/ui for consistent, accessible components
- **Brand Colors**: Custom CSS variables for MedGrowth brand colors (cyan, dark blue, light backgrounds)
- **Typography**: Inter font family for modern, professional appearance
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Dark Mode**: Prepared infrastructure (not currently implemented)

## Form Handling and Validation

**Client and server-side validation** approach:

- **Frontend Validation**: React Hook Form with Zod resolvers for immediate user feedback
- **Backend Validation**: Zod schemas for server-side validation and API safety
- **Error Handling**: Toast notifications for user feedback
- **Integration**: WhatsApp integration for lead conversion

## Development and Build Process

**Modern development toolchain**:

- **Development**: Vite dev server with Hot Module Replacement
- **Type Checking**: TypeScript with strict configuration
- **Building**: Vite for frontend, esbuild for backend bundling
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer
- **Code Quality**: ESM modules throughout the application

# External Dependencies

## Core Framework Dependencies
- **React 18** - Frontend framework with hooks and modern patterns
- **Express.js** - Backend web framework for API endpoints
- **TypeScript** - Type safety across the entire application
- **Vite** - Build tool and development server

## UI and Styling Libraries
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui + Radix UI** - Accessible component library built on Radix primitives
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** - Utility for creating variant-based component APIs

## Database and Validation
- **Drizzle ORM** - Type-safe database ORM with PostgreSQL support
- **@neondatabase/serverless** - Serverless PostgreSQL database driver
- **Zod** - Schema validation for runtime type checking
- **drizzle-zod** - Integration between Drizzle and Zod for schema validation

## State Management and Data Fetching
- **TanStack React Query** - Server state management and caching
- **React Hook Form** - Form state management with validation
- **@hookform/resolvers** - Integration between React Hook Form and validation libraries

## Routing and Navigation
- **wouter** - Lightweight routing library for single-page applications

## External Services Integration
- **WhatsApp Business API** - Lead conversion through direct messaging (phone: 61996301406)
- **Font Awesome** - Additional icon support for specific design elements
- **Google Fonts (Inter)** - Typography hosting and optimization

## Development and Build Tools
- **PostCSS** - CSS processing and optimization
- **esbuild** - Fast JavaScript bundler for backend production builds
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development enhancements

## Testing and Quality Assurance
- **TypeScript compiler** - Static type checking and validation
- Built-in form validation with immediate user feedback
- Responsive design testing across device breakpoints