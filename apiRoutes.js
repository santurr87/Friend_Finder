// Your `apiRoutes.js` file should contain two routes:

 // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
 // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
  app.post("/api/friends", function(req, res) {

    var newUser = req.body
    var bestmatch; 
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    for (var i = 0; i < friendArray.length; i++) {



      //check newUser.scores against friendArray[i].scores




      
     }
     res.json(bestmatch);

    }
  });