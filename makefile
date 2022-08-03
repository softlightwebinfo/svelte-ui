test:
	git commit -am'$(m)'
dev:
	yarn storybook
build:
	yarn build-storybook
	yarn deploy-storybook
deploy:
	node ./scripts/deploy.cjs
	yarn package
	node ./scripts/deploy.cjs
	cd package && yarn publish --access public
	node ./scripts/deploy.cjs
	git add .
	git commit -am'$(m)'
	git push
link:
	node init.js
	npm run package
	cd package && npm link && npm ls -g && yarn publish --access public
