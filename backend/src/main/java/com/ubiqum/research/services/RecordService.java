package com.ubiqum.research.services;

import java.time.Instant;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ubiqum.research.dto.RecordDTO;
import com.ubiqum.research.dto.RecordInsertDTO;
import com.ubiqum.research.entity.Game;
import com.ubiqum.research.entity.Record;
import com.ubiqum.research.repositories.GameRepository;
import com.ubiqum.research.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	public RecordRepository repository;
	
	@Autowired
	public GameRepository gameRepo;
	
	@Transactional
	public RecordDTO insert (RecordInsertDTO dto){
		Record entity = new Record();
		entity.setName(dto.getName()); 
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepo.getOne(dto.getGameId());
		entity.setGame(game);
		entity = repository.save(entity);
		return new RecordDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
		return repository.findByMoments(minDate, maxDate, pageRequest).map(x -> new RecordDTO(x));
	}
}
