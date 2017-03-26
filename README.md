# Postalicious
A clone of the Postman app.

## Description
See http://jsdev.learnersguild.org/goals/194-Postalicious-Demystifying_HTTP.html for description.


- [x] The artifact produced is a repo with at least two sub-folders: postalicious/ and sandbox-server/.
- [x] The artifact produced is properly licensed, preferably with the MIT license.

## Sandbox Server

- [x] Can run the command npm run sandbox-server (or npm run sb, if you want to save some typing) to start the sandbox web server at port 3000.
- [x] The sandbox server source code is written using the Express library.
- [x] Sending a GET request to the path / responds with
  - [x] a 200 (OK) status code a plain-text response
  - [x] body with the content Welcome to Sandbox!
  - [x] the Content-Type header set to text/plain
- [x] Sending a GET request to the path /search?q=doodads responds with
  - [x] a 200 (OK) status code
  - [x] a plain-text response body with the content You searched for: "doodads" (it doesn’t need to actually do any searching, just return the plain text)
  - [x] the Content-Type header set to text/plain
- [x] Sending a GET request to the path /search responds with…
  - [x] a 400 (Bad Request) status code
  - [x] a plain-text response body with the content You didn't provide a search query term :(
  - [x] the Content-Type header set to text/plain
- [x] Sending a POST request to the path /things with a plain text body flying car responds with…
  - [x] a 201 (Created) status code
  - [x] a plain-text response body with the content New thing created: "flying car"! (it doesn’t need to actually create anything, just return the plain text)
  - [x] the Content-Type header set to text/plain
- [x] Sending a GET request to the path /somefile with an Accept header of text/plain responds with…
  - [x] a 200 (OK) status code
  - [x] a plain-text response body with the content This is a plain text file
  - [x] the Content-Type header set to text/plain
- [x] Sending a GET request to the path /somefile with an Accept header of text/html responds with…
  - [x] a 200 (OK) status code
  - [x] an HTML response body with the content <!DOCTYPE html><html><body>This is an HTML file</body></html>
  - [x] the Content-Type header set to text/html
- [x] Sending a GET request to the path /myjsondata with an Accept header of application/json responds with…
  - [x] a 200 (OK) status code
  - [x] an HTML response body with the content { "title": "some JSON data" }
  - [x] the Content-Type header set to application/json
- [x] Sending a GET request to the path /old-page responds with…
    - [x] a 301 (Moved Permanently) status code
    - [x] the Location header set to http://localhost:3000/newpage
- [x] Sending a POST request to the path /admin-only responds with a 403 (Forbidden) status code
- [x] Sending a GET request to the path /not-a-page responds with a 404 (Not Found) status code
- [x] Sending a GET request to the path /server-error responds with a 500 (Internal Server Error) staus code


##Postalicious

- [x] Can run the command npm run postalicious (or npm run pl, if you want to save some typing) to start the Postalicious app at port 3001.
- [x] Users can visit the main page of the Postalicious site at http://localhost:3001.
- [x] Main page has three main sections:
  - [x] Request builder HTML form
  - [x] Raw HTTP request
  - [x] Raw HTTP response
- [x] When a user fills out the HTML form and clicks a “Send” button…
    - [x] The raw HTTP request is generated and shown
    - [x] The HTTP request is sent, and the raw response message is shown
    - [x] Users can fill out an HTML form to specify HTTP request details.
- [x] Submitting the form will send the request according to the specified details.
- [x] Using the HTML form, users can specify…
    - [x] host and path
    - [x] HTTP verb/method
    - [x] query parameter keys + values
    - [x] header keys + values
    - [x] request body

##Stretch

Use the stretch goals to go deeper into the nuts and bolts of HTTP.

- [ ] Sandbox server is written using only the core Node.js modules (instead of Express, use the built-in HTTP module).
- [ ] Users of Postalicious can “save” their requests in a history panel
- [ ] Clicking on a saved request will re-load it into the form
- [ ] Using Postalicious, create some HTTP requests to various real-world APIs:
- [ ] Get all issues for a repo through the GitHub API
- [ ] Get all tweets with the hashtag #javascript with the Twitter API
- [ ] Any other API request(s) of your choice
- [ ] External HTTP requests are saved in files under a example-requests/ directory (make sure to obscure any secure information before saving these files, like your password or authentication token)

##Quality Rubric

* Well formatted code

* Code uses a linter, which can be invoked with a command (e.g. npm run lint). [50 points]
* Running the linter on all source code files generates no linting errors. [50 points]
* Clear and useful README

* Repository includes a README file with installation and setup instructions. [25 points]
* Repository includes a README file with usage instructions and at least one example use case. [25 points]
* Proper dependency management

* There is a command to install dependencies (e.g. npm install) and it is specified in the installation and setup instructions of the README. [50 points]
* Good project management

* Commit messages are concise and descriptive. [25 points]
* All features are added via pull requests. [25 points]
* Every pull request has a description summarizing the changes made. [25 points]
* Every pull request has been reviewed by at least one other person. [25 points]
