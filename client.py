# import library requests
import requests

# user friendly message
print("Welcome to Tianna's Client Server Model")
print("You can now request a quote from the server!")

# prompt for user input
quest = input("Which quote would you like? 1, 2 or 3?")

# create unique url for request
url = "http://localhost:3000/quote/" + quest

# retrieving from server
gift = requests.get(url)

# parsing response to json object
response_item = gift.json()

# displaying desired message
print("You chose a good one!")
print("The quote is:")
print(response_item["message"])
