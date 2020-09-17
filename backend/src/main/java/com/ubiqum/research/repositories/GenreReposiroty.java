package com.ubiqum.research.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ubiqum.research.entity.Genre;

public interface GenreReposiroty  extends JpaRepository<Genre, Long>{

}
