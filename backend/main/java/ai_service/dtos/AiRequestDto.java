package ai_service.dtos;


import jakarta.validation.constraints.NotBlank;


public record AiRequestDto(

        @NotBlank(message = "Question can not be empty")
        String question

) {
}
