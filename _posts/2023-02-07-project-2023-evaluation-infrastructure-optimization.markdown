---
layout: default
img: ec2-auto-scaling.png
title:  Evaluation Infrastructure Optimization
type: project-2023
technologies: [Django, AWS]
website: https://eval.ai
github: https://github.com/Cloud-CV/EvalAI
description: |
---
This project aims to enhance EvalAI's functionalities through automating large worker deployments in AWS, adding relevant features for efficient challenge management and also writing a robust and efficient test suite. The focus of the project is two-fold:

- To automate large worker deployment processes on EvalAI using AWS EC2 instances or spot instances, make challenge management seamless and less reliant on the admins. We want to reduce the dependency of challenge hosts on EvalAI admins.

- To make EvalAI more reliable and error-free by incorporating tests for different frontend and backend components. This will include adding unit tests for the API suite, prediction upload evaluation workers, code upload evaluation workers (on EKS), and integration tests for end-to-end testing of all components.
