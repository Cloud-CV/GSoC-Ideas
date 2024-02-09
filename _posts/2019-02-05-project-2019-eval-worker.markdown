---
layout: default
img: robust-worker.png
title: Robust Evaluation Pipeline
type: project-2019
technologies: [Python, Django, DRF, Docker, AWS]
website: https://evalai.cloudcv.org
github: https://github.com/Cloud-CV/EvalAI
description: |
---
Currently, the submission worker that evaluates the challenge requires manual scaling. Moreover, logging & metrics-monitoring isn’t available to the challenge hosts for the submission worker in real-time. Also, an often requested feature by the challenge organizers has been the ability to test their competition package (evaluation scripts, etc) locally before uploading it to EvalAI. This capability will also reduce assistance required by the platform maintainers. The goal of this project is to write a robust test suite for submission worker, port it to AWS Fargate to setup auto-scaling and logging. The tasks will also include giving control to challenge hosts over the submission worker from the UI in terms of starting, stopping and restarting it. 
