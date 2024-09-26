# Build the frontend app container
docker build \
    -t g-feedback-app-frontend:v3.0 \
    -t g-feedback-app-frontend:latest \
    -t gulcan82/g-feedback-app-frontend:v3.0 \
    -t gulcan82/g-feedback-app-frontend:latest .

# Push the images to Docker Hub
docker push gulcan82/g-feedback-app-frontend:v3.0
docker push gulcan82/g-feedback-app-frontend:latest

# Start the app with Docker Compose
docker-compose up --build