# Project Title: 
    Productivity Planner - FlatIron Software Engineering Phase Two Project


# Project Owners: 
    1. Lisa Primeaux-Redmond 
        - GitHub userName - lredmo1 
    2. Oluwayemisi Soremekun 
        - GitHub userName - Oluwayemisi-s

# Reason for the project: 
    We built this project to apply and showcase the knowledge and skills we have acquired during the phase two of our software engineering course at FlatIron school (class of 09/21). These skills major in our use of JavaScript and React functional components, using react states to manage and manipulate dynamically changing events on the DOM, setting and using controlled forms and also the use of CSS to design our webpage amongst others.

# Motivation for the project: 
    Myself and my partner agreed that some of the things that have been most important to us during our course at FlatIron school has been our calender - to save scheduled events, our sticky notes - to keep things that require our attention at the top of our minds and which currently are all over our work area.

    This inspired us to build a single page app that can house a calendar, our to-do lists and other miscellanous lists at a glance. We thought to further spice things up a little more by adding some inspirational contents that are right at the top of the page and will help to get the day started on a good note!

    We were gretaly inspired by the google calendar and some other famous to-do list applications. While we cannot fully mirror these great apps, we believe that we could incoporate all our best things in these apps into our own custom app. 

# Project Description: 
    Our application is divided into a couple of sections as detailed below:

    Header:
    This shows our page title and houses the navigation links to other sections on our webpage such as the focus, calendar, and to-do lists section.

    Focus:
    We have a section called focus which displays what we will like to focus on for the day and what we are most grateful for. These inputs can be changed as often as the user would like to by clicking on the button at the bottom of the section. Once the button is clicked, a form to enter new inputs is displayed and the button at the bottom of the section can be clicked on again to hide the form and display previous contents. When the form is filled and completed, a PATCH request is made to our restful API and the content is updated to what the user has most recently entered.

    Calendar and new event input form:
    Our calendar section uses an external calendar library - FullCalendar from https://fullcalendar.io.
    After installing the library following directions from: 
    "https://levelup.gitconnected.com/create-a-month-week-and-day-view-calendar-with-react-and-fullcalendar-1794d76e6d06" 
    we were able to display a full calendar in our app that can be viewed by either the day, week and month. The calendar pulls data of some saved scheduled events from our restful API and populates this in the calendar on page load. Our event input form will accept new scheduled event inputs from the user including the start time and end time and once submitted, event immediately gets populated in the calendar. When an event is clicked on the calendar, the details of the event is displayed and user can either choose to keep the event or delete the event. When event is deleted, it is deleted form both the calendar and API forever.

    To-Do lists section:
    This section focuses on managing goals and important lists for the user. It is divided into short-term goals list, long-term goals list, pinned items list and shopping lists. These are lists that myself and my partner agreed were essential to our day-to-day living. Each list can be clicked on to see saved items on the list. Each item on the list is displayed in either red or black based on their priority level and can be deleted, marked as either complete/incomplete. New items can also be added to each of these list.

# Learnings and Struggles:
    One major thing we struggled with and learnt during the development of this project was the use of an external library, reading their documentation and incoporating their code with our desires for our project. Doing this was quite challenging as this was our first experience with using a library that was not built by react but we were able to make something out of it. 

# Acknowledgments:
    This project was acheiveable with all the various resources that has been provided by the Bootcamp. Our instructor spent a lot of time helping us while we struggled to understand how to use the calendar library as well as offer advice every step of the way. 



