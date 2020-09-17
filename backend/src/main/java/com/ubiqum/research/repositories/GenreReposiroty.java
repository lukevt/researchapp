package com.ubiqum.research.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ubiqum.research.entity.Genre;

@Repository
public interface GenreReposiroty  extends JpaRepository<Genre, Long>{

}
