package com.ubiqum.research.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ubiqum.research.entity.Game;

@Repository
public interface GameRepository extends JpaRepository <Game, Long>{
 
}
