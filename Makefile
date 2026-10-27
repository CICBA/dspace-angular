include docker/.env

.PHONY: up update build down start stop prune ps bash logs cli merge-i18n

COMPOSE = docker compose --env-file docker/.env -f docker/docker-compose.yml -f docker/docker-compose.cic.yml

default: up

up:
	@echo "Starting up containers for $(COMPOSE_PROJECT_NAME)..."
	@$(COMPOSE) up
 	#queda en forwground intencionalmente

update:
	@echo "Cleaning containers code, including 'node_modules' libraries, .css files, etc. Then install dependencies again..."
	$(COMPOSE) run --workdir=/app --rm dspace-angular sh -c "npm run clean && npm ci && npm run build"

build:
	@echo "Building image from Dockerfile..."
	@$(COMPOSE) build

stop: down

start: up

down:
	@echo "Stopping containers for $(COMPOSE_PROJECT_NAME)..."
	@$(COMPOSE) stop

prune:
	@echo "Removing containers for $(COMPOSE_PROJECT_NAME)..."
	@$(COMPOSE) down -v

ps:
	@docker ps --filter name='$(COMPOSE_PROJECT_NAME)*'

bash:
	@$(COMPOSE) exec dspace-angular /bin/sh

logs:
	@$(COMPOSE) logs --follow --tail=100 dspace-angular

cli:
	@docker compose --env-file docker/.env -f docker/cli.yml run --rm dspace-cli $(filter-out $@,$(MAKECMDGOALS))

merge-18n:
	@$(COMPOSE) exec dspace-angular npm run merge-i18n -- -s src/themes/cicba/assets/i18n


# https://stackoverflow.com/a/6273809/1826109
%:
	@:
