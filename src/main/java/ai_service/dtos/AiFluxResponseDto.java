package ai_service.dtos;


import reactor.core.publisher.Flux;


public record AiFluxResponseDto(

        Flux<String> response

) {
}
