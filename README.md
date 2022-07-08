# Rick&Morty Dashboard

This is a dashboard of Rick&Morty characters.

## Basic Installation

In order to run the application first you should install all needed dependences. Type the following comand in the root of the project:
Npm:

```javascript
npm install
```

Yarn:

```javascript
yarn;
```

After that you should run both the frontend and the backend.
Npm:

```javascript
npm run start:backend
npm run start:frontend
```

Yarn:

```javascript
yarn start:backend
yarn start:frontend
```

## Installed libraries

[**Inversify**](https://inversify.io/ "**Inversify**")
Used to inject classes as singletons and to achieve [Inversion of Control or more commonly known as Dependency Injection](https://martinfowler.com/articles/injection.html "Inversion of Control or more commonly known as Dependency Injection").

[**Glob**](https://www.npmjs.com/package/glob "**glob**")
Used to search for patterns in filenames and read, in this case, files with routes.

[**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken "**jsonwebtoken**")
Used to handle jwt generation and signature in the authentication process.

[**react-router**](https://github.com/remix-run/react-router "**react-router**")
Used to handle browser navigation to diferent routes.

## Important disclaimer

Due to low experience about the subject and not enough time there are no test in this codebase. This is huge drawback on any project but my focus has been on the quality of what I know how to do. Tests are my weakness and is something I need to learn in my daily basis, not in a code challenge.
