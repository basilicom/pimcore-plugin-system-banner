.PHONY: yarn-install
yarn-install: ## install npm dependencies
	docker run --rm --volume ${PWD}:/app --workdir /app node:14.13.1-stretch sh -c "yarn install"

.PHONY: yarn-build
yarn-build: ## build frontend assets once
	docker run --rm --volume ${PWD}:/app --workdir /app node:14.13.1-stretch sh -c "yarn build"

.PHONY: yarn-watch
yarn-watch: ## build frontend assets once
	docker run --rm --volume ${PWD}:/app --workdir /app node:14.13.1-stretch sh -c "yarn watch"
