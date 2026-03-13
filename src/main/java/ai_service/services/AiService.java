package ai_service.services;


import ai_service.dtos.AiFluxResponseDto;
import ai_service.dtos.AiRequestDto;
import ai_service.dtos.AiResponseDto;


public interface AiService {

    AiResponseDto ask(AiRequestDto aiRequestDto);

    AiFluxResponseDto askStream(AiRequestDto aiRequestDto);

}
