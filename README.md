# react-todo
Simple todo app built to demonstrate integration of React and Materialize

## Requirements
* Mongodb

## Getting started
Install dependencies `$ npm i`
Start mongo db `$ mongod`
Start local server `$ npm start`

## Details
This is a very basic single page application demonstrating how the Materialize UI library could be integrated with React.
Currently users can add new items at the top of the page and complete or remove items on the list by hovering over the edit icon on the right of the todo item.
Removing an item shows a dialog notifying user of this action.
The list is ordered by completion with completed items being pushed to the bottom of the list.

## Roadmap
Accessibility: 
* Aria roles can be added for none native UI controls.
* Task items should be focusable with clear focus states.

Offline mode: 
* Localstorage could be leveraged for continued use during loss of connection and synced with database when available.

UI/UX: 
* Make controls more intuitive, make use of existing design patterns to maximise speed at which user is able to understand the controls.
* Use colour and animation to give better indication when a user has completed an action or state has changed.
* Completing a task could be done by swiping on touch devices with a fallback button for desktop and screen readers, 
Modernizr could be used for feature detection.
* Allow users to reorder tasks within the list by dragging and dropping. This could also be used for removing items from list.

Further work:
* Extend the task schema to represent priority of task, completion date, and add longer detailed descriptions. Use the edit button to access this functionality.
* Complete undo functionality for removed messages
* Complete integration of all Materialize UI elements
* Render page server side on initial page load
* Reorganise folder structure to show clearer distinction between server and client side
