import json
import boto3

def lambda_handler(event, context):
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
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
    },
        "body": json.dumps({
            "message": "success",
            "hits": visit_total
        })
    }
