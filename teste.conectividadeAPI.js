import { Amplify } from 'aws-amplify';

const awsconfig = {
    aws_project_region: "us-east-1",
    aws_appsync_graphqlEndpoint: "https://cahg6u6ll5g6howq4n4bdrbvni.appsync-api.us-east-1.amazonaws.com/graphql",
    aws_appsync_region: "us-east-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-cvkka4f4efb5nj7gqvl4qiykfq"
};

Amplify.configure(awsconfig);