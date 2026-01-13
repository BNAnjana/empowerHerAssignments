# Understanding Project Management in NodeJS

a. Package Managers

1. What is a package manager?

A package manager is a tool that helps developers install, update, remove, and manage external libraries called packages used in a project.

Instead of writing everything from scratch, developers use packages that others have already built and tested.

Example:

A backend application may need a library to handle dates, authentication, or database connections. A package manager downloads and manages these libraries for you.

2. Why do we need package managers in backend development?

Backend projects depend on many external libraries to work efficiently. Package managers help by:
- Automatically downloading required libraries
- Managing library versions
- Saving development time

Example:

Using a package manager, you can install Express.js with one command instead of manually downloading files.

3. Problems faced if package managers are not used

Without package managers:
- Developers must manually download and update libraries
- Version conflicts may occur between team members
- Projects become difficult to set up and maintain
- Dependency tracking becomes messy

Example:

One developer may use an older version of a library while another uses a newer version which may cause bugs.

b. NPM (Node Package Manager)

1. What is NPM?

NPM (Node Package Manager) is the default package manager for Node.js.

It allows developers to install, share, and manage JavaScript packages.

NPM comes automatically when Node.js is installed.

2. Why is NPM important for Node.js applications?

NPM is important because it:
- Provides access to thousands of open-source packages
- Helps manage project dependencies
- Ensures consistent environments across machines
- Simplifies project setup

Example: npm install express

3. How NPM helps in managing dependencies

NPM:

- Records dependencies in package.json
- Downloads them into the node_modules folder
- Locks exact versions using package-lock.json

Example:

When someone clones your project and runs the command npm install, all required dependencies are installed automatically.

c. Backend Project Initialization

1. What is the command used to initialize a backend (Node.js) project?

Command Used to Initialize a Backend (Node.js) Project is:

npm init

2. Explain what npm init and npm init -y do

npm init

- Asks a series of questions (project name, version, author, etc.)

- Creates a customized package.json file

npm init -y

- Skips all questions

- Creates package.json with default values

- Faster for quick setups

d. Files and Folders Created After Project Initialization
Explain the purpose and importance of:

1. package.json

- The main configuration file for the project

- Stores project metadata and dependencies

- Required for dependency management

Importance:

It tells NPM how the project works and what libraries it needs.

2. node_modules

- Contains all installed project dependencies

- Automatically created by NPM

Importance:

Holds the actual code of external libraries used in the project.

3. package-lock.json

- Records exact versions of installed dependencies

- Ensures consistent installations across environments

Importance:

Prevents unexpected bugs caused by version changes.

Also mention:

4. Which files/folders should not be pushed to GitHub and why

node_modules/ folder should not be pushed to github because:

- It's size is very large

- It can be regenerated using npm install

Reason:

Keeping it out reduces repository size and avoids duplication.

5. Which files must be committed and why

- package.json

- package-lock.json

Reason:

These files define the project dependencies and ensure everyone installs the same versions.