package ai_service.controllers;


import ai_service.dtos.AiFluxResponseDto;
import ai_service.dtos.AiRequestDto;
import ai_service.dtos.AiResponseDto;
import ai_service.services.AiService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/ai")
public class AiController {

    private final AiService aiService;

    @PostMapping("/ask")
    public ResponseEntity<AiResponseDto> ask(@Valid @RequestBody AiRequestDto aiRequestDto) {
        return ResponseEntity.status(HttpStatus.OK).body(aiService.ask(aiRequestDto));
    }

    @PostMapping("/ask-stream")
    public ResponseEntity<AiFluxResponseDto> askStream(@Valid @RequestBody AiRequestDto aiRequestDto) {
        return ResponseEntity.status(HttpStatus.OK).body(aiService.askStream(aiRequestDto));
    }

}
