# Ecomlyx - SaaS Website Builder Platform

A modern SaaS platform for building and managing websites, built with Next.js, Chakra UI, Docker, and Prisma.

## Features

- 🚀 Next.js 14 with App Router
- 🎨 Chakra UI for beautiful, accessible components
- 🐳 Docker for containerized development and deployment
- 🔐 Prisma for type-safe database access
- 🌐 WordPress integration for content management
- 📊 Analytics and monitoring
- 🔄 CI/CD with GitHub Actions
- ☁️ Google Cloud deployment ready

## Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- Git
- Google Cloud account (for deployment)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecomlyx.git
   cd ecomlyx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Start development environment**
   ```bash
   docker compose -f docker-compose.dev.yml up --build
   ```

5. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see your application.

## Development

### Project Structure

```
ecomlyx/
├── src/                    # Source code
│   ├── app/               # Next.js app router pages
│   ├── components/        # React components
│   ├── lib/              # Utility functions and services
│   └── styles/           # Global styles
├── prisma/                # Database schema and migrations
├── public/               # Static assets
└── docker/              # Docker configuration files
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Docker Development

The project includes two Docker configurations:

- `docker-compose.dev.yml` - Development environment
- `docker-compose.yml` - Production environment

To start the development environment:

```bash
docker compose -f docker-compose.dev.yml up --build
```

## Deployment

### Google Cloud Deployment

1. **Set up Google Cloud project**
   ```bash
   gcloud init
   ```

2. **Deploy to Cloud Run**
   ```bash
   ./deploy.sh
   ```

### Environment Variables

Required environment variables:

```env
DATABASE_URL=
NEXT_PUBLIC_API_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 