pipeline {

    environment {
        PROJECT_NAME = "Redux - 101"
    }

    agent { dockerfile true }

    stages {
        stage('output') {
            steps {
                sh "echo ${env.PROJECT_NAME}"
            }
        }
    }
}