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
			bat 'react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res' //Assembling apk
			bat 'cd android'
			bat './gradlew assembleDebug'
			}
		}

}
}
