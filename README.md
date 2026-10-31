# Yehia's Career Path

**Student:** [Your Full Name]

## Project Description

Yehia's Career Path is a Next.js 16 website created for Assignment 1 of the TechTalks Ultimate Next.js 16 Course.

The website helps Yehia organize his career goals, follow a three-stage plan, explore job opportunities, and track his applications.

## Technologies

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Git and GitHub

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Routing Questions

### 1. Why did you use `await` when reading `params`?

In Next.js 16, the route parameters are provided as a Promise. I used `await params` to get the actual ID value before searching for the matching opportunity.

### 2. Why is the route ID a string?

Values read from URL segments are strings. Keeping the opportunity IDs as strings allows me to compare the route ID with the IDs in my sample data directly.

### 3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The dashboard layout contains the navigation shared by the dashboard pages. The overview page displays the total number of applications and a progress message. The applications page displays the list of applications and their statuses.

## GitHub Branch

`assignment-1-routing`