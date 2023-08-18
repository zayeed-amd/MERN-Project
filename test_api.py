import requests

status = requests.get("http://localhost:8000/api/goals")
print(f"Get: {status.status_code}, {status.text}")


# status = requests.post("http://localhost:8000/api/goals", {'text': 'example'})
# print(f"Set: {status.status_code}, {status.text}")


status = requests.put("http://localhost:8000/api/goals/64df2c7b5ee401d9fb84414b", {'text': 'updated example'})
print(f"Update: {status.status_code}, {status.text}")

status = requests.delete("http://localhost:8000/api/goals/64df2c7b5ee401d9fb84414b")
print(f"Delete: {status.status_code}, {status.text}")

