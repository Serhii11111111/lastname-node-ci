# Node.js Docker CI/CD

Простий Node.js застосунок із налаштованим CI/CD за допомогою GitHub Actions, Docker Hub та AWS EC2.

## Docker

Отримати короткий хеш останнього коміту:

```bash
git rev-parse --short HEAD
```

Зібрати Docker-образ:

```bash
docker build -t serhii5/nodeapp:<git-hash> .
```

Запустити контейнер:

```bash
docker run -d --name nodeapp -p 3000:3000 serhii5/nodeapp:<git-hash>
```

Застосунок працює на порту `3000`.

## CI/CD

GitHub Actions автоматично:

1. Встановлює залежності та збирає Node.js застосунок.
2. Формує Docker-теги з назви гілки та короткого хешу коміту.
3. Збирає Docker-образ.
4. Завантажує образ у Docker Hub.
5. Підключається до AWS EC2.
6. Передає `docker-compose.yml` на EC2.
7. Оновлює та запускає контейнери за допомогою Docker Compose.

Docker Hub image:

`serhii5/nodeapp`

## Docker Compose + PostgreSQL

Додаткове завдання реалізовано за допомогою Docker Compose.

Запускаються два сервіси:

- `app` — Node.js застосунок;
- `postgres` — PostgreSQL 16.

Для PostgreSQL використовується Docker volume `postgres_data`, тому дані бази зберігаються між перезапусками контейнера.

Запуск:

```bash
docker compose up -d
```

Перевірка:

```bash
docker compose ps
```

Node.js підключається до PostgreSQL через пакет `pg` та виконує SQL-запит до бази даних.

При успішному підключенні застосунок відображає:

`PostgreSQL connection: OK`

## Deployment

Застосунок автоматично розгортається на AWS EC2 після `push` у гілку `main`.

CI/CD:

`GitHub -> GitHub Actions -> Docker Hub -> AWS EC2 -> Docker Compose -> Node.js + PostgreSQL`