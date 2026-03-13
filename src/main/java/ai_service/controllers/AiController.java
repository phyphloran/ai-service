package ai_service.controllers;


import ai_service.dtos.AiRequestDto;
import ai_service.dtos.AiResponseDto;
import ai_service.services.AiService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/ai")
public class AiController {

    private final AiService aiService;

    @PostMapping(value = "/ask")
    public ResponseEntity<AiResponseDto> ask(@Valid @RequestBody AiRequestDto aiRequestDto) {
        return ResponseEntity.status(HttpStatus.OK).body(aiService.ask(aiRequestDto));
    }

    @PostMapping(value = "/ask-stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> askStream(@Valid @RequestBody AiRequestDto aiRequestDto) {
        return aiService.askStream(aiRequestDto);
    }

}
