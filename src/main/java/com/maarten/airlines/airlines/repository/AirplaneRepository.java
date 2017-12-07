package com.maarten.airlines.airlines.repository;

import com.maarten.airlines.airlines.models.Airplane;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirplaneRepository extends CrudRepository<Airplane, Long>{
}

