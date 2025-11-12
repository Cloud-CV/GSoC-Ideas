# Contributing to CloudCV GSoC-Ideas

Thank you for your interest in contributing to the CloudCV GSoC-Ideas repository! This guide will help you get started.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Adding a New Project Idea](#adding-a-new-project-idea)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in all interactions.

## 🎯 How Can I Contribute?

### Reporting Bugs or Issues
- Use the GitHub issue tracker
- Check if the issue already exists
- Provide clear descriptions and steps to reproduce

### Suggesting Enhancements
- Open an issue with the `enhancement` label
- Describe the feature and its benefits
- Provide examples if possible

### Adding or Updating Content
- Fix typos or broken links
- Improve documentation
- Add new project ideas
- Update existing project descriptions

### Code Contributions
- Improve site functionality
- Add new features (search, filters, etc.)
- Enhance mobile responsiveness
- Add CI/CD pipelines

## 🚀 Getting Started

### Prerequisites
- Git
- Docker (recommended) OR Ruby 3.1+ and Bundler
- A GitHub account
- Basic knowledge of Markdown and Jekyll

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/GSoC-Ideas.git
   cd GSoC-Ideas
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/Cloud-CV/GSoC-Ideas.git
   ```

4. **Keep your fork synced:**
   ```bash
   git fetch upstream
   git checkout gh-pages
   git merge upstream/gh-pages
   ```

## 🛠️ Development Setup

### Option 1: Using Docker (Recommended)

**Build and run:**
```bash
docker-compose up
```

**Access the site:**
Open your browser to `http://localhost:4000`

The site will automatically reload when you make changes!

### Option 2: Local Ruby Installation

**Install dependencies:**
```bash
bundle install
```

**Run Jekyll server:**
```bash
bundle exec jekyll serve --livereload
```

**Access the site:**
Open your browser to `http://localhost:4000`

### Troubleshooting

**Issue: Port 4000 already in use**
```bash
# Find and kill the process using port 4000
# Windows PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 4000).OwningProcess | Stop-Process

# Linux/Mac:
lsof -ti:4000 | xargs kill
```

**Issue: Bundle install fails**
```bash
# Update bundler
gem update bundler
bundle update
```

**Issue: Jekyll serve fails with webrick error (Ruby 3.x)**
```bash
# Add webrick to Gemfile (already included in updated Gemfile)
bundle add webrick
```

## 📝 Adding a New Project Idea

### Step 1: Create a New Post File

1. **Navigate to `_posts/` directory**
2. **Copy an existing project file** as a template
3. **Rename it** following this pattern:
   ```
   YYYY-MM-DD-project-YYYY-project-name.markdown
   ```
   Example: `2026-02-15-project-2026-ai-model-testing.markdown`

### Step 2: Edit Front Matter

```yaml
---
layout: default
img: your-image.png          # Place image in /img/ folder
title: Your Project Title
type: project-2026           # Update year
technologies: [Python, Django, React, Docker]
website: https://your-project-url.com
github: https://github.com/Cloud-CV/YourProject
description: |
---
```

### Step 3: Write Project Description

Follow this structure:
```markdown
Brief overview of the project (1-2 paragraphs).

**Project Size**: Small (90 hours) | Medium (175 hours) | Large (350 hours)

**Difficulty Rating**: Easy | Medium | Hard

## Expected Outcomes
- Outcome 1
- Outcome 2

## Skills Required
- Skill 1
- Skill 2

## Possible Mentors
- Mentor Name (@github-username)
```

### Step 4: Add Images

- Place images in `/img/` directory
- Use descriptive filenames
- Optimize images (< 200KB)
- Recommended size: 1200x600px

### Step 5: Test Locally

```bash
# Run the site
docker-compose up
# OR
bundle exec jekyll serve

# Visit http://localhost:4000
# Verify your project appears correctly
```

## 🔄 Submitting a Pull Request

### Before Submitting

- ✅ Test locally and ensure site builds without errors
- ✅ Check for typos and grammatical errors
- ✅ Verify all links work
- ✅ Ensure images load correctly
- ✅ Follow the style guidelines

### PR Process

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "type: brief description
   
   - Detailed change 1
   - Detailed change 2
   
   Fixes #issue-number"
   ```

3. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** on GitHub with:
   - Clear title describing the change
   - Reference to related issue(s)
   - Description of what changed and why
   - Screenshots if applicable

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): subject

body

footer
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Formatting, missing semicolons, etc.
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance tasks
- `ci:` CI/CD changes

**Examples:**
```
docs: add CONTRIBUTING.md file

- Add setup instructions
- Include PR guidelines
- Document commit message format

Fixes #42
```

```
feat: add search functionality

- Implement Lunr.js client-side search
- Add search bar to navigation
- Index project titles and descriptions

Closes #38
```

## 📐 Style Guidelines

### Markdown
- Use proper heading hierarchy (H1 → H2 → H3)
- Add blank lines between sections
- Use code blocks with language specification
- Keep lines under 100 characters when possible

### YAML Front Matter
- Maintain consistent indentation (2 spaces)
- Use lowercase for technology tags
- Keep alphabetical order when sensible

### Naming Conventions
- Files: `kebab-case.markdown`
- Images: `descriptive-name.png`
- Branches: `type/short-description`

## 🌐 Community

### Communication Channels

- **Slack:** [Join CloudCV Slack](https://join.slack.com/t/cloudcv-community/shared_invite/zt-336hsznrp-CImXiT1ntB_ZnK8Lfw1iAA)
- **Mailing List:** [Google Groups](https://groups.google.com/forum/#!forum/cloudcv)
- **GitHub Discussions:** Use for longer-form discussions
- **Issues:** For bug reports and feature requests

### Getting Help

- Check existing issues and documentation first
- Ask questions on Slack in appropriate channels
- Tag relevant mentors (but be respectful of their time)
- Be patient and respectful

### GSoC-Specific

- Review [Google Summer of Code Student Guide](https://google.github.io/gsocguides/student/)
- Engage early and often with the community
- Start with small contributions to understand workflow
- Read previous years' project reports
- Ask mentors about project availability and scope

## 📚 Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

## 🙏 Thank You!

Your contributions make CloudCV better for everyone. We appreciate your time and effort!

If you have questions about contributing, feel free to reach out on Slack or open an issue.

---

**Happy Contributing! 🚀**
