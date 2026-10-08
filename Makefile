.PHONY: yarn-install
yarn-install: ## install yarn dependencies
	docker run --rm -it --env COREPACK_ENABLE_DOWNLOAD_PROMPT=0 --volume ${PWD}:/app --workdir /app node:24.21.0-bookworm sh -c "corepack enable && yarn install"
	docker run --rm -it --env COREPACK_ENABLE_DOWNLOAD_PROMPT=0 --volume ${PWD}:/app --workdir /app node:24.21.0-bookworm sh -c "corepack enable && yarn --version"

.PHONY: yarn-update
yarn-update: ## updates (upgrade) all yarn dependencies
	docker run --rm -it --env COREPACK_ENABLE_DOWNLOAD_PROMPT=0 --volume ${PWD}:/app --workdir /app node:24.21.0-bookworm sh -c "corepack enable && yarn upgrade-interactive"

.PHONY: yarn-shell
yarn-shell: ## updates (upgrade) all yarn dependencies
	docker run --rm -it --env COREPACK_ENABLE_DOWNLOAD_PROMPT=0 -v ${PWD}:/app -w /app node:24.21.0-bookworm sh -c "corepack enable && exec bash"

.PHONY: yarn-build
yarn-build: ## build frontend assets once
	docker run --rm -it --env COREPACK_ENABLE_DOWNLOAD_PROMPT=0 --volume ${PWD}:/app --workdir /app node:24.21.0-bookworm sh -c "corepack enable && yarn build"

.PHONY: yarn-build-studio
yarn-build-studio: ## build studio UI assets once
	docker run --rm -it --env COREPACK_ENABLE_DOWNLOAD_PROMPT=0 --volume ${PWD}:/app --workdir /app node:24.21.0-bookworm sh -c "corepack enable && yarn build-studio"

.PHONY: yarn-build-all
yarn-build-all: ## build classic UI and studio UI assets
	docker run --rm -it --env COREPACK_ENABLE_DOWNLOAD_PROMPT=0 --volume ${PWD}:/app --workdir /app node:24.21.0-bookworm sh -c "corepack enable && yarn build-all"

.PHONY: yarn-watch
yarn-watch: ## watch frontend assets
	docker run --rm -it --env COREPACK_ENABLE_DOWNLOAD_PROMPT=0 --volume ${PWD}:/app --workdir /app node:24.21.0-bookworm sh -c "corepack enable && yarn watch"
