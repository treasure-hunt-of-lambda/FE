from map import data
from helper_funcs import getPathToRoom

from queue import Queue

import random
import json
import requests
import time

base_url = "https://lambda-treasure-hunt.herokuapp.com/api/adv"
headers = {"Authorization": "Token 3b5ce4bde563d93d6ab89e3b8b9afd874e87f196"}

# return travel data
def travel(dir):
    r = requests.post(f"{base_url}/move/", headers = headers, json= {"direction": dir}) 
    data = r.json()
    time.sleep(data["cooldown"])
    return  data

rooms = list(data.keys())

init = requests.get(f"{base_url}/init/", headers = headers) 
current_room_data = init.json()
current_room = f'{current_room_data["room_id"]}'
time.sleep(2)
while True:
	#get a random room to go to
	target_room = rooms[random.randrange(len(rooms)-1)]

	# set target_room to a specific room (shop, shrine, etc)
	# target_room = "467"
	# get the path, a list of directions eg ['s','n'...]
	path = getPathToRoom(data, current_room, target_room)

	# follow the path
	for dir in path:
		new_room_data = travel(dir)
		current_room = new_room_data["room_id"]
		print(new_room_data)

	# after getting to the last dir, it gets another target room randomly