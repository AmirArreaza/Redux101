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
            steps {
                echo "Building..."
                docker "build -t redux-101 ."
            }
        }
    }


}

def nodeBuildImage(){
    docker.build()
}