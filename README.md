# Passwordless Auth with GraphQL and Prisma

Authenticate Users without the need for a password, forgot-password and reset-password.
Less code, less emails and less users leaving because of forgoten passwords.
xw

## Setup Development

1. Copy `.env.template` to ".env"
2. Add your enpoint url to `prisma/primsa.yml`
3. run `npm install`
4. run `npm run db` to setup the the database, generate client and run seed
5. start your server with "npm run dev"
6. Open GraphQL Playground on `http://localhost:4000`

## Setup Production

1. just run `npm start`

## Setup eMail Service

NodeMailer is in use for now with `ethereal.email`.
If you want something else, just edit the `emails/sendEmail.js` and add your own settings / client

## How does it work?

### Signup

1. Get `name` from email from the part before the `@` symbol
2. Generate `slug` from `name`
3. Create User
4. Continue with **Login**

### Login

1. Create an `Auth` entry with `token' and the`email`
   1.1. with UUID token
   1.2. with email the messages it was sent to
2. Generate a security to compare with the email (no fake emails)
3. Click on link with `email` and `token`
4. Check if
   4.1. Auth entry with `token` exists
   4.2. `email` is correct
   4.3. the `createdAt` is not more then 1h ago
5. Generate JWT with `userId`
6. delete Auth entry
