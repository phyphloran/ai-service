# AI Service

<div align="center">
  
  ### Интерфейс приложения
  
  | Главный экран | Диалог с AI |
  |:---:|:---:|
  | ![Главный экран](https://github.com/phyphloran/ai-service/blob/main/pics/main_pic.png) | ![Диалог с AI](https://github.com/phyphloran/ai-service/blob/main/pics/dialog_pic.png) |
  
  *Современный веб-интерфейс для взаимодействия с AI-моделями*
  
</div>

Современное веб-приложение с интеграцией искусственного интеллекта, построенное на **Spring Boot** и **Spring AI** с фронтендом на **React + TypeScript**.  
Проект предоставляет удобный интерфейс для взаимодействия с AI-моделями через REST API.

---

## Возможности

- Интеграция с AI через Spring AI
- Поддержка локальных LLM моделей через Ollama
- Современный интерфейс на React + TypeScript + Vite
- REST API на Spring Boot 3
- Чистая архитектура с разделением frontend / backend
- Контейнеризация через Docker
- Быстрая разработка и горячая перезагрузка

---

## Технологический стек

#### Backend
- Java 21
- Spring Boot 3
- Spring AI
- Spring Web
- Spring Validation
- Lombok
- Maven

#### Frontend
- React
- TypeScript
- Vite

#### DevOps
- Docker
- Docker Compose

#### AI
- Spring AI 
- локальные LLM модели через Ollama

---

## Запуск проекта

Клонировать репозиторий:
```bash
git clone https://github.com/phyphloran/ai-service.git 
```
Перейти в папку проекта:
```bash
cd ai-service
```

Запустить сервисы:
```bash
docker-compose up
```
После успешного запуска вы должны увидеть работающие контейнеры:

<div align="center">
  
  | Запущенные контейнеры |
  |:---:|
  | ![Docker контейнеры](https://github.com/phyphloran/ai-service/blob/main/pics/containers.png) |
  
  *Запущенные контейнеры проекта*
  
</div>

Проект будет доступен по адресу: **http://localhost:5173/**

Проект будет доступен по адресу: **http://localhost:5173/**
