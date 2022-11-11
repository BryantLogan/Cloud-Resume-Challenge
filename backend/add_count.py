import boto3
import json

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
    return {
    "statusCode": 200,
    "headers": {
        "Access-Control-Allow-Origin": "*"
    },
    "body": json.dumps({
        "message": "success"
    }),
}