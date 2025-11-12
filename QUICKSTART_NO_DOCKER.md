# Quick Start Guide - First PR (No Docker Required!)

## Step 1: Sync Your Fork
```powershell
cd "c:\Users\HP\Videos\Open Source\GSoC-Ideas"
git checkout gh-pages
git fetch upstream
git merge upstream/gh-pages
git push origin gh-pages
```

## Step 2: Create Feature Branch
```powershell
git checkout -b fix/typo-2025-test-suite
```

## Step 3: Verify the Change
The typo is already fixed in your local files! Verify:
```powershell
git status
```

You should see:
```
modified:   _posts/2025-02-11-project-2025-enhanced-test-suite-and-improved-user-experience.markdown
```

## Step 4: Stage ONLY the Typo Fix
```powershell
git add _posts/2025-02-11-project-2025-enhanced-test-suite-and-improved-user-experience.markdown
```

## Step 5: Commit
**IMPORTANT**: Replace `#123` with your actual issue number!

```powershell
git commit -m "fix: correct typo in 2025 test suite project description

Change 'exsiting' to 'existing' in the project description

Fixes #123"
```

## Step 6: Push
```powershell
git push origin fix/typo-2025-test-suite
```

## Step 7: Create PR
1. Go to: https://github.com/GaneshPatil7517/GSoC-Ideas
2. Click "Compare & pull request" (yellow banner)
3. Fill in PR details (see FIRST_PR_GUIDE.md for template)
4. Click "Create pull request"

## Done! 🎉

You've just submitted your first PR without needing Docker!

---

## What About Testing?

**For a typo fix**: You don't NEED to run Jekyll locally. The typo is obvious and safe.

**For larger changes**: You'll want Docker or Ruby working, but for now, focus on getting your first PR merged!

---

## Next Steps After First PR

1. Wait for maintainer feedback (check daily)
2. Meanwhile, work on CONTRIBUTING.md PR
3. Continue engaging in Slack
4. Help others while waiting

---

## Docker Note

Docker is useful but NOT required for:
- Typo fixes
- Documentation updates
- Adding new markdown files
- Most text-based contributions

You only REALLY need Jekyll running for:
- Major UI/layout changes
- Testing new features
- Verifying complex formatting

**So don't let Docker issues stop you! Contribute now!** 🚀
