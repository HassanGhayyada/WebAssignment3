File Organization
models.js: Defines the Student class, enforces immutable IDs, and includes methods for course management, and average calculation.
database.js : Simulates an asynchronous DB using callbacks and setTimeout
analytics.js has methods to find out averages, top student, filtering students etc.
main.js: entry point; fetches data, instantiates students, tests immutability of classes and then prints analytics results.

Challenges Faced
Getting it right with Git was a major challenge while doing this project. During the development of the project, I had problems regarding the use of commits and staging of files correctly in VS Code. Several times, some vital commits were deleted, the repository was reset, or wrong changes were committed, which afterward had to be redone.
It also required extra concentration when working with asynchronous callbacks to make sure all logic ran inside the callback, especially when converting raw data into class instances and running analytics afterward. 
These challenges helped me to improve my understanding of Git, asynchronous JavaScript, and project development in a structured manner
