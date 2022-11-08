import os
import json
import boto3

client = boto3.client('dynamodb')
response = client.describe_table(TableName='cloud-resume-challenge')
print(response['Table']['ItemCount'])

# import json
# import boto3

# def lambda_handler(event, context):
#     client = boto3.client('dynamodb')
#     response = client.describe_table(TableName='cloud-resume-challenge')
#     return response['Table']['ItemCount']
