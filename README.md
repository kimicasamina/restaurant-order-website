# Restauran Order Website

## Packages installed

- express: Framework for building web apps.
- mongoose: MongoDB object modeling tool.
- ejs: Embedded JavaScript templating engine for views.
- bcryptjs: Password hashing library.
- jsonwebtoken: To create JSON Web Tokens (JWT) for authentication.
- dotenv: To manage environment variables.
  = multer: To handle file uploads (menu images).
- body-parser: To parse incoming request bodies.

## Views

- views/auth/login.ejs and views/auth/register.ejs:
  These templates allow users to register and log in.

- views/user/menu.ejs:
  Displays the restaurant menu for ordering.

- views/admin/dashboard.ejs:
  Admin dashboard to manage menu items and view orders.

Key Syntax in EJS
<%= ... %>: Used to output variables (HTML-encoded).
<%- ... %>: Used to output raw HTML (without escaping).
<% include ... %>: Includes a partial or another file.
<% layout('path/to/layout') %>: Tells EJS which layout to use for the page.
