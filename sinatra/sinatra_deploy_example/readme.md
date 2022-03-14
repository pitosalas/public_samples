
#### Interesting facts

* The key to setting the environment for sinatra is RACK_ENV=. Values, like in Rails are test, production, development
* Within Codeship, you need to make sure you specify the environment as RACK_ENV=test because that's the mode that your app is run within there. To run the tests.
