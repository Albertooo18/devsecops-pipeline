FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# ----------------------------
# Sistema básico + dependencias
# ----------------------------
RUN apt-get update && apt-get install -y \
    curl wget unzip git tar sudo \
    openjdk-17-jre-headless \
    nodejs npm \
    python3 python3-pip \
    docker.io \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# ----------------------------
# Instalar SonarScanner
# ----------------------------
ENV SONAR_SCANNER_VERSION=5.0.1.3006

RUN wget -O sonar.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip \
    && unzip sonar.zip \
    && mv sonar-scanner-${SONAR_SCANNER_VERSION} /opt/sonar-scanner \
    && rm sonar.zip

ENV PATH="/opt/sonar-scanner/bin:${PATH}"
ENV SONAR_SCANNER_OPTS="-Djava.awt.headless=true"

# ----------------------------
# Instalar Trivy (modo CLI)
# ----------------------------
RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh \
    | sh -s -- -b /usr/local/bin

# ----------------------------
# Instalar ZAP CLI
# ----------------------------
RUN pip install python-owasp-zap-v2.4

# ----------------------------
# Usuario final
# ----------------------------
CMD ["/bin/bash"]
