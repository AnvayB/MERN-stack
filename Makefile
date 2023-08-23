server:
	npm run server

# CRUD commands
get:
	curl http://localhost:5000/api/goals
set:
	curl -X POST http://localhost:5000/api/goals	
update:
	curl -X PUT http://localhost:5000/api/goals/1
delete:	
	curl -X DELETE http://localhost:5000/api/goals/1

add:
	git status
	git add .
	git status

# git commit -m "message"

trials:
	git push origin trials

main:
	git checkout main
	git branch
	git pull
	git checkout trials