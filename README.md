This file contains instructions for the Node.js test.
Notes App is a simple app where user can register/login and manage notes.

__ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

Requirements: 
  - Node.js LTS
  - PostgreSQL
  - npm

__ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

First install steps:
  1 - After extracting files on a folder, run "npm install" .
  2 - Connect the app to your local database (check ".env" file)
  3 - Use Prisma to migrate tables to your database
  4 - Run "npm run dev" or "npm start" to start the server

__ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

Important links:
  - https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgres
  - https://www.postgresql.org/download/

__ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

Tasks To-Do (Follow order) :
  I   - Syntax bugs :
    The server is crashing whenever you start it, check errors and try to fix them.

  II  - Logical and Functional bugs :
    Now that the server is running, make a quick test of the app and see if everything is working well

  III - Add Features :

      - If you check the users table on the database, 
        you will notice that passwords are stored in plain text.
        Think about a solution to crypt/hash the password before storing it on the database and implement it.
    
      - The button "Delete old notes" on the homepage is not working.
        Make sure that all notes that are more than 3 days old are deleted when clicking that button.

  IV - Clean Code :
    You may have noticed that the code in "auth.controller.js" is not well written.
    Try to improve it and reduce lines of code.

__ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

IMPORTANT:
  Make sure to compress all files/folders (except "node_modules"), before sending them on due date.  

__ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

GOOD LUCK!