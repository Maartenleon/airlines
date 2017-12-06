package com.maarten.airlines.airlines.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Airplane {

    /**
     * variables
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @NotNull
    private AirplaneType airplaneType;

    @NotNull
    private Airport airport;

    private int fuel;

    /**
     * constructors
     */
    public Airplane (){}

    public Airplane(Long id, AirplaneType airplaneType, Airport airport, int fuel) {
        this.id = id;
        this.airplaneType = airplaneType;
        this.airport = airport;
        this.fuel = fuel;
    }

    /**
     * getters and setters
     * @return
     */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AirplaneType getAirplaneType() {
        return airplaneType;
    }

    public void setAirplaneType(AirplaneType airplaneType) {
        this.airplaneType = airplaneType;
    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }

    public int getFuel() {
        return fuel;
    }

    public void setFuel(int fuel) {
        this.fuel = fuel;
    }
}



