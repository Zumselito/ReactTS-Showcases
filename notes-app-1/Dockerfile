FROM node:22-bookworm-slim
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /workspaces/ReactTS-Showcases
COPY package.json pnpm-workspace.yam[l] pnpm-lock.yam[l] ./
COPY **/package.json ./
COPY . .

WORKDIR /workspaces/ReactTS-Showcases/notes-app-1

CMD ["pnpm", "dev"]