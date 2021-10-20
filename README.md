# Miltron Rocket Controller Frontend

Backend project for an rocket launch station. This backend project getting rocket data from provided [backend service] and creating a TCP connection to the rockets. Then publishing data coming from tcp connections with `Web Socket` to the clients.
## Running Project
To run this project:
* You need docker installed.
* Create a `.env` in root of the project.
    - Then paste.
    ```.env
    HOST=127.0.0.1
    PORT=5001
    API_KEY=API_KEY_1
    MILTRON_API_HOST=localhost:5000
    ```
* Run [backend service] with docker command `docker run -d  -p 5000:5000 -p 4000-4009:4000-4009 miltronhub/launchsite:1.0.0` Docker will start image in the background and accessible with url http://127.0.0.1:5000/
* Run `yarn install` for the install packages.
* Run `yarn start` command for the backend service and websocket start. You can change the port from `.env` file.
* If you want to see the UI you can run [](https://github.com/AliHadiOzturk/rocket-control-frontend#running-project)
 
[backend service]:https://hub.docker.com/r/miltronhub/launchsite