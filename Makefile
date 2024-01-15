.PHONY: yarn-install
yarn-install: ## install yarn dependencies
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:20.11.0-bookworm sh -c "yarn install"

.PHONY: yarn-update
yarn-update: ## updates (upgrade) all yarn dependencies
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:20.11.0-bookworm sh -c "yarn upgrade --latest"

.PHONY: yarn-add
yarn-add: ## updates (upgrade) all yarn dependencies
	#docker run --rm -it --volume ${PWD}:/app --workdir /app node:20.11.0-bookworm sh -c "yarn add node-sass@^7.0.0 --dev"

.PHONY: yarn-build
yarn-build: ## build frontend assets once
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:20.11.0-bookworm sh -c "npm rebuild node-sass && yarn build"

.PHONY: yarn-watch
yarn-watch: ## watch frontend assets
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:20.11.0-bookworm sh -c "yarn watch"
