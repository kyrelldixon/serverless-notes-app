export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notes-app-uploads-02"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rowbrd4u5j.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_QVfOxu0HH",
    APP_CLIENT_ID: "489htiliq65veaum4p2huektg1",
    IDENTITY_POOL_ID: "us-east-1:f86e3be9-33be-495a-84c4-6c39a9308a6d"
  }
}