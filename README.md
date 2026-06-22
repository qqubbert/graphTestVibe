# Тестовое задание с построением графиков (React + Recharts Dashboard)

![Демонстрация работы](./public/testGraphPreview.webp)

Интерактивный прототип графического дашборда с редактируемыми данными и конфигурацией серий.

## Stack
- React 18
- TypeScript
- Vite
- Recharts
- Framer Motion

## Запуск приложения
### 1. Установка библиотек
```npm install```
### 2. Запуск сервера для разработки
```npm run dev```

После запуска приложение доступно по:
```http://localhost:5173```

## Production build
```npm run build```

## Структура проекта
```
src/
 ├── entities/
 │    ├── ChartTooltip/
 │    ├── Dots/
 │    │    ├── CircleDot/
 │    │    ├── HaloDot/
 │    │    ├── DiamondDot/
 │    │    └── SquareDot/
 │    └── chart/
 │         ├── MixedChart.css
 │         └── MixedChart.tsx
 ├── widgets/
 │    ├── ChartEditor/
 │    └── SeriesEditor/
 ├── shared/
 │    ├── data/
 │    │    └── testData.ts
 │    └── types/
 │         └── types.ts
 └── pages/
      └── Dashboard/
```

## Модели данных
### Данные графиков (ChartRow)
Каждая строка объекта отвечает за точку на графике:
```
{
  date: string;
  area: number;
  spline: number;
  line: number;
  bar: number;
}
```
### Настройка графиков (SeriesConfig)
Определяет внешний вид графика:
```
{
  name: string;
  color: string;
  color2: string;
}
```

## Использование различных данных
### 1. Значения по умолчанию (testData)
По умолчанию используются данные из файла:
```"./src/shared/data/testData.ts";```
### 2. Замена данных через файл
Изменить файл:
```src/shared/data/testData.ts```
Пример:
```
export const data = [
  {
    date: "2026-01-01",
    area: 100,
    spline: 200,
    line: 150,
    bar: 10,
  },
];
```

### 3. Использование данных из стороннего файла
Для этого нужно заменить импорт тестовых данных в файле ```./src/pages/Dashboard/Dashboard.tsx```:
```import { data as testData } from "../../shared/data/yourDataFile";```

### 4. Изменение данных через интерфейс (UI)
Возможности изменения данных:
- Изменение существующих данных
- Добавление новых
- Удаление данных
