pipeline {

    environment {
        PROJECT_NAME = "Redux - 101"
        registry = "docker_hub_account/repository_name"
        registryCredential = 'dockerhub'
    }

    agent none

    stages {
        stage('Starting CI process'){
            steps {
                echo "${PROJECT_NAME}"
                bat "set"
            }
        }
        stage('Build - Docker image') {
            agent { dockerfile true }
        }
    }
}