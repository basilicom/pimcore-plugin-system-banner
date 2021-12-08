.PHONY: yarn-install
yarn-install: ## install yarn dependencies
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:16.13.1-stretch sh -c "yarn install"

.PHONY: yarn-update
yarn-update: ## updates (upgrade) all yarn dependencies
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:16.13.1-stretch sh -c "yarn upgrade"

.PHONY: yarn-add
yarn-add: ## updates (upgrade) all yarn dependencies
	#docker run --rm -it --volume ${PWD}:/app --workdir /app node:16.13.1-stretch sh -c "yarn add node-sass@^6.0.0 --dev"

.PHONY: yarn-build
yarn-build: ## build frontend assets once
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:16.13.1-stretch sh -c "npm rebuild node-sass && yarn build"

.PHONY: yarn-watch
yarn-watch: ## watch frontend assets
	docker run --rm -it --volume ${PWD}:/app --workdir /app node:16.13.1-stretch sh -c "yarn watch"
