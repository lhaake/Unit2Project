# Project Overview - Leah Haake

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Monday| Project Approval, Project Worksheet Due, Begin Building Application Structure | Complete
|Day 2 - Tuesday| MVP, Application Structure & Working with API | Complete
|Day 3 - Wednesday| MVP, Styling API data, & PostMVP  | Complete
|Day 4 - Thursday| Styling, PostMVP, Work on ReadME & Deployment to Netlify | -
|Day 5 - Friday| Final Touches, Work on ReadME, Update Project Worksheet & Presentation | -


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
- Issues related to deployment - localhost only for free accounts

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
| Squad Meetings with Joe | H | 4hrs| 4hrs | Complete |
| Setup React App on VS Code | H | 1hr| 0.5hr | Complete |
| Setup Components | H | 1hr| 1hr | Complete |
| Working with Components | H | 3hrs| 3hrs | Complete |
| Working with API | H | 2hrs| 1hr | Complete |
| Research | H | 2hrs| 3.5hrs | Complete |
| API: Render data on page | H | 3hrs| 1hr | Complete |
| Styling: API data | H | 5hrs| 2hrs | Complete |
| Responsive Design | H | 4hrs| 2hrs | Complete|
| About Page | L | 1.5hr| 1hr | Complete |
| Nav | L | 1.5hr| 1hr | Complete |
| Footer | L | 1.5hr| 1hr | Complete |
| Testing / Troubleshooting | H | 2hrs| 2hrs | Complete |
| Deployment to Netlify | H | 2hrs| - | Unable to deploy |
| Total |  | 33.5hrs|  | |


## PostMVP Timeline
| Component | Priority | Estimated Time | Actual Time | Notes |
| --- | :---: |  :---: | :---: | :---: | 
| Render Top Headlines  | M | 5hr | 0.75hr | Complete |
| Filtering News Sources | M | 5hr | 1.5hr | Complete |
| Favorites Component | M | 5hr | 3.5hrs | Complete |
| Total |  | 15hrs| 5.75hrs | |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions

#### Issue 1: 
**ERROR**:                    
**RESOLUTION**:  


## Future Direction & Ideas


## Lessons Learned 