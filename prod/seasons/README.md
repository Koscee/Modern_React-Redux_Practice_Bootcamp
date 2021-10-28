# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## App Overview

An app to detect what season the user is currrently experiencing outside.

Requirements:

1. If the user is:-
   a) in the Northern hemisphere and the month is between October and March
   b) in the Southern hemisphere and the month is between March and October
   then -> display "Burr, it's chilly!" with some snow-flake icons.

2. If the user is:-
   a) in the Northern hemisphere and the month is between March and October
   b) in the Southern hemisphere and the month is between October and March
   then -> display "Let's hit the beach!" with some sunny icons.

### Challenges:

- Need to get the users physical location
- Need to determine the current month
- Need to change text and styling based on location and month combined together

### Design:

![App design](/screenshots/app-design.png)

---

![Logic structure](/screenshots/logic-structure.png)
<br>

### Pages Screenshots:

![Loading page](/screenshots/loading.png)

---

![Winter Season page](/screenshots/winter-season-page.png)

---

![Summer Season page](/screenshots/summer-season-page.png)
