#!/bin/sh

ollama serve &

until ollama list >/dev/null 2>&1; do
  echo "Ждём Ollama сервер..."
  sleep 1
done

if ! ollama list | grep -q "gemma3:1b"; then
  echo "Модель не найдена, подтягиваем..."
  ollama pull gemma3:1b
else
  echo "Модель уже есть, пропускаем скачивание"
fi

wait