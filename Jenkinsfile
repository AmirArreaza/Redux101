pipeline {

    environment {
        PROJECT_NAME = "Redux - 101"
    }

    agent none

    stages {
        stage('Starting CI process'){
            steps {
                echo "${PROJECT_NAME}"
            }
        }
        stage('Build - Docker image') {
            agent { dockerfile true }
            steps {
                echo "Creating docker image"
                sh 'printenv'
            }
        }
    }
}