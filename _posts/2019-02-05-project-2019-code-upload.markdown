---
layout: default
img: code_upload.png
title: Evaluating submission code in Docker
type: project-2019
technologies: [Python, Django, DRF, Docker, AWS]
website: https://evalai.cloudcv.org
github: https://github.com/Cloud-CV/EvalAI
description: |
---
The rise of reinforcement learning based problems or any problem which requires that an agent must interact with an environment introduces additional challenges for benchmarking. In contrast to the supervised learning setting where performance is measured by evaluating on a static test set, it is less straightforward to measure generalization performance of these agents in the context of the interactions with the environment. Evaluating these agents involves running the associated code on a collection of unseen environments that constitutes a hidden test set for such a scenario. The goal of this project is to set up a robust pipeline for uploading prediction code in the form of Docker containers (as opposed to test prediction file) that will be evaluated on remote machines and the results will be displayed on the leaderboard.
