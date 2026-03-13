package ai_service.services.impl;


import ai_service.builders.AiResponseDtoBuilder;
import ai_service.dtos.AiFluxResponseDto;
import ai_service.dtos.AiRequestDto;
import ai_service.dtos.AiResponseDto;
import ai_service.services.AiService;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;


@Service
@RequiredArgsConstructor
public class AiServiceImpl implements AiService {

    private final ChatModel chatModel;

    private final AiResponseDtoBuilder aiResponseDtoBuilder;

    @Override
    public AiResponseDto ask(AiRequestDto aiRequestDto) {
        String question = aiRequestDto.question();
        String response = chatModel.call(question);
        return aiResponseDtoBuilder.toAiResponse(response);
    }

    @Override
    public AiFluxResponseDto askStream(AiRequestDto aiRequestDto) {
        String question = aiRequestDto.question();
        Flux<String> response = chatModel.stream(question);
        return aiResponseDtoBuilder.toAiResponseStream(response);
    }

}
