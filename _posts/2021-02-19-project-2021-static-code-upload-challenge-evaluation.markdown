---
layout: default
img: code-upload-pipeline-for-static-datasets.png
title:  Static code upload challenge evaluation
type: project-2021
technologies: [Python, Django, Kubernetes, Docker]
website: https://evalai.cloudcv.org
github: https://github.com/Cloud-CV/EvalAI
description: |
---
EvalAI is a platform to host and participate in AI challenges around the globe. To a challenge host, reproducibility of submission results and privacy of the test data are the main concerns. Towards this, the idea is to allow users to submit a docker image for their models and evaluate them on static datasets. In order to achieve this we want to build a pipeline which will use the dockerized models and run it on kubernetes based infrastructure with stored test annotations and report the results on the EvalAI leaderboard. Another part of the project is to streamline our challenge creation pipeline. Last year we added support for github based challenge creation which allows challenge hosts to use a private github repository to create and manage updates in a challenge. The goal for this year is to support bi-directional updates for challenges created using github. This feature will allow hosts to sync changes from EvalAI UI to their challenge github repository. The goal is to enhance the challenge creation experience for challenge hosts involving minimal support from the EvalAI team.
