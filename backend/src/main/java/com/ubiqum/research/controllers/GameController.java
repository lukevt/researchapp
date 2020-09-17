package com.ubiqum.research.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubiqum.research.dto.GameDTO;
import com.ubiqum.research.services.GameService;

@RestController
@RequestMapping("/games")
public class GameController {
	
	@Autowired
	private GameService service;
	
	@GetMapping
	public ResponseEntity<List<GameDTO>> getAllGames(){
		List <GameDTO> list = service.getAllGames();
		return ResponseEntity.ok().body(list);
	}

}
