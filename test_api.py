import requests

status = requests.get("http://localhost:8000/api/goals")
print(f"Get: {status.status_code}, {status.text}")


status = requests.post("http://localhost:8000/api/goals", {'texuut': 'example'})
print(f"Set: {status.status_code}, {status.text}")


status = requests.put("http://localhost:8000/api/goals/21")
print(f"Update: {status.status_code}, {status.text}")

status = requests.delete("http://localhost:8000/api/goals/22")
print(f"Delete: {status.status_code}, {status.text}")

