# panda-mock-server
Main purposes of this pet-project was to make simple mock server with UI configuration,
to work with Express and Node. But it can be used in development if:
- you have contracts but not working api
- want to test your app and don't want to make all steps to reproduce api-response

## Table of Contents

- [Getting Started](#getting-started)
  - [With the CLI](#with-the-cli)
  - [With NPM Scripts](#with-npm-scripts)
- [Usage](#usage)
  - [Configuration](#configuration)
    - [Defining response](#defining-response)
      - [Example](#example) 
    - [Saving mocks](#saving-mocks)
- [Development](#development)
- [Next steps](#next-steps)


## Getting started

First, install the module:

```console
npm i panda-mock-server --save-dev 
```

There are two ways of start the app:

### With the CLI

```console
npx panda-mock-server start [mock_port] [settings_port]
```

### With NPM Scripts

NPM package.json scripts are the way to run locally installed binaries.
Simply define a script as such:

```json
{
  "scripts": {
    "mock_server": "panda-mock-server start"
  }
}
```

And run the following in your terminal/console:

```console
npm run mock_server
```

In case of success you can find the messages about ports in console. 

## Usage
After server had been started you can specify `http://localhost:[mock_port]` as api-url 
for your web-app and track requests or configure responses on `http://localhost:[settings_port]`.

### Configuration

The server supports only JSON http requests.

You can define different responses for different paths and methods.

A response can be static or use fields from your request, the following fields are available:
- body - request body (empty object for GET request)
- path - request path
- method - request method (supports GET, POST, PUT, DELETE and PATCH)
- query - object containing request query

#### Defining response
To define response you have to fill mocks form in the settings app, specify path, method, response template and variables.
A variable contains of name ( string values in template, can be nested) and path to value in request object (`null` will be returned if path cannot be resolved).
Variables can be set as object with keys - variable names and values - paths.
##### Example
Suppose we create `POST` mock for path `/` mock with this template:

```
{
  "greeting": "$greet_var",
  "name": "$name_var",
  "request": "$req_var"
}
```
and following variables:
```
{
  "$req_var": [],
  "$name_var": ["query", "name"],
  "$greet_var": ["body","greeting"]
}
```
Now by this request
```
fetch("http://localhost:8002/?name=world", {
"body": "{\"greeting\":\"hello\"}",
"method": "POST",
})
```
we will get following result
```
{
  greeting: "hello"
  name: "world"
  request: {
    body: {greeting: "hello"},
    method: "POST",
    query: { name: "world" },
    path: "/",
  }
}
```

#### Saving mocks
Server stores all mocks in memory, so you can save current mocks state using files dialog.


## Development
To start server and client in development mode or make some fixes
- Download [source code](https://github.com/AdorableRedPanda/panda-mock-server) and  install dependencies
- Configure ports using `.env` file
```console
  npm i
```
- Start dev-server with isolated client
```console
  npm run dev:client
```
- Start dev-server with hot reload
```console
  npm run dev:server
```

## Next steps
- ui - more convenient way to set templates and variables
- ui - add notifications on settings changes and errors
- ui - avoid using dialogs for forms
- ui - avoid using React
- ui - refactor file structure 
- server - refactor services to simplify dependency graph
- server - start http listener from settings
