###### This is the readme for Udacity React Course,
To install the application, insure you have npm installed, 

Navigate to project folder
`cd starter`
Install Dependencies
`npm install`
Start the Application
`npm start`
If there are dependency issues or errors preventing app from starting, try
`npm audit fix --force`

I have chosen to use the starter template and start implementing different features and functionalities:

1- The two required pages: Library and Search Page are implemented using React Router plus an extra "Book Details" Page.

2- The Library contains three different Shelves, you can move books between shelves either by using the Book changer
dropdown select or simply by dragging and dropping the book into the desired shelf.

3- The App features an alert after moving every book to confirm it has moved successfully, you can simply enable/disable
this alert by clicking the button in the top right corner.

4- You can view the book details simply by clicking on it.

5- The shelf of the book is always reflected in the book changer dropdown in any of the three pages.

6- You can search books in the search page, if you click on a book there to view its details then click back, your
search query will be saved, so you don't have to type it again, so you are able to browse books freely.
(P.S. I have chosen to filter out books with missing thumbnails)

7- If network connection issues occur, and the App can't reach the backend server(e.g. when moving a book), an alert is
shown and changes that couldn't be reflected on the backend are reverted.

I know I haven't done a lot of code in the 'React' way, but I'm still learning my way through react and javascript, and
your feedback would be really appreciated, and it will help me become a better developer.

###### Thank you