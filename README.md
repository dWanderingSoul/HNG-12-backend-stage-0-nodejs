# HNG-12-backend-stage-0-nodejs

## API Overview
This API returns the following details:
- Your registered email.
- The current datetime in ISO 8601 format.
- The GitHub URL of this project.

## Deployment URL
**Base URL:** `https://your-api-url.onrender.com/`

## API Endpoint
**GET /**
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
