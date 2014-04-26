test:
	@./node_modules/.bin/mocha \
		--require should \
		--harmony-generators \
		--reporter spec \
		--bail

clean:
	@rm -rf node_modules

demo1:
	@node demos/example.js

demo2:
	@node demos/example_with_promises.js

demo3:
	@node --harmony demos/example_with_promises_generators.js

demo4:
	@node demos/example_games.js

list:
	@node demos/list_available_methods > api_method_list.md

.PHONY: all test clean