FROM node:22-bookworm-slim
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /workspaces/ReactTS-Showcases
COPY package.json pnpm-workspace.yam[l] pnpm-lock.yam[l] ./
COPY **/package.json ./
# RUN pnpm install --frozen-lockfile
COPY . .

WORKDIR /workspaces/ReactTS-Showcases/tasks-app-1

CMD ["pnpm", "dev"]