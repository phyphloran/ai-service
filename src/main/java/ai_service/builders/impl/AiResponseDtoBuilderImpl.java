package ai_service.builders.impl;


import ai_service.builders.AiResponseDtoBuilder;
import ai_service.dtos.AiFluxResponseDto;
import ai_service.dtos.AiResponseDto;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;


@Service
public class AiResponseDtoBuilderImpl implements AiResponseDtoBuilder {

    @Override
    public AiResponseDto toAiResponse(String string) {
        return new AiResponseDto(string);
    }

    @Override
    public AiFluxResponseDto toAiResponseStream(Flux<String> string) {
        return new AiFluxResponseDto(string);
    }
}
