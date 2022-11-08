resource "aws_dynamodb_table" "crc_dynamodb_table" {
  name           = "cloud-resume-challenge"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "Visits"

  attribute {
    name = "Visits"
    type = "S"
  }

  tags = {
    Name        = "cloud-resume-challenge"
    Environment = "production"
  }
}