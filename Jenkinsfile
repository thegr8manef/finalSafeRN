node('android-slave-2') {

    stages {
        stage('Build') {
            steps {
			    echo "Building the project..."
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
				echo "Testing the project..."
                sh 'npm run test'
            }
        }

        stage('Sonar') {
            steps {
				echo "Running Sonar..."			
                withSonarQubeEnv('SonarQube') {
                    sh 'npm run sonar'
                }
            }
        }

        stage('Deploy') {
            steps {
				echo "Deploying the project..."
                sh 'npm run deploy'
            }
        }
    }
}
