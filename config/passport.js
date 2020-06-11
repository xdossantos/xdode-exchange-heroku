/* Before asking Passport to authenticate a request, the strategy (or strategies) used by an application must be configured.
Strategies, and their configuration, are supplied via the use() function. In this example we configure the Google strategy for authentication.
Before being able to configure the Google strategy create a project in the Google Developers Console: https://console.developers.google.com
Configure the clientID, clientSecret and Redirect URI for the project. 
 */
const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20');
const keys = require('./keys');//We have created keys.js to store our sensitive information including the clientSecret for our app. See keys.js
const User = require('../models/User');

/* In a typical web application, the credentials used to authenticate a user will only be transmitted during the login request. 
If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. 
In order to support login sessions, Passport will serialize and deserialize user instances to and from the session. 

In this example, only the user ID is serialized to the session, keeping the amount of data stored within the session small. 
When subsequent requests are received, this ID is used to find the user, which will be restored to req.user.*/
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrat({
        //options for stratergy
        callbackURL: '/login/redirect',
        // Here we retrieve the keys we have hard coded in our keys.js file. 
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, 
    //Below is the verify callback function
    /*Strategies require what is known as a verify callback. The purpose of a verify callback is to find the user that possesses a set of credentials.
When Passport authenticates a request, it parses the credentials contained in the request. 
It then invokes the verify callback with those credentials as arguments.
If the credentials are valid, the verify callback invokes done() to supply Passport with the user that authenticated. 
In this example we also write the users details to our database before invoking done. 
Check whether we already have a user with a specified googleID saved in our database (using the findOne() function). 
If there already is a user with that googleID in our database, we call the done() function and pass it the currentUser object (which we retrieved from the database). 
If the user is not already added to our database, we save the user to the database and then call the done() function passing it the user object that 
we have just added to the database. 
*/
    (accessToken, refreshToken, profile, done) => {
        console.log('Passport callback function fired');
        console.log(profile);
        User.findOne({ googleID: profile.id }).then((currentUser) => {
            if (currentUser) {
                //have this user in our db
                console.log('new User ' + currentUser);
                done(null, currentUser);
            } else {
                //user not saved in DB so save  
                // Take note of how we have define the class objects and its attributes in '../models/user.model.js'
                new User({
                    username: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser) => {
                    console.log('new User ' + newUser);
                    done(null, newUser);
                });
            }
        });

    }));

