### Minimalist Code

After a bit of experimentation here's what is a working, minimalist sample combining Sinatra, ActiveRecord, Codeship continuous integration, and Heroku hosting.

#### Interesting facts

* The key to setting the environment for sinatra is RACK_ENV=. Values, like in Rails are test, production, development
* Within Codeship, you need to make sure you specify the environment as RACK_ENV=test because that's the mode that your app is run within there. To run the tests.
