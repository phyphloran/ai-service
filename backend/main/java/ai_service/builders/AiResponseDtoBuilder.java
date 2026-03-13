package ai_service.builders;


import ai_service.dtos.AiFluxResponseDto;
import ai_service.dtos.AiResponseDto;
import reactor.core.publisher.Flux;


public interface AiResponseDtoBuilder {

    AiResponseDto toAiResponse(String string);

    AiFluxResponseDto toAiResponseStream(Flux<String> string);

}
