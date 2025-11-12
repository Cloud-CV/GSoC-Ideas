# 🚀 CloudCV Contribution Quick Reference

## 🔗 Essential Links

| Resource | URL |
|----------|-----|
| Live Site | http://gsoc.cloudcv.org |
| Upstream Repo | https://github.com/Cloud-CV/GSoC-Ideas |
| Your Fork | https://github.com/GaneshPatil7517/GSoC-Ideas |
| Slack Invite | https://join.slack.com/t/cloudcv-community/shared_invite/zt-336hsznrp-CImXiT1ntB_ZnK8Lfw1iAA |
| Mailing List | https://groups.google.com/forum/#!forum/cloudcv |
| EvalAI Repo | https://github.com/Cloud-CV/EvalAI |

---

## 💻 Quick Commands

### Docker (Recommended)
```powershell
# Start development server
docker-compose up

# Stop server
docker-compose down

# Rebuild after Gemfile changes
docker-compose up --build
```

### Git Workflow
```powershell
# Update from upstream
git fetch upstream
git checkout gh-pages
git merge upstream/gh-pages
git push origin gh-pages

# Create new branch
git checkout -b type/branch-name

# Commit with conventional commits
git commit -m "type: brief description

- Detail 1
- Detail 2

Fixes #issue-number"

# Push and create PR
git push origin type/branch-name
```

### Commit Types
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Tests
- `chore:` Maintenance
- `ci:` CI/CD changes

---

## 📝 Issue Labels to Look For
- `good-first-issue` - Perfect for beginners
- `documentation` - Docs improvements
- `help-wanted` - Need contributors
- `gsoc-2026` - Related to next GSoC
- `bug` - Something's broken

---

## ✅ Pre-Commit Checklist
- [ ] Tested locally (Docker or Jekyll)
- [ ] No typos or grammar errors
- [ ] Links work
- [ ] Images load
- [ ] Follows style guide
- [ ] Commit message follows convention
- [ ] Referenced issue number

---

## 🎯 Your Current Changes (Ready to Commit)

1. **Typo Fix** (EASIEST - DO FIRST!)
   - File: `_posts/2025-02-11-project-2025-enhanced-test-suite-and-improved-user-experience.markdown`
   - Change: "exsiting" → "existing"
   - Branch: `fix/typo-2025-test-suite`

2. **CONTRIBUTING.md**
   - New file with full contribution guide
   - Branch: `docs/add-contributing-guide`

3. **Docker Setup**
   - Files: `Dockerfile`, `docker-compose.yml`, `.dockerignore`
   - Branch: `feat/docker-development-environment`

4. **Enhanced README**
   - File: `README.md`
   - Branch: `docs/enhance-readme`

5. **Updated Gemfile**
   - File: `Gemfile`
   - Branch: `chore/update-gemfile-dependencies`

6. **Project Template**
   - File: `templates/project-template.markdown`
   - Branch: `feat/add-project-template`

7. **CI/CD Workflow**
   - File: `.github/workflows/jekyll-build.yml`
   - Branch: `ci/add-github-actions-workflow`

---

## 📋 Contribution Priority Order

### Week 1 (Start Here!)
1. ✅ Join Slack and mailing list
2. ✅ Introduce yourself
3. Submit typo fix PR
4. Submit CONTRIBUTING.md PR

### Week 2
5. Submit Docker PR
6. Submit README PR
7. Review other PRs

### Week 3+
8. Submit Gemfile PR
9. Submit Template PR
10. Submit CI/CD PR
11. Create 2025 folder
12. Explore EvalAI issues

---

## 🗣️ Communication Templates

### Creating an Issue
```markdown
Title: [Type] Brief description

## Description
[What's the problem or opportunity?]

## Current State
[What exists now?]

## Proposed Solution
[What should be done?]

## Benefits
[Why is this valuable?]

## I'm working on this
[Optional: Claim the issue]
```

### PR Description
```markdown
## Description
[What does this PR do?]

## Changes Made
- [ ] Change 1
- [ ] Change 2

## Testing
- [x] Tested locally
- [x] All links work
- [x] Builds successfully

## Related Issue
Closes #<issue-number>

## Checklist
- [x] Followed CONTRIBUTING.md
- [x] Tested thoroughly
- [x] Updated documentation if needed
```

---

## 🎓 Learning Path

### Phase 1: Understanding (Week 1)
- Read all 2025 project ideas
- Explore EvalAI platform
- Review past GSoC projects
- Understand Jekyll basics

### Phase 2: Contributing (Week 2-4)
- Start with documentation
- Move to Docker/DevOps
- Then tackle code changes
- Help review others' PRs

### Phase 3: Specializing (Week 5+)
- Focus on 1-2 projects deeply
- Propose new features
- Help new contributors
- Draft GSoC proposal

---

## 🏆 Success Indicators

### Good Signs ✅
- PRs getting merged
- Positive feedback on PRs
- Getting mentioned in discussions
- Being asked to review PRs
- Mentors engaging with you

### Red Flags 🚩
- PRs sitting without feedback for 2+ weeks
- Negative or dismissive responses
- No community engagement
- Proposals not aligned with needs

---

## 💡 Pro Tips

1. **Test Everything Locally First**
   ```powershell
   docker-compose up
   # Check http://localhost:4000
   ```

2. **One PR = One Feature**
   Don't mix multiple unrelated changes

3. **Link Issues to PRs**
   Always reference the issue number

4. **Be Patient But Persistent**
   Follow up after 3-4 days if no response

5. **Learn From Feedback**
   Every review is a learning opportunity

6. **Help Others**
   Answer questions in Slack

7. **Document As You Go**
   Keep notes of what you learn

---

## 🆘 Troubleshooting

### Docker Issues
```powershell
# Port already in use
Get-Process -Id (Get-NetTCPConnection -LocalPort 4000).OwningProcess | Stop-Process

# Permission issues
docker-compose down
docker-compose up --build

# Clean rebuild
docker-compose down -v
docker-compose up --build
```

### Git Issues
```powershell
# Merge conflicts
git fetch upstream
git rebase upstream/gh-pages
# Resolve conflicts manually
git rebase --continue

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git checkout -- .
```

### Jekyll Issues
```
# Build fails
- Check _config.yml syntax
- Verify front matter format
- Ensure all required fields present
- Check for special characters
```

---

## 📊 Progress Tracker

### Contributions Made
- [ ] Typo fix
- [ ] CONTRIBUTING.md
- [ ] Docker setup
- [ ] README enhancement
- [ ] Gemfile update
- [ ] Project template
- [ ] CI/CD workflow
- [ ] 2025 folder
- [ ] _______________
- [ ] _______________

### Community Engagement
- [ ] Joined Slack
- [ ] Joined mailing list
- [ ] Introduced myself
- [ ] Reviewed a PR
- [ ] Answered a question
- [ ] Helped a new contributor

---

## 🎯 This Week's Goals

Set 2-3 achievable goals each week:

**Week of [Date]:**
1. ____________________________
2. ____________________________
3. ____________________________

---

## 📞 Need Help?

**Quick Questions**: Slack #general  
**Technical Help**: Slack #help or #dev  
**GSoC Questions**: Slack #gsoc  
**PR Reviews**: Comment on the PR  
**Complex Issues**: Email maintainers  

---

**Keep this file open while working. Update it as you progress!**

**Last Updated**: November 12, 2025  
**Your Fork**: https://github.com/GaneshPatil7517/GSoC-Ideas  
**Upstream**: https://github.com/Cloud-CV/GSoC-Ideas
