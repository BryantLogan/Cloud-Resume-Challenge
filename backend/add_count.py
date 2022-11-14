import json
import boto3

def lambda_handler(event, context):
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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
    },
    "body": json.dumps({
        "message": "success"
    }),
}