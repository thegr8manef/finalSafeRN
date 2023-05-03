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
			bat 'cd android & gradlew assembleRelease'
			}
		}
		     stage('Mstore Upload'){
environment {
            filename = "android/app/build/outputs/apk/" + "release" + "/" + "output-metadata.json" 
            file = "android/app/build/outputs/apk/"+ "app-release"+".apk"
            }
		     steps{
    /* bat "curl -X POST ^\n" +
    "\"https://store.mobelite.fr/console/api_dev.php/api/upload_version\" ^\n" +
    "-H \"Authorization: D1DD11692F1873D01A9824B279B41010\" ^\n" +
    "-F applicationToken=23bae8d652d62b1aea015be6eeb6e8998f25fb97 ^\n" +
    "-F fileInfo="cd android/app/build/outputs/apk/" + buildEnvironment.toLowerCase() + "/" + buildConfiguration.toLowerCase() + "/output-metadata.json/" ^\n" +
    "-F file="cd android/app/build/outputs/apk/" + buildEnvironment.toLowerCase() + "/" + buildConfiguration.toLowerCase() + "/SurviveMedES_" + buildEnvironment.toLowerCase() + ".apk" ^\n"
 */
 bat 'curl -X POST ^' +
        'https://store.mobelite.fr/console/api_dev.php/api/upload_version ^' +
        '-H "Authorization: D1DD11692F1873D01A9824B279B41010" ^' +
        '-F "applicationToken=23bae8d652d62b1aea015be6eeb6e8998f25fb97"^' +
        '-F fileInfo=%filename% ^' +
        '-F file=%file%'
 }
 }

}
}
