## Requirements

Now that the backend server has been fully implemented, now all that's left is to to design and implement a user friendly GUI (graphical user interface) for the tank management application.

This frontend app should be used to all a user to interface with the kind of data that the backend server is mean to handle. 

The app should provide a user with a simple form that accepts the various attributes of of a tank object.

**GET /data**

Your app should make a GET request to the server when it loads in order to retrieve the list of tank objects saved in the database.

**POST /data**

The form should accept the following:

- Tank location description
- Latitude
- Longitude
- Percentage full

The data from your form should be used to create the JSON body of a POST request. The post request should be made to your backend server and used to create a new tank object that should be stored in your database.

**HTML and CSS**

The tank objects pulled from the server should be used to populate cards or blocks. These cards should be designed to display all the attributes of each tank object.

The HTML layout of a tank object can as simple or as complex a design as desired, as long as it makes sense. 

Add a suitable header to the top of you web app to display the name of the system. The name of the application is up to you.

Use CSS to style your tank objects, the "new tank" form and the page header.

Your HTML, CSS and JavaScript code must be written in their one separate file.

- index.html
- style.css
- script.js