# Project Overview - Leah Haake

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Monday| Project Approval, Project Worksheet Due, Begin Building Application Structure | Complete
|Day 2 - Tuesday| MVP, Application Structure & Working with API | Complete
|Day 3 - Wednesday| MVP, Styling API data, & PostMVP  | Complete
|Day 4 - Thursday| Styling, PostMVP | Complete
|Day 5 - Friday| Final Touches, Update Project Worksheet & Presentation | Complete


## Project Links

- [My github repo link](https://github.com/lhaake/Unit2Project)
- [add your deployment link]()

## Project Description

Daily News is an app that displays top headlines based on a keyword search. 

## API

[NewsAPI](https://newsapi.org/docs/endpoints/sources)

**NewsAPI Limitations** 
- The top headlines news sources vary in their journalistic reputability and trustworthiness (facebook, tabloid, some sources I've never heard of)
- Request limit for free account: 500 per day
- Issues related to deployment - localhost only for free accounts. [Screenshot](https://res.cloudinary.com/lhaake/image/upload/v1602095923/Unit%202%20-%20React%20Project/Screen_Shot_2020-10-07_at_2.32.32_PM_crsozd.png)

```
{
"source": {
"id": null,
"name": "NPR"
},
"author": "",
"title": "Post Office Worries Could Push Voters Back To Polling Places - NPR",
"description": "This summer, experts expected more than half of all Americans to vote by mail. Recent polls seem to indicate the number to be significantly lower, which could mean extraordinary lines in some places.",
"url": "https://www.npr.org/2020/10/01/916494111/fewer-people-may-vote-by-mail-than-expected-that-could-mean-election-day-chaos",
"urlToImage": "https://media.npr.org/assets/img/2020/09/25/georgia-line_wide-8d9352e044e96cce11e016a3d12a72a4d09a1a21.jpg?s=1400",
"publishedAt": "2020-10-01T09:00:28Z",
"content": "People wait in line to vote in Georgia's June 9 primary election at Park Tavern in Atlanta.\r\nBrynn Anderson/AP\r\nCOVID-19 is still spreading across the U.S., but you would barely know it by how people… [+7812 chars]"
},
```

## Wireframes

- [My draft wireframe](https://res.cloudinary.com/lhaake/image/upload/v1601645247/Unit%202%20-%20React%20Project/Draft%20Wireframe%2010/1.jpg)
- [Mobile](https://res.cloudinary.com/lhaake/image/upload/v1601674862/Unit%202%20-%20React%20Project/Wireframes%20/Mobile%20Version.png)
- [Tablet](https://res.cloudinary.com/lhaake/image/upload/v1601674862/Unit%202%20-%20React%20Project/Wireframes%20/Tablet%20Version.png)
- [Desktop](https://res.cloudinary.com/lhaake/image/upload/v1601674862/Unit%202%20-%20React%20Project/Wireframes%20/Desktop%20Version.png)
- [React architecture](https://docs.google.com/drawings/d/1x1BCh18IVVlyKlMaCmLbjEi0czuRpNbDz5qAuVNrp70/edit)

## Components

| Component | Description | 
| --- | :---: |  
| App | This will be my parent Component and includes Routes | 
| Nav | This will render the nav and link to About page | 
| About | This will render the about page | 
| Footer | This will render the footer | 
| Home | This will be the homepage, making the API call  | 
| Search Form | This will render form to search for news by keyword | 
| Article | This will render the news articles | 

## MVP/PostMVP 

#### MVP 
- Functional App that accepts user input and renders news articles on the page 
based on the input 
- Set up VS Code for React App
	- Installs
	- Set up documents and file structure
- Build Components
	- App, Nav, About, Home, Search Form and Footer
	- Building Core Application Structure
	- Responsive Design for Mobile (first), Tablet and Desktop
- Work with API
	- Fetch data via NewsAPI by keyword entered in input
    - Render data on page 
	- Style the data 
- Organize Content
	- About page, Home heading, Footer 
- Styling 
	- Color and font choices
- Project testing 
- Setup and Deployment to Netlify

#### PostMVP 
- useEffect to load top headlines on page load 
- Additional options for filtering by news sources for maximum accuracy, popularity, and trusted sources 
- "Favorites" Component, to add functionality in which a user could save articles to their favorites

## Time/Priority Matrix
- [Graph](https://res.cloudinary.com/lhaake/image/upload/v1601913031/Unit%202%20-%20React%20Project/Wireframes%20/TimePriorityMatrix.jpg)


## MVP Timeline

| Component | Priority | Estimated Time | Actual Time | Status |
| --- | :---: |  :---: | :---: | :---: |
| Squad Meetings with Joe | H | 4hrs| 3hrs | Complete |
| Setup React App on VS Code | H | 1hr| 0.5hr | Complete |
| Setup Components | H | 1hr| 1hr | Complete |
| Working with Components | H | 3hrs| 3hrs | Complete |
| Working with API | H | 2hrs| 1hr | Complete |
| Research | H | 2hrs| 3.5hrs | Complete |
| API: Render data on page | H | 3hrs| 1hr | Complete |
| Styling: API data | H | 5hrs| 2.5hrs | Complete |
| Styling | H | 4hrs| 4hrs | Complete|
| About Page | L | 1.5hr| 1hr | Complete |
| Nav | L | 1.5hr| 1.5hr | Complete |
| Footer | L | 1.5hr| 1hr | Complete |
| Testing / Troubleshooting | H | 2hrs| 2hrs | Complete |
| Deployment to Netlify | H | 2hrs| - | Unable to deploy |
| Total |  | 33.5hrs| 25hrs | |


## PostMVP Timeline
| Component | Priority | Estimated Time | Actual Time | Notes |
| --- | :---: |  :---: | :---: | :---: | 
| Render Top Headlines  | M | 5hr | 0.5hr | Complete |
| Filtering News Sources | M | 5hr | 1.5hr | Complete |
| Favorites Component | M | 5hr | 5hrs | Complete |
| Total |  | 15hrs| 7hrs | |

## Additional Libraries

## Code Snippet

The NewsAPI had a number of request parameters for filtering queries based on keyword entered, Date or Date Range, Language, Country, Page Size (number of articles to display) per request, Domains of news sources, sort by - popularity or relevancy, among others. 

```
  // Make API Call
    const getNews = async (input) => {

        let newsUrl = `http://newsapi.org/v2/everything?q=${input}&from=${date}&sortBy=relevancy&language=en&domains=${trusteddomains}&pageSize=10&apiKey=7967fe7ec6e44428a417b6bc133b26f4`

        const response = await fetch(newsUrl)
        const json = await response.json()
        setNewsData(json)
    }
```

## Challenges 
1. Favorites Component and functionality.
	- I built out my app with the keyword search functionality first (MVP). Afterwards, I went on to PostMVP to add a Favorites Component where a user could save articles to read as they searched. 
	- When I started planning out the functionality for the Favorites Component  on Thursday, I thought it would make sense to add my favorites state to my Home component (where I had state), while App did not have state up to this point. I was confused because the data wasn't rendering on the Favorites page, but the favorites were being stored in the new array in state (in console.logs I could see as I clicked on the button). 
	- I realized I needed to make App to be a stateful component, have my Favorites Route in App, move my functions, and pass everything down from **App**: 
		- Move state and declare handleFavoritesClick() and removeFromFaves() functions in App
		- Route Favorites "/favorites" 
		- App => Favorites: pass down the favorites state and removeFromFaves() to Favorites
		- App => Home: pass down handleFavoritesClick() to Home 
			- Home => Article: pass down the props.handleFavoritesClick() to Article

2. Not able to deploy app due to API restrictions for free accounts

## Future Direction & Ideas
- Favorites (styling)
- Footer position issues
- Add a button that when clicked displays articles that have been sorted by category: Health, Technology, Science, World, National, Arts, Sports, Bussiness, Election, etc.

## Takeaways
- Read API documentation before deciding and look for restrictions related to deployment
- Starting out simplistic for MVP worked well - get comfortable with React
- Planning out and thinking through React architecture in detail helped
	- Account for PMVP items if will involve new component / change in where state will need to be
- Keep to a schedule
- Agenda and goals for day
- Take breaks
- Work with classmates and ask for help 
- Keep track of time spent on styling to move on or revisit later
- Research time - watching videos - when something doesn't make sense 
