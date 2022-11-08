import os
import json
import boto3
from random import choice, randint, shuffle

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
           'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
           'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

# Generates a random value to be used when creating new item
def generate():
    rand_letters = [choice(letters) for num in range(randint(8, 10))]
    rand_numbers = [choice(numbers) for num in range(randint(2, 4))]
    rand_symbols = [choice(symbols) for num in range(randint(2, 4))]
    
    rand_password_list = rand_letters + rand_numbers + rand_symbols
    shuffle(rand_password_list)

    random_value = "".join(rand_password_list)
    return random_value

# Puts new item with random value into dynamodb table
client = boto3.client('dynamodb')
response = client.put_item(
    TableName='cloud-resume-challenge',
    Item = {
        "Visits": {"S": generate()}
    })
print(response)