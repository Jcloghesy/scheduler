# **INTERVIEW SCHEDULER**

## OVERVIEW

Interview Scheduler is a single page application that allows users to book appointments for interviews.  


The application offers users the following functionality:
- view the entire schedule of appointments
- select between different days and book an interview
- viewing the number of available interview bookings still available for each day
- ability to edit or delete existing appointments
<br>
<br>  
&nbsp;

## FINAL PRODUCT: SCREENSHOTS

*A. Schedule page showing appointments for Monday*
!["Screenshot main page Monday selected"](https://github.com/Jcloghesy/scheduler/blob/master/docs/Main_Page_Monday.png?raw=true)

*B. Schedule page showing new appointment form*
!["Screenshot of main page with new appointment form"](https://github.com/Jcloghesy/scheduler/blob/master/docs/New_Appointment.png?raw=true)

*C. Schedule page showing confirmation message before an appointment is deleted*
!["Screenshot of delete confirmation message"](https://github.com/Jcloghesy/scheduler/blob/master/docs/Confirm_Delete.png?raw=true)

*D. Schedule page showing appointment on hover (displaying Edit and Delete buttons)*
!["Screenshot of hovered appointment"](https://github.com/Jcloghesy/scheduler/blob/master/docs/Mouse_Over_Appointment.png?raw=true)
<br>
<br>
&nbsp;


## USAGE

#### A. INSTALLATION: REPOSITORY & DEPENDENCIES
  
  1. Clone Repository
      - Clone this repository onto your local device using the following command <br>
        ``` 
        git clone https://github.com/Jcloghesy/scheduler
        ```
  2. Install Dependencies
      - In code editor (e.g., VS Code)
      - Navigate to the project directory: `cd scheduler`
      - Install dependencies with the following command
        ```
        npm install
        ```
        
#### B. VIEW APPLICATION & TESTING

  1. View Application
      - View the application in browser using the following command <br>
        ```
        npm start
        ```  
  2. Application Testing:
      - For application testing using Storybook, Jest and Cypress* use the following commands <br>
        ```
        npm run storybook
        ```
        ```
        npm test
        ```
        ```
        npm run cypress
        ```
            * Cypress requires additional repository provided by Lighthouse Labs
             run in test mode using `npm run test:server` while running the app
             https://github.com/lighthouse-labs/scheduler-api

<br>
&nbsp;


## TECHNOLOGIES EMPLOYED

  Interview Scheduler has been built using React and features dynamic rendering of components, updating as the state of the data changes. Additional technologies were employed in the development of this application including:  

- [Storybook][Storybook]
- [Jest][Jest]
- [Cypress][Cypress]
- [React][React]
- [axios][axios]
- [Node.js][Node.js]
- [npm][npm]
- [webpack-dev-server][webpack-dev-server]

(This project is built on a [template][LHL scheduler template] supplied by [lighthouse labs][Lighthouse Labs - GitHub])
<br>
<br>
&nbsp;


<!-- REFERENCE LINKS -->

<!-- TECHNOLOGIES  --> 
[Storybook]:(https://storybook.js.org/)
[Jest]:(https://jestjs.io/)
[Cypress]:(https://www.cypress.io/app/)
[React]:(https://react.dev/)
[axios]:(https://www.npmjs.com/package/axios)
[Node.js]:(https://nodejs.org/en)
[npm]:(https://www.npmjs.com/)
[webpack-dev-server]:(https://www.npmjs.com/package/webpack-dev-server)


<!-- Additional Website Links -->
[Lighthouse Labs - GitHub]: https://github.com/lighthouse-labs
[LHL scheduler template]: https://github.com/lighthouse-labs/scheduler/
