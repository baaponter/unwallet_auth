#  UNWallet Auth Microservice
- --
## Authentication Component


# Clone and App installation

        git clone https://github.com/baaponter/unwallet_auth.git
        cd unwallet_auth

# Deployment Instructions

        cd unwallet_auth_db
        docker network create --driver bridge unwallet_auth
        docker build -t unwallet_auth_db .
        docker run --network unwallet_auth -d -t -i -p 3306:3306 --name unwallet_auth_db unwallet_auth_db
        cd..
        cd unwallet_auth_ms
        docker build -t unwallet_auth_ms .
        docker run --network unwallet_auth -d -p 8080:8080 --name unwallet_auth_ms unwallet_auth_ms
        docker run --network unwallet_auth  --name phpmyadmin -d --link unwallet_auth_db:db -p 8081:80 phpmyadmin

