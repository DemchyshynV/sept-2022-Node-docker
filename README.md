Docker Commands

Ви можете все це робити в UI Docker Desktop

Ось основні команди (для Windows обов'язково виберіть термінал git bush)
```
docker ps покаже всі запущені контейнери
docker ps -a покаже всі контейнери
docker stop <id котрейнера> зупинить контейнер по id
docker stop $(docker ps -qa) зупинить всі контейнери
docker system prune -a видалить повністю всі данні про зупинені контейнери


docker compose -f <назва файлу>.yml up --build запустить всі сервіси з цього файлу
docker compose up --build запустить всі сервіси з файлу docker-compose.yml

docker compose up <назва сервісу> запустить тільки один сервіс
docker compose stop <назва сервісу> зупинить сервіс 
docker compose restart <назва сервісу> перезапустить сервіс

docker-compose run --rm <назва сервісу> <команда> запустить команду в середені сервісу (в якості команди можно використати sh, і вам відкриється термінал сервісу працює в 90% випадків)
docker compose -f <назва файлу>.yml run --rm <назва сервісу> <команда>
```
