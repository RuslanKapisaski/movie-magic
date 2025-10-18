# Moive Magic

## Description

Movie Magic is a Multipage Page Application (MPA) built using Node.js, Express, and Handlebars, featuring secure authentication, full CRUD functionality, and persistent data storage with MongoDB. The app allows users to manage movies and their casts while ensuring strong data protection through hashing, tokens, and cookies.

---

### Development Steps

---

#### 1. ExpressJS and Templating

##### Setup

- [x] Create project
- [x] Add Dev & Start Script
- [x] Add Express Server
- [x] Setup Handlebars
- [x] Add Resoures
- [x] Setup Static Files
- [x] Show Home Page
- [x] Add Debbuging
- [x] Add Layout
- [x] Show About Page

##### Architecture & Dynamic Rendering

- [x] Add Home Controller
- [x] Add Movie Data Layer
- [x] Add Movie Service
- [x] Render Movies On Home Page
- [x] Show No Movies Screen

##### Create Movie

- [x] Add Movie Controller
- [x] Show Create Movie Page
- [x] Add routes
- [x] Read Body Data (express.urlencoded())
- [x] Add Action For Creating Movie
  - [x] Add Action
  - [x] Add Service
  - [x] Add Model Method For Creating Movie
  - [x] Add UUID
- [x] Page 404

##### Movie Details

- [x] Add Details Button For Fetail Page
- [x] Add Route With Param For Fetails Page
- [x] Render Specific Movie

##### Movie Search

- [x] Show Static Search Page
- [x] Render All Movies
- [x] Modify Search Form
- [x] Filter Movies
- [x] Remember Search Words

###### Bonus

- [x] Show Movie Rating

---

#### 2. MongoDB Database

##### Prerequisites

- [x] Install MongoDB Community Sever
- [x] Install Compass GUI
- [x] Install Mongosh CLI (optional)

##### Setup Database

- [x] Add New Resources
- [x] Install Mongoose & Connect To Database

##### Refactor Movies To Use Mongoose

- [x] Add Movie Model
  - [x] Create Movie Schema
  - [x] Create Movie Model
- [x] Refactor Movie Service
- [x] Fix Handlebars Own Properties Issue
- [x] Global Handle With Handlebars Protoypes
- [x] Add Movie Persistance To Database
  - [x] Save Movies On Create
- [x] Refactor Search Page
  - [x] By Title
  - [x] By Genre
  - [x] By Year

##### Add Cast

- [x] Add Resources
- [x] Add Cast Controller
- [x] Show Create Cast Page
- [x] Add Cast Model
- [x] Add Cast Service
- [x] Create Cast
  - [x] Redirect To Home Page

##### Attach Relation Cast To Movie

- [x] Add Attach Cast Button
- [x] Add Attach Cast Page
- [x] Add Relation Between Cast And Movie
- [x] Add Attach Cast Functionallity

##### Show Cast Details

- [x] Get Movie Casts Filtered
- [x] Show Casts On Details Page

---

#### 3. Session And Authentication

##### Initial Setup

- [x] Add Resources

##### Registration

- [x] Add New Controller 'Auth Controller'
- [x] Add Registartion Page
- [x] Add User Model
- [x] Add User Service
- [x] Handle Registration (Create New User In Database)
  - [x] Password Hashing

##### Login

- [x] Add Login Page
- [x] Handle Login Page
- [x] Validate User
  - [x] Validate Email
  - [x] Validate Password
- [x] Create token
- [x] Return token to client

##### Logout

- [x] Add Logout Action
- [x] Clear Cookie

##### Authorization

- [x] Install Cookie Parser
- [x] Add Auth Middleware
- [x] Validate User authentication
- [x] Dynamic Navigation

### Movie Crud Operations

- [x] Add Delete And Edit Buttons On Details Page
- [x] Add Creater As Relation In Movies
- [x] Show Buttons Only To Creator
- [x] Show Edit Page
  - [x] Populate Movie Data
- [x] Handle Edit Action
- [x] Handle Delete Action

###### Bonus

- [x] Add Dynamic View Data (on select)

---

#### 4. Validation And Error Handling

##### Validation

- [x] Movie Validation
- [x] Cast Validation
- [x] User Validation

  - [x] User Email
  - [x] User Password

  ##### Error Handling

  - [x] Add Notification Container
  - [x] Add User Registartion Handling
  - [x] Add User Login Handling
  - [x] Add error handling on creating movies
    - [x] Retain movie category after error
  - [x] Add error handling on creating casts
  - [x] Add details page error handling

##### Bonuses

- [x] Guard edit from non creator

---
