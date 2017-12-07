package com.maarten.airlines.airlines.controllers;

import com.maarten.airlines.airlines.models.Airplane;
import com.maarten.airlines.airlines.models.Airport;
import com.maarten.airlines.airlines.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/airplane")
public class AirplaneController {

    /**
     * this function is meant to ceate an airplane
     **/
    @Autowired
    private AirplaneRepository airplaneRepository;

    /**
     * Update function for airplanes.
     * @param airplane The new guest to put at a certain place. Keep in mind that the guest with this ID
     *              will be overwritten.
     */
    @RequestMapping(value = "update", method = RequestMethod.PUT)
    public void updateAirplane(@RequestBody Airplane airplane){
        if(airplane != null){
            Airplane guestFromTable = airplaneRepository.findOne(airplane.getId());
            if(guestFromTable != null){
                airplaneRepository.save(airplane);
            }
        }
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void addAirplane(@RequestBody Airplane airplane) {airplaneRepository.save(airplane);}

    /**
     * this function is meant to get all airplanes
     * @return all the airplane information
     **/
    @RequestMapping(value = "all", method = RequestMethod.GET)
    public Iterable<Airplane> getAirplane() {return airplaneRepository.findAll();}

    /**
     * this function is meant to get one airplane
     * @return one airplane information
     **/
    @RequestMapping(value = "edit/{id}", method = RequestMethod.GET)
    public Airplane getAirplane(@PathVariable long id) {return airplaneRepository.findOne(id);}

    /**
     * this function is meant to delete one airplane
     * @delete one airplane information
     **/
    @RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE)
    public void removeAirplane(@PathVariable long id) {
        Airplane airplane = airplaneRepository.findOne(id);
        airplaneRepository.delete(airplane);
    }
}
