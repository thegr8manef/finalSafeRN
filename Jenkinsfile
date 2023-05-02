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
		   // bat 'npx react-native run-android --variant=release'
			bat 'cd android & gradlew assembleDebug'
			}
		}
		     stage('Mstore Upload'){
		     steps{
                    const fileInfo = "android/app/build/outputs/apk/${buildEnvironment.toLowerCase()}/${buildConfiguration.toLowerCase()}/output-metadata.json";
                    const file = "android/app/build/outputs/apk/${buildEnvironment.toLowerCase()}/${buildConfiguration.toLowerCase()}/SurviveMedES_${buildEnvironment.toLowerCase()}.apk" // defining vars here
bat label: '', script: """curl -X POST \\
https://store.mobelite.fr/console/api_dev.php/api/upload_version \\
 -H \'Authorization: D1DD11692F1873D01A9824B279B41010\' \\
 -F applicationToken=$applicationToken \\
 -F \'fileInfo=@$fileInfo\' \\
 -F \'file=@$file\'"""//TODO: Maybe use http request plugin instead when new versions are released (Bug in Authentication creds)

 }
 }

}
}
