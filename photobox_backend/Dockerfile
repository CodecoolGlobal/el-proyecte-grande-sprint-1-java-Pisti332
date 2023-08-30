FROM eclipse-temurin:latest
RUN mkdir /opt/photobox-app
COPY ./target/photobox_backend-0.0.1-SNAPSHOT.jar /opt/photobox-app
CMD "java" "-jar" "/opt/photobox-app/photobox_backend-0.0.1-SNAPSHOT.jar"

# docker build -t photobox -f Dockerfile.dockerfile .
# docker run --name photobox-container --rm -dp 8081:8080 photobox