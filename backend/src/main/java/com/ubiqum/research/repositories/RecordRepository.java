package com.ubiqum.research.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ubiqum.research.entity.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

}
