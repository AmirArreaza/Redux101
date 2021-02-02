pipeline {

    environment {
        PROJECT_NAME = "Redux - 101"
        registry = "docker_hub_account/repository_name"
        registryCredential = 'dockerhub'
    }
    stages {
        agent { dockerfile true }
        stage('output') {
            steps {
                sh "echo ${env.PROJECT_NAME}"
            }
        }
    }
}