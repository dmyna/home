FROM archlinux:latest

# Create user and directories
RUN groupadd -r mynahome
RUN useradd -r -m -g mynahome mynahome
RUN mkdir /app
RUN chown -R mynahome:mynahome /app

# ---------- Root ---------- #
USER root

ARG PACMAN_PARALLELDOWNLOADS=5
RUN pacman-key --init \
    && pacman -Sy --noconfirm --noprogressbar --quiet --needed pacman-contrib \
    && sed -i "s/^ParallelDownloads.*/ParallelDownloads = ${PACMAN_PARALLELDOWNLOADS}/g" /etc/pacman.conf

# Install basic tools
RUN pacman -Syu --noconfirm base base-devel git sudo go wget

# ---------- mynahome ---------- #
USER mynahome

# Install Yay
WORKDIR /home/mynahome
RUN git clone https://aur.archlinux.org/yay.git
WORKDIR /home/mynahome/yay
RUN makepkg --noconfirm

# ---------- Root ---------- #
USER root

RUN pacman -U --noconfirm /home/mynahome/yay/*.pkg.tar.zst
RUN yay -Syyuu --noconfirm

RUN yay -S npm --noconfirm
RUN yay -S yarn --noconfirm
RUN yay -S openssl --noconfirm

ENV TERM=xterm
ENV FORCE_COLOR=true
ENV NEXT_TELEMETRY_DISABLED=1

# ---------- mynahome ---------- #
USER mynahome


WORKDIR /app