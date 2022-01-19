/* We will work with objects from simple to complicated.

We have received a request from the Public Library to send them an example of what would be a good way to organize their user registry:

They want to track user’s information (user id and full name), and which books each user has.
For each book, they want to have some information about the book: title, author, category and [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) number.
Let’s split the problem into small parts.

###Iteration 1
First of all, let’s create a user object. You should start with something like this:
*/

const user = { 
           name: 'Ana', 
           id: 3 };


//Let’s create the user with your own information (your name, and your favorite number as an id). So we will have to add an id and the name to the object, and set them up with the right values.

//Iteration 2
//In the same way, let’s create some book objects. Let’s create two different books (your favorite books) with the following data: Title, Author, ISBN and Category.


const book1 = {
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    isbn: '0316769487',
    category: 'Classic Literature'
    };

const book2 = {
    title: 'The Unbereable lightness of being',
    author: 'Milan Kundera',
    isbn: '0061148520',
    category: 'Modern Literature'
    };

user.books = [book1, book2]

console.log(user)

//Iteration 4

const library = [user]
console.log(library)

//Iteration 5

const book3 = {
    title: 'Siddharta',
    author: 'Herman Hesse',
    isbn: '0142437182',
    category: 'Modern Literature'
};

user.books.push(book3) // library[0].books.push(book3)
console.log(user)

// Bonus iteration

const user2 = {
    name: 'Ironhack', 
    id: 9,
}

user2.books = [book1, book2, book3]

library.push(user2)

console.log(library)