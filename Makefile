.PHONY: yarn-install
yarn-install: ## install yarn dependencies
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:25.1.0-bookworm sh -c "yarn install"
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:25.1.0-bookworm sh -c "yarn --version"

.PHONY: yarn-update
yarn-update: ## updates (upgrade) all yarn dependencies
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:25.1.0-bookworm sh -c "yarn upgrade --latest"

.PHONY: yarn-shell
yarn-shell: ## updates (upgrade) all yarn dependencies
	docker run --rm -it -v ${PWD}:/app -w /app node:25.1.0-bookworm bash

.PHONY: yarn-build
yarn-build: ## build frontend assets once
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:25.1.0-bookworm sh -c "npm rebuild node-sass && yarn build"

.PHONY: yarn-build-studio
yarn-build-studio: ## build studio UI assets once
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:25.1.0-bookworm sh -c "yarn build-studio"

.PHONY: yarn-build-all
yarn-build-all: ## build classic UI and studio UI assets
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:25.1.0-bookworm sh -c "yarn build-all"

.PHONY: yarn-watch
yarn-watch: ## watch frontend assets
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:25.1.0-bookworm sh -c "yarn watch"
