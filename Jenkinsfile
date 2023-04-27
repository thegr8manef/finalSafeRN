pipeline {
    agent any
    stages{
        stage('Build') {
            steps{
            echo("Building project...")
                bat 'npm install'
              //  bat 'npm run build'
            }
        }
        stage('Test') {
            steps{
            echo("Testing project...")
                bat 'npm run test'
        }
        }
        stage('Deploy') {
            steps{
            echo("Deploying project...")
                //bat 'npm run deploy'
        }
        }
        stage('Scan') {
            steps {
                withSonarQubeEnv(installationName: 'SQ') { 
                    bat 'npx sonarqube-scanner'
        }
      }
    }


    
    		stage('Assemble') {
    		steps{
		    //bat 'npx react-native run-android'
			bat 'cd android & gradlew assembleDebug'
			}
		}

}
}
