api = "http://localhost:8080/api/airplane/";




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
        columns: [
            {"data": "id"},
            {"data": "airplaneType"},
            {"data": "airport"},
            {"data": "fuel"}

        ]
    });

    getAirplaneData();
});

//Post functie
function postNewAirplane(){
    var airplaneTypeNewAirplane = $('#airplaneType').val();
    var airportNewAirplane = $('#airport').val();
    var lengthNewAirplane = $('#fuel').val();

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
