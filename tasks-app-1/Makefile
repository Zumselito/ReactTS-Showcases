DIST_DIR = dist
BIN = pnpm
TARGET_REPO = https://github.com/Zumselito/react-ts-tw-tasks-app-showcase.git
BRANCH = gh-pages

.PHONY: deploy build clean install

install:
	$(BIN) install

clean:
	rm -rf $(DIST_DIR)

build: clean install
	$(BIN) run build

deploy: build
	@echo "📦 Starte Deployment aus Unterordner via pnpm..."
	cd $(DIST_DIR) && \
	git init -b main && \
	git add -A && \
	git commit -m "Deploy: $$(date +'%Y-%m-%d %H:%M:%S')" && \
	git push -f $(TARGET_REPO) main:gh-pages
	@echo "🚀 Erfolgreich auf GitHub Pages veröffentlicht!"
