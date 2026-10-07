pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                   git clone https://github.com/saranyaedaa/git-newproject1.git
                   ls -l
                '''
            }
        }
        stage ('deploy'){
            steps{
                sh'''
                  cp -r git-newproject1/* /var/www/html
                  ls -l /var/www/html
                  '''
            }
        }
    }
}
