package com.ubiqum.research.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ubiqum.research.entity.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}
