# headerParser
Second project on [this](https://www.quora.com/What-does-a-good-junior-backend-developer-portfolio-website-look-like/#w5Ttk5Aw21) list and part of my effort to build a better back-end portfolio. This is a basic parser for the headers of incoming http requests to the root URL. The returned values are the IP, accepted languages, and software information of the header. It uses [express-useragent](https://github.com/biggora/express-useragent) to give a much more detailed array of software specs than the example it's based off.

Unit tests can be ran with `npm test`.
