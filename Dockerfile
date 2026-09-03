# Build stage — produces the static export in /app/out
FROM node:22.22.0-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage — plain nginx serving the static export (no Node runtime needed)
FROM nginx:alpine AS runner

COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.static.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
