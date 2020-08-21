.PHONY: yarn-install
yarn-install: ## install npm dependencies
	docker run --rm --volume ${PWD}:/app --workdir /app node:alpine sh -c "yarn install --ignore-scripts"

.PHONY: yarn-build
yarn-build: ## build frontend assets once
	docker run --rm --volume ${PWD}:/app --workdir /app node:alpine sh -c "yarn encore dev"

.PHONY: yarn-watch
yarn-watch: ## build frontend assets once
	docker run --rm --volume ${PWD}:/app --workdir /app node:alpine sh -c "yarn encore dev --watch"
