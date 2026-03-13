package ai_service.services;


import ai_service.dtos.AiRequestDto;
import ai_service.dtos.AiResponseDto;
import reactor.core.publisher.Flux;


public interface AiService {

    AiResponseDto ask(AiRequestDto aiRequestDto);

    Flux<String> askStream(AiRequestDto aiRequestDto);
}
