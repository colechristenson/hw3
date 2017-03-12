Cole Christenson
HW3 API

I was not able to call the hw3 server with the oauth token that I got from oauth

Q: oauth tokens should not be granted in the main flow because then they would need to be created each time the api is called, where as if the oauth token is called first you can call the api with the same token over and over again.