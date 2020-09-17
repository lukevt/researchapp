package com.ubiqum.research.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubiqum.research.dto.RecordDTO;
import com.ubiqum.research.dto.RecordInsertDTO;
import com.ubiqum.research.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordController {
	
	@Autowired
	private RecordService service;
	
	@PostMapping
	public ResponseEntity<RecordDTO> postRecord(@RequestBody RecordInsertDTO dto){
		RecordDTO newDTO = service.insert(dto);
		return ResponseEntity.ok().body(newDTO);
	}
	
	
	

}
