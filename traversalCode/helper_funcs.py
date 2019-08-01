from queue import Queue

# from map import data

def getPathToRoom(map, starting_room, target_room):
	visited = []
	q = Queue()
	q.put([(starting_room)])
	while not q.empty():
		new_room_path = q.get()
		new_room = new_room_path[-1]
		if new_room[0] == target_room:
			return [item[1] for item in new_room_path[1:]]

		if new_room[0] not in visited:
			visited.append(new_room[0])
			for exit_dir, exit in map[f'{new_room[0]}'].items():
				new_path = new_room_path[::]
				new_path.append((f'{exit}', exit_dir))
				q.put(new_path)