pipeline {

    enviroment{
        PROJECT_NAME = "Redux - 101"
    }

    agent {
        docker { image 'node:14-alpine' }
    }

    stages {
        stage('output') {
            steps {
                sh "echo ${env.PROJECT_NAME}"
            }
        }
        stage('node version')
            steps{
                sh 'node --version'
            }
    }
}