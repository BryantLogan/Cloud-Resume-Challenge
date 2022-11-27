# Frontend repository for the Cloud Resume Challenge
I created this fullstack project based on the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), utilizing AWS.

The backend portion of this project can be found in this [repository](https://github.com/BryantLogan/crc-backend-iac). The deployed web app can be found [here](https://bryantlogan.com).

## Frontend diagram
![This is an image](/frontend-final.png)

## The infrastructure
The frontend is built by utlizing S3 to store HTML, CSS, and JavaScript files. Using Route 53, I purchased a domain and pointed internet traffic to a CloudFront distribution. The CloudFront distribution accesses the files in S3 and is able to serve up content to users. With Amazon Certificate Manager, a TLS connection is established between the client, providing a secure HTTPS connection.

## CI/CD
The frontend uses GitHub Actions to sync the S3 bucket any time code is pushed to this repository. Once the files have been uploaded, the CloudFront cache is invalidated, providing near-real-time updates to the webpage.