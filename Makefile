.PHONY: npm-install
npm-install:
	docker run --rm --interactive --tty --volume ${PWD}/:/app --workdir /app node:12 sh -c "npm install --ignore-scripts && npm rebuild node-sass"

.PHONY: npm-build
npm-build:
	docker run --rm --interactive --tty --volume ${PWD}/:/app --workdir /app node:12 sh -c "npm run build"
