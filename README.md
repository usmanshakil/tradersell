# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



npm i --save redux react-redux
npm i redux-thunk
npm i redux-persist
npm i redux-debounced




Data {"drivetrain":{"step":6,"vin":"1","drivetrain":"1","engine":"1","year":"1","make":"11","model":"11","state":"1","city":"1","zipCode":"1","phone":"-1","odometer":"1","transmission":"1","trim":"1","fuel_type":"1","body_type":"1","condition":"used","exterior_color":"required1","primary_photo":"","additional_photos":"","vehicle_driving":"yes","transmission_issue":"yes","drivetrain_issue":"yes","steering_issue":"yes","brake_issue":"yes","suspension_issue":"yes","minor_body_damage":"yes","moderate_body_damage":"yes","major_body_damage":"yes","scratches":"yes","glass_damaged_cracked":"yes","lights_damaged_cracked":"yes","minor_body_rust":"yes","moderate_body_rust":"yes","major_body_rust":"yes","aftermarket_parts_exterior":"yes","mismatched_paint_colors":"yes","previous_paint_work":"yes","seat_damage":"yes","carpet_damage":"yes","dashboard_damage":"yes","interior_trim_damage":"yes","sunroof":"yes","navigation":"yes","aftermarket_stereo_equipment":"yes","hvac_not_working":"yes","leather_Or_Leather_type_seats":"yes","radius":"20","loading":false},"engine":"1","year":"1","make":"11","model":"11","state":"1","city":"1","zipCode":"1","phone":"-1"} {"odometer":"1","transmission":"1","trim":"1","fuel_type":"1","body_type":"1","condition":"used","exterior_color":"required1","primary_photo":"","additional_photos":""} {"vehicle_driving":"yes","transmission_issue":"yes","drivetrain_issue":"yes","steering_issue":"yes","brake_issue":"yes","suspension_issue":"yes"} {"minor_body_damage":"yes","moderate_body_damage":"yes","major_body_damage":"yes","scratches":"yes","glass_damaged_cracked":"yes","lights_damaged_cracked":"yes","minor_body_rust":"yes","moderate_body_rust":"yes","major_body_rust":"yes","aftermarket_parts_exterior":"yes","mismatched_paint_colors":"yes","previous_paint_work":"yes"} {"seat_damage":"yes","carpet_damage":"yes","dashboard_damage":"yes","interior_trim_damage":"yes","sunroof":"yes","navigation":"yes","aftermarket_stereo_equipment":"yes","hvac_not_working":"yes","leather_Or_Leather_type_seats":"yes"} {"make":"11","model":"11","radius":"20"}


uplpoad 
   handleImageChange(e) { 
        console.log("enter")
         e.preventDefault(); 
      
        var images= []
        //  let files = Array.from(e.target.files); 
        //    files.forEach((file) => {
        //        images.push(file) 
        //    }); 
          this.setState({additional_photos:e.target.files})
          console.log("iamges"+this.state.additional_photos)
       }
       handleUpload(){
        var x = this.state.additional_photos.map((val) => {
            return val.file;
           });
           var data;
          for (let i = 0; i < x.length; i++) {
        //    data.append('bannerImages[' + i + ']', x[i]);
           data('bannerImages[' + i + ']', x[i]);

          }
          alert(data)
        
       }