include .env

.PHONY: up update build dsbin down start stop prune ps bash logs cli

default: up

up:
	@echo "Starting up containers for $(COMPOSE_PROJECT_NAME)..."
	@docker-compose -f docker/docker-compose.yml up
 	#queda en forwground intencionalmente
up-rest:
	@echo "Starting up containers for $(COMPOSE_PROJECT_NAME)..."
	@docker-compose -f docker/docker-compose.yml -f docker/docker-compose-rest.yml up -d

update:
	@echo "Cleaning containers code, including 'node_modules' libraries, .css files, etc. Then install dependencies again..."
	docker-compose -f docker/docker-compose.yml run --workdir=/app --rm dspace-angular sh -c "yarn run clean && yarn install --force && yarn run build"

build:
	@echo "Building image from Dockerfile..."
	@docker-compose -f docker/docker-compose.yml build

stop: down

start: up

down:
	@echo "Stopping containers for $(COMPOSE_PROJECT_NAME)..."
	@docker-compose -f docker/docker-compose.yml stop

prune:
	@echo "Removing containers for $(COMPOSE_PROJECT_NAME)..."
	@docker-compose -f docker/docker-compose.yml down -v

ps:
	@docker ps --filter name='$(COMPOSE_PROJECT_NAME)*'

bash:
	@docker-compose -f docker/docker-compose.yml exec dspace-angular /bin/sh

logs:
	@docker-compose -f docker/docker-compose.yml -f docker/docker-compose-rest.yml logs --follow --tail=100 $(filter-out $@,$(MAKECMDGOALS))

cli:
	@docker-compose -f docker/cli.yml run --rm dspace-cli $(filter-out $@,$(MAKECMDGOALS))

merge-18n:
	@docker-compose -f docker/docker-compose.yml exec dspace-angular yarn --cwd scripts/ merge-i18n -s src/themes/cicba/assets/i18n


# https://stackoverflow.com/a/6273809/1826109
%:
	@:
