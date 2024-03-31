.PHONY: app

up:
	docker-compose up

app:
	docker-compose exec web bash
