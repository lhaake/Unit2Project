# Project Overview - Leah Haake

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Monday| Project Approval, Project Worksheet Due, Begin Building Application Structure | Done
|Day 2 - Tuesday| MVP, Application Structure & Working with API | Done
|Day 3 - Wednesday| MVP, Working with API, Styling & PostMVP  | -
|Day 4 - Thursday| Styling, PostMVP, Work on ReadME & Deployment to Netlify | -
|Day 5 - Friday| Final Touches, Work on ReadME, Update Project Worksheet & Presentation | -


## Project Links

- [My github repo link](https://github.com/lhaake/Unit2Project)
- [add your deployment link]()

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I'm interested in creating an app that displays daily top headlines for a specifc day. 
Other ideas: 
- filtering news articles based on category (covid19, tech, etc) 
- search by keyword 
- filter news by source
- top headlines on page load


## API

I've chosen the [NewsAPI](https://newsapi.org/docs/endpoints/sources)

**NewsAPI Limitations** 
- News Sources are limited (81 English language sources and 55 US-based sources)
- Top headlines vary in their reputability (some sources I've never heard of) and not sure how they are being pulled if not from a source list (null) -- *look into this in the documentation*
- Request limit for free account: 500 per day
- Requires an API key 

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

## Notes 

- I created a static data.js file in case I reach a request limit (in the event of an infinite loop)
- Think about when someone searches a keyword and there are no matches. Conditional rendering 


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [My draft wireframe](https://res.cloudinary.com/lhaake/image/upload/v1601645247/Unit%202%20-%20React%20Project/Draft%20Wireframe%2010/1.jpg)
- [Mobile](https://res.cloudinary.com/lhaake/image/upload/v1601674862/Unit%202%20-%20React%20Project/Wireframes%20/Mobile%20Version.png)
- [Tablet](https://res.cloudinary.com/lhaake/image/upload/v1601674862/Unit%202%20-%20React%20Project/Wireframes%20/Tablet%20Version.png)
- [Desktop](https://res.cloudinary.com/lhaake/image/upload/v1601674862/Unit%202%20-%20React%20Project/Wireframes%20/Desktop%20Version.png)
- [React architecture](https://docs.google.com/drawings/d/1x1BCh18IVVlyKlMaCmLbjEi0czuRpNbDz5qAuVNrp70/edit)

## Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

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
| Squad Meetings with Joe | H | 4hrs|  | - |
| Setup React App on VS Code | H | 1hr| 0.5hr | - |
| Setup Components | H | 1hr|  | - |
| Working with Components | H | 3hrs|  | - |
| Working with API | H | 2hrs|  | - |
| Research | H | 2hrs|  | - |
| API: Render data on page | H | 3hrs|  | - |
| Styling: API data | H | 5hrs|  | - |
| Responsive Design | H | 4hrs|  | - |
| About Page | L | 1.5hr|  | - |
| Nav | L | 1.5hr|  | - |
| Footer | L | 1.5hr|  | - |
| Testing | H | 2hrs|  | - |
| Deployment to Netlify | H | 2hrs|  | - |
| Total |  | 33.5hrs|  | |


## PostMVP Timeline
| Component | Priority | Estimated Time | Actual Time | Notes |
| --- | :---: |  :---: | :---: | :---: | 
| Render Top Headlines  | M | 5hr |  |  |
| Filtering News Sources | M | 5hr |  |  |
| Favorites Component | M | 5hr | |  |
| Total |  | 20hrs|  | |

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