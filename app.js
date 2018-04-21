$('document').ready(function() {

 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyA62z4Ui7jtYl_z7suMaO3vIby3wofXxQM",
   authDomain: "employee-time-sheet-7d420.firebaseapp.com",
   databaseURL: "https://employee-time-sheet-7d420.firebaseio.com",
   projectId: "employee-time-sheet-7d420",
   storageBucket: "employee-time-sheet-7d420.appspot.com",
   messagingSenderId: "877961088429"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

 //initial value variables
 var name = "";
 var role = "";
 var startDate = "";
 var monthlyRate = "";

 var monthsWorked;
 var totalBilled;

    //on click event to generate the rows of employee data
    $('#addEmployee').on('click', function(event) {
        event.preventDefault();

        name = $('#employeeName').val().trim();
        role = $('#role').val().trim();
        startDate = $('#inputStartDate');
        monthlyRate = $('#inputRate').val().trim();

        console.log(role);

        //code for handling the push
        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate
        });

        

    });
















});