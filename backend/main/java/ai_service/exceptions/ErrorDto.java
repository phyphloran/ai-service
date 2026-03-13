package ai_service.exceptions;


import java.util.List;


public record ErrorDto(

        List<String> errorMessages

) {
}
