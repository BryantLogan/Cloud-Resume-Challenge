import os
import json
import boto3

def count_hits():
    client = boto3.client('dynamodb')
    visits = client.get_item(
        TableName='crc-dynamo-db',
        Key={
            'pk':{
            'S': 'VisitCounter'}
            },
            AttributesToGet=[
                'Hits'])
    visit_total = int(visits['Item']['Hits']['N'])
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "message": "success",
            "hits": visit_total
        })
    }


def add_hit():
    client = boto3.client('dynamodb')    
    response = client.update_item(
        TableName='crc-dynamo-db',
        Key={
            'pk':{
                'S': 'VisitCounter'}
        },
        UpdateExpression= "SET Hits = Hits + :incr",
        ExpressionAttributeValues ={
            ':incr': {'N': '1'}
            },
        ReturnValues="UPDATED_NEW",
    )
    # print(response['Attributes']['Hits']['N'])


count_hits()
add_hit()
