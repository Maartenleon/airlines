api = "http://localhost:8080/api/airplane/";



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

    getAirplaneData();
});

//Post functie
function postNewAirplane(){
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

// Remove selected guest
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
