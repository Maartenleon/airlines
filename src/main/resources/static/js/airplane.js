api = "http://localhost:8080/api/airplane/";

var isChecked = false;

//Get data in datatable
function getAirplaneData() {
    console.log("getting data...");

    $.ajax({
        url: "http://localhost:8080/api/airplane/all",
        type: "GET",
        success: function(airplane) {

             $('#dataTable').DataTable().clear();
             $('#dataTable').DataTable().rows.add(airplane);
             $('#dataTable').DataTable().columns.adjust().draw();
        }
    });
}

//dataTable
$(document).ready(function(){
    $("#dataTable").DataTable({
        select: {
            style:'os',
            selector:'td:first-child'
        },
        order:[[1,'asc']],
        columns: [
            {"data": "id"},
            {"data": "airplaneType"},
            {"data": "airport"},
            {"data": "fuel"}

        ],
        columnDefs:[{
            orderable:false,
            className:'select-checkbox',
            targets: 0
        }]
    });

    //validation checkbox
    $('input[name=checkbox]').change(function(){
        if($(this).is(':checked')) {
            // checkbox is checked
            isChecked = true;
        } else {
            // Checkbox is not checked..
             isChecked = false;
        }
    });

    $('#errorCancel').click( function () {
        $("#errorModal").modal("toggle");
    } );

    getAirplaneData();
});

//Post functie
function postNewAirplane(){

    if(!isChecked){
        console.log('You must tick the checkbox.');
        $('#errorModal').modal("toggle");
        return;
    }
    var airplaneTypeNewAirplane = $('#airplaneType').val();
    var airportNewAirplane = $('#airport').val();
    var fuelNewAirplane = $('#fuel').val();

    var newAirplane = {
        airplaneType : airplaneTypeNewAirplane,
        airport : airportNewAirplane,
        fuel : fuelNewAirplane
    };

    var validJsonAirplane = JSON.stringify(newAirplane);

    $.ajax({
        url: "http://localhost:8080/api/airplane/add",
        type: "POST",
        data: validJsonAirplane,
        contentType: "application/json",
        success: function(result){
            getAirplaneData();
        }
    });

}

function getSelectAirplane(){
    $('#dataTable > tbody > tr.selected').each(function(i,row){
        getObjectAndSetInputFields(row);
    });
}

// Remove selected airplane
function removeSelectedAirplane(){
    $('#dataTable > tbody > tr.selected').each(function(i,row){
        getAirplaneAndRemoveIt(row);
    });
}

// Remove airplane
function getAirplaneAndRemoveIt(row){
    // Get data of datatable
    var table = $("#dataTable").DataTable();
    // get object of the row
    var dataObject = table.row(row).data();

    console.log("delete airplane...");

    // Make a delete airplane
    $.ajax({
        url:"http://localhost:8080/api/airplane/delete/" + dataObject['id'],
        type:"delete",
        success: function(result){
            // Get the airplanes again
            getAirplaneData();
            // Show confirmation!
            $("#airplaneRemovedMessage").show();
        }
    });
}

var currentId;

// Populate the modal with a object
function getObjectAndSetInputFields(row) {

    // Get data of datatable
    var table = $("#dataTable").DataTable();
    // get object of the row
    var dataObject = table.row(row).data();
    // Save the id of the current airplanes in the variable
    currentId = dataObject.id;
    // Populate al inputfield in the modal
    $("#editAirplaneType").val(dataObject.airplaneType);
    $("#editAirport").val(dataObject.airport);
    $("#editFuel").val(dataObject.fuel);

    /// Opens the modal in AirplaneOverview
    $('#editModal').modal('show');
}


// Posts the data to the server
function postData(airplane){
    $.ajax({
        url:"http://localhost:8080/api/hotel/airplane/add",
        type:"post",
        data: airplane,
        contentType: "application/json",
        success: function(result){
            console.log("Added airplane.");

            // Close the modal
            $("#myModal").modal("toggle");
            // Get the airplanes again
            getAirplaneData();
            // Show confirmation!
            $("#airplaneAddedMessage").show();
        }
    });
}

function putData(){

    var selectedAirplaneData = {};
    selectedAirplaneData.id = currentId;
    selectedAirplaneData.airplaneType = $("#editAirplaneType").val();
    selectedAirplaneData.airport = $("#editAirport").val();
    selectedAirplaneData.fuel = $("#editFuel").val();

    if(selectedAirplaneData.fuel < 2) {
        return;
    }
    else {
        selectedAirplaneData.fuel = selectedAirplaneData.fuel - 2;
    }


    var selectedAirplaneJson = JSON.stringify(selectedAirplaneData);

    $.ajax({
        url:"http://localhost:8080/api/airplane/update/",
        type:"put",
        data: selectedAirplaneJson,
        contentType: "application/json",
        success: function(result){
            console.log("Updated airplane.");

            // Close the modal
            $("#editModal").modal("toggle");
            // Get the airplanes again
            getAirplaneData();
            // Show confirmation!
            $("#airplaneUpdatedMessage").show();
        }
    });
}

