import hashlib
import requests

import sys
import time
import random


base_url = "https://lambda-treasure-hunt.herokuapp.com/api/bc/"
headers = {"Authorization": "Token 3b5ce4bde563d93d6ab89e3b8b9afd874e87f196"}


# TODO: Implement functionality to search for a proof 
def valid_proof(last_proof, proof):
	guess_string = f'{last_proof}{proof}'.encode()
	guess_hash = hashlib.sha256(guess_string).hexdigest()

	return guess_hash[:7] == '0000000'

def proof_of_work(last_proof):
	proof = 0
	while valid_proof(last_proof, proof) is False:
		# proof += random.randint(1, 10)
		proof += 1

	return proof



if __name__ == '__main__':
	# What node are we interacting with?
	if len(sys.argv) > 1:
		node = sys.argv[1]
	else:
		node = "http://localhost:5000"

	coins_mined = 0
	# Run forever until interrupted
	while True:
		# TODO: Get the last proof from the server and look for a new one
		res = requests.get(f"{base_url}/last_proof/", headers = headers)
		last_proof = res.json()['proof']
		time.sleep(res.json()['cooldown'])
		new_proof = proof_of_work(last_proof)
		print(new_proof)
		mine_response = requests.post(f"{base_url}/mine/", json={'proof': new_proof})
		time.sleep(mine_response.json()["cooldown"])																
		if mine_response.json()['message'] == 'success':
			coins_mined += 1
			print('total coins', str(coins_mined))