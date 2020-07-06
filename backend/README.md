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
