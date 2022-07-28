dev:
	yarn storybook
build:
	yarn build-storybook
	yarn deploy-storybook
deploy:
	yarn package
	cd package && yarn publish --access public
	node ./scripts/deploy.cjs
	git add .
	git commit -am'$(m)'
	git push
link:
	node init.js
	npm run package
	cd package && npm link && npm ls -g && yarn publish --access public
