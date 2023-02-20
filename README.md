# Assumptions
- When a parcel is marked as tracked on the Parcel details screen, the parcel is added to the statistics data and the udpated data will be displayed on the statistics screen.
- For the mobile statistics screen in figma, the footer is not visible. I assumed this was intended and have added this mobile responsiveness to the footer component.
- I have made the list of data in the statistics screen and parcel details screen scrollable with the purpose of making the application more user friendly.
- I made the navbar navigation buttons, greeting component and the logout button only visible upon logging in, despite the figma design for desktop screens showing the aforementioned to be available before logging in. This was to simulate feature acessibility only after logging in.
- I have added a landing page to add more fluidity when navigating the screens in the application. It is the default page upon logging in and can be navigated to by clicking on the SupplyAlly logo in the navbar.
- For the statistics screen, if a day has no tracked parcels it will simply display "No Parcels Tracked On This Day".
- The Tracking ID should be 11 characters long.
# Hosting
The application has been hosted on Netlify and can be accessed via https://supplyally.netlify.app/
# Getting Started 

Run npm i to install dependencies
## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\

### `npm run test`

To run Jest unit tests on the components.
The components are tested on displaying the correct text and having the right classes depending on the input props passed.

### `npm run cypress:open`

To open the Cypress platform and run interactive test suites

### `npm run cypress:run`

To run e2e testing with cypress.
The entire flow of the application is tested to ensure correct functionality of the application features which include
- Login.
- Inputting a Tracking ID to view parcel details.
- Marking a parcel as tracked.
- Viewing statistics of parcels a user has tracked according to the dates. 
- A parcel marked as tracked will be updated in the statistics page.

### Folders and files

The components folder contains the following
- Button folder contains a dynamic button component, that is used for the back, check, login and submit buttons

- Datepicker folder contains the date selection component in the Statistics screen to view the statistics of parcels tracked for each day

- Footer folder contains the footer of the page, has mobile responsive features that wrap the text in smaller screens

- Inputfield folder contains a dynamic input field component that is used for different input use cases such as login and Tracking ID input. It accepts a error message prop that displays a error message if the parent element that does field validation picks up a invalid entry

- Navbar folder contains the mobile responsive navbar componenet. The component display a menu icons on smaller screens that can be used to navigate the application using a dropdown menu. On larger screens the navbar has links that can be clicked to navigate. The logout buttons are in both the dropdown menu for smaller screens and the links for larger screens. By clicking on the SupplyAlly logo, the user is also redirected to the home page.

- Parcelinfo folder contains the individual row of information for a parcel in the parcel details screen. It display the date, time and details of the parcel in transit

- StatisticsRow folder contains the information about the parcel tracked by a user on a specific day in the statistics screen
  
- The model folder contains the interfaces for each parcel detail in the parcel details screen and the interface for each parcel row in the statistics screen

- The screens folders contains 4 screen folders
  - The login folder contains the parent container element for the login input and login button, which is the login screen
  - The Tracking folder contains the screen for inputting a parcel's tracking id and the parcel details screen to mark a parcel as tracked
  - The statistics folder contains the statistics screen that is the parent of the Datepicker component and display the list of parcels tracked for each day, the last tracked time and the total number of parcels tracked by the user
  - A simple home page was also added that introduces the application and its features

- The static data folder contains static data used to simulate the flow of data in the application. It includes static parcel details and static statistics data


Finally the app.tsx file contains the routes of the application and the login state of the application, as well as the navbar and footer components 