package com.ubiqum.research.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ubiqum.research.entity.Game;

public interface GameRepository extends JpaRepository <Game, Long>{
 
}
