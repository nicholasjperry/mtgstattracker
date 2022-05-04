# MTG Statistics Tracker 

## Description

* The MTG Statistics Tracker is a mobile app idea that is based around the ever popular trading card game, Magic: The Gathering.  Within the app, a user must first create a profile.  After creating a profile, the user can create a player group to join.  At this point, the user logs the data so that statistics can be compared amongst the other players of the group.
* The programming framework used to code this project thus far is React Native. Therefore, the app will be accessible to both iPhone and Android users. (The backend to handle all the data has not yet been decided.)
* As my very second portfolio project, this app has been largely put on hold due to its surplus of features and time that are required to put it into production.  In an effort to be able to further cultivate my portfolio, I have designated the status of this project as "ongoing", and will thusly update the status of the markdown file to be "active" once development on this project has resumed.
* Features included thus far:
  * "Welcome" Screen
  * "Registration" Screen
  * "Login" Screen
* Features that I have already planned, designed, and would like to implement:
  * Profile Component: At this screen, the user is given access to all of their statistics that have been logged within the app. They are able to view the amount of wins vs. losses they have achieved, which of their decks performs best, which of their decks performs worst, which deck they play the most, and which deck they play the least.  This data is then generated into a bar graph as one scrolls down the page.
  * Game Logging Component: At the center of the bottom of the app screen after having logged into one's account, there is a plus (add) icon, which when pressed will take the user to an alternative screen whereby a form with various input fields will appear.  The user can then input names of players who have played a game versus one another, which decks were used, the winner, the loser, and each players' ending life total.
  * Games List Component: This provides a player group to view a history of games played in the form of a table with 5 columns.  In column one, is the date and time when the game was played; column two is designated for the name of one player; column three is for the name of their opponent; column four lists both the name of the victor of the game and their ending life total; and column five lists the types/names of decks that were used.
  * Leaderboard Component: This screen displays a simple table with three columns, in which column one shows the player's name; column two is the amount of wins that player has logged; and column three is the amount of losses that player has accumulated.

## Installation and Usage

  1. Before being able to run this project locally on your machine, you must first have Node.js and the Expo CLI installed.  You will also need to have Android Studio and use its AVD manager to setup an Android emulator, a.k.a. an Android Virtual Device.    
  2. Once the aforementioned step has been completed, you can proceed to clone the repo into a local directory using: ```git clone https://github.com/nicholasjperry/mtgstattracker.git```.
  3. After you have cloned the remote repository to this local directory, install the required dependencies via: ```npm install```.
  4. Fire up the Android emulator application on your desktop and finally run ```expo start```.  This will compile the project and then start serving the project through Expo at the URL ```exp://<Your Computer's IP address>:19000```.  It will also automatically open a browser tab pointed to https://localhost:19002, which is the Expo DevTools.  If you don't see it, go to https://localhost:19002 in your web browser.

## License

MIT License

Copyright (c) [2022] [Nicholas Perry]

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.  
