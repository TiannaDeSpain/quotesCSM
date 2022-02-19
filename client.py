import requests

quest = input("Which quote would you like? 1, 2 or 3?")


url = "http://localhost:3000/quote/" + quest

print(url)

gift = requests.get(url)
response_item = gift.json()

print(response_item["message"])