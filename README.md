# andyrrose.com

## Summary
Personal website with project information, work history, and stuff about me.

## Deploy
1. Install AWS CLI from https://aws.amazon.com/cli/
2. Set up profile "arose"
2.1. Run `aws configure --profile arose`
2.2. Enter the keys
3. Create a .bashrc file in your user profile with the contents `alias aws="winpty /C/Program Files/Amazon/AWSCLI/aws.exe"`
3. Open Git shell for the project
4. Run deploy.sh script