package com.ubiqum.research.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ubiqum.research.dto.GameDTO;
import com.ubiqum.research.entity.Game;
import com.ubiqum.research.repositories.GameRepository;

@Service
public class GameService {
	
	@Autowired
	public GameRepository gameRepository;
	
	@Transactional(readOnly = true)
	public List <GameDTO> getAllGames(){
		List<Game> list = gameRepository.findAll();
		return list.stream().map(x -> new GameDTO(x)).collect(Collectors.toList());
	}
}
