# Authentication trial with NodeJs (Express.js) and React.js

## Prerequisites
* clone repo
* import [csv](./__DB-setup) files to MySQL database
  * create .env file in server folder with JWT token + DB connection
    ```
    DB_NAME
    DB_HOSTNAME
    DB_USERNAME
    DB_PASSWORD
  
    JWT_ACCESS_TOKEN (random string of characters)
    JWT_REFRESH_TOKEN (unused)
  ```

## Structure of the App
### Client: React app
- components fetch server info accordingly
- Login/register/logout all happens by using context hooks that are fetching the information.

### My thoughts:
The idea is
- on loading the app, a useEffect in the Context component will fetch `api/auth` which will send back user information if a user is authenticated. otherwise it returns false
- also when logging in: the user will be logged in and authenticated inside the Context component.
- same with registering
- Logout will destroy the cookie and send the auth back as `false`.

