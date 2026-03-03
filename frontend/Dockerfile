# FROM mcr.microsoft.com/devcontainers/javascript-node:22-bookworm
# FROM mcr.microsoft.com/devcontainers/base:noble AS development
FROM node:22.14-bookworm AS development
WORKDIR /workspaces/frontend
RUN apt-get update

# # --- STAGE 2: Build ---
# FROM development AS build-stage
# RUN npm run build

# # --- STAGE 3: Production ---
# FROM nginx:stable-alpine AS production
# COPY --from=build-stage /workspaces/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]