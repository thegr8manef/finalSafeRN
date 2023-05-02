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
                    def fileInfo = "android/app/build/outputs/apk/" + buildEnvironment.toLowerCase() + "/" + buildConfiguration.toLowerCase() + "/output-metadata.json" //sh doesn't support env var injection into strings
                    def file = "android/app/build/outputs/apk/" + buildEnvironment.toLowerCase() + "/" + buildConfiguration.toLowerCase() + "/SurviveMedES_" + buildEnvironment.toLowerCase() + ".apk" // defining vars here



bat 'curl -X POST ^
"https://store.mobelite.fr/console/api_dev.php/api/upload_version" ^
-H "Authorization: 23bae8d652d62b1aea015be6eeb6e8998f25fb97" ^
-F applicationToken=%applicationToken% ^
-F fileInfo=@%fileInfo% ^
-F file=@%file%'

 }

}
}
