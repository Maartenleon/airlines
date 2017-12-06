package com.maarten.airlines.airlines.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

public class Airplane {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @NotNull
    private String AirplaneType;

    @NotNull
    private Airport airport;

    private int Fuel;

    public Airplane (){}

    public Airplane(Long id, String airplaneType, Airport airport, int fuel) {
        this.id = id;
        AirplaneType = airplaneType;
        this.airport = airport;
        Fuel = fuel;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAirplaneType() {
        return AirplaneType;
    }

    public void setAirplaneType(String airplaneType) {
        AirplaneType = airplaneType;
    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }

    public int getFuel() {
        return Fuel;
    }

    public void setFuel(int fuel) {
        Fuel = fuel;
    }
}



