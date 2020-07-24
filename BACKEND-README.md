## BACKEND README:

- I included a nextStoryInitialData.js file in the /backend directory.  To use, 
make a new database in MongoDB. Then just navigate to the /backend directory, open up 
a connection to the MongoDB database that was created, and run load("nextStoryInitialData.js") 
following the steps from Workshop 3 (remembering to replace 'test' in the connection command 
with the new database name).

- To get backend/app.js line 16 working,
please create a file in the /backend folder (root level) called '.env' and add:
```
# Database
DATABASE_URI=**_your mongodb database uri_**

# TMDBAPI
TMDBAPI_URL=**_your TMDBAPI api key registered on their website**
```
------------------------------

- I removed all the data that will be fetched from the 3rd party apis so that we don't need to search in 
2 places - if ya'll would rather we kept some info in mongodb, feel free to change it! (with a heads up on Slack)

- It would be nice if we got some more 'real' data for our app later on, maybe we can have a day 
where we just fill our db with data or something near the end idk :P

------------------------------
- I added a couple of examples on how to use mongoose under /backend/routes/nextStoryTags.js. 
Both router.get functions should be working.

- @Warren - Hook up both frontend and backend apps and start on localhost:9000 
  *After all your frontend changes, don't forget to run npm run-script build under cd frontend directory :)
  
  
** Instructions on deploying to Heroku**
1) whenever you change the next-story/frontend code, build it and put the build file in next-story/backend/frontend because
it is the only workaround we have now.

2) heroku login

3) git init

4) git add .

5) git commit -m "some comments"

6) heroku create

7) important**** you will need to set your .env environment variables heroku way since you can't uplaod .env on heroku
   
   heroku config:set DATABASE_URI=**_your mongodb database uri_**
   
   heroku config:set TMDBAPI_URL=**_your TMDBAPI api key registered on their website**
   
8) git push heroku master
   
* if it is not the first time your push to heroku master, then just make changes and do step 4, 5 , 8

**TODO for Warren** I still need to change all local 9000 to dynamically use host url to http call correctly
 
