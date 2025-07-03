```
Welcome to Luke Doughty's 
    ____                                   __   _       __     __         _ __       
   / __ \___  ______________  ____  ____ _/ /  | |     / /__  / /_  _____(_) /____   
  / /_/ / _ \/ ___/ ___/ __ \/ __ \/ __ `/ /   | | /| / / _ \/ __ \/ ___/ / __/ _ \  
 / ____/  __/ /  (__  ) /_/ / / / / /_/ / /    | |/ |/ /  __/ /_/ (__  ) / /_/  __/  
/_/    \___/_/  /____/\____/_/ /_/\__,_/_/     |__/|__/\___/_.___/____/_/\__/\___/
```
made by Luke Doughty himself -- using **React** and **Vite** with a **Django** backend serving my project experience from a **PostreSQL** database 🔥 

## Installation
1. clone the repository using  
  ```{bash}
  git clone git@github.com:ldoughty05/PersonalWebsite.git
  cd PersonalWebsite
  ```
2. install dependencies with `npm install`  
3. Create a file in the root directory called `.env` and add the following environment variables:  
   ```
   VITE_API_URL="http://localhost:8000"
   ```
4. Start the frontend server with `npm run dev`

## Architecture
### Frontend
* **React** for the frontend which allows for the page to be made up of components which rerender quickly in response to any changes. Frontend developer staple.
* **Vite** was useful for this project because it simplifys having different environment variables for development, testing, and production.
* **Redux** is helpful for state management and makes prop drilling unnecessary. I set up the project expecting to use it, but I didn't. State just wasn't complex for this site.
### Backend
* No backend specifically for this website, but it uses the same **Django** backend as my [fastresume](https://github.com/ldoughty05/fastresume) project.
* Project experience is stored in a **PostgreSQL** relational database. This is useful because it also stores what skills are associated with each project. I can make changes on the fly and it updates on my website without needing to rebuild.
