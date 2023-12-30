# Book-My-Show-Backend
Author - Fairoz Ahmad Sheikh

This is a Backend of the Book My Show project where the user data is being fetched, stored, and retrieved flexibly from MongoDB and shown on the UI.

## ⭐ Technologies that are used
### Backend
-  Express
      - Backend is based on Express.Js
      - for data fetching 
-  Mongoose
      - for Data storage by MongoDB Connection

### Endpoint
- GET - https://bookmyshow-server-vk9q.onrender.com/api/booking
       - for getting the booking information from the Database
- POST - https://bookmyshow-server-vk9q.onrender.com/api/booking
       - for sending the booking information to the Database 

### Installation

1. Clone the repository from GitHub:

```
git clone https://github.com/FairozAhmadSheikh/bookmyshow-backend.git
cd bookmyshow-backend
```

2. Install the required dependencies:

```
npm install
```

3. Set up the MongoDB connection:

   - Ensure you have MongoDB installed and running on your system.
   - Create a MongoDB database for the BookMyShow project and note down the connection string.

4. Configure the application:

   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:

   ```
   PORT=8080                  # The port on which the application will run
   MONGODB_URI=your_uri_here  # The MongoDB connection string
   ```

## Usage

1. Start the application:

```
npm start
```

2. Access the BookMyShow-FrontEnd application in your web browser at `http://localhost:3000`.

3. Browse the list of available movies and select a movie to view available showtimes.

4. Choose a showtime and reserve your desired seats.

5. Complete the booking process by providing necessary information.

6. You can view your last booked movie on the homepage.

## Technologies Used

The BookMyShow project uses the following technologies:

- Node.js and Express.js for the server-side application.
- MongoDB with Mongoose for permanent data storage.
- Webpack for bundling and managing frontend assets.
- Babel for transpiling modern JavaScript code for better browser compatibility.
- React for building the user interface.


##
<h4 align="center">Made by Fairoz Ahmad Sheikh</h4>
<h4 align="center">Thank You</h4>
