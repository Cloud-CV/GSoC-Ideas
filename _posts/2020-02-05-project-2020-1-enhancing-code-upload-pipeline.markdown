---
layout: default
img: new-ui.png
title:  Enhancements in code upload pipeline 
type: project-2020
technologies: [Docker, Kubernetes, AWS, Django, DRF]
website: https://evalai.cloudcv.org
github: https://github.com/Cloud-CV/EvalAI
description: |
---
As EvalAI hosts more code-upload challenges and researchers utilizes our modular kubernetes based infrastructure for hosting these challenges, we would like to automate this pipeline as much as possible to enhance user experience. During GSoC 2019, we built this pipeline for evaluating AI model’s code by running it against unseen test environments in real time and this year the plan is to add features like start, stop, restart, delete cluster, etc.  so as to give challenge hosts more control over their challenge evaluation cluster. This will not only involve control over the nodes running evaluation but also viewing logs which are being updated in real-time. Finally, the plan is to give challenge hosts the capability to run the evaluation cluster in their cloud by simply plugging in their keys and rest all will be taken care by EvalAI.
