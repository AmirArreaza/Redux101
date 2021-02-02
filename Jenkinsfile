pipeline {

    environment {
        PROJECT_NAME = "Redux - 101"
    }

    agent none

    stages {
        stage('Starting CI process'){
            steps {
                echo "${PROJECT_NAME}"
                bat 'set'
            }
        }
        stage('Build - Docker image') {
            agent { dockerfile true }
            steps {
                set "Creating docker image"
            }
        }
    }
}