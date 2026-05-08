# 🚀 Deployment Guide

## Quick Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `argyle-presentation` (or your preferred name)
3. Make it **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2: Upload Files

**Option A: Using GitHub Web Interface**
1. Click **Uploading an existing file**
2. Drag and drop `index.html` and `README.md`
3. Click **Commit changes**

**Option B: Using Git (Command Line)**

```bash
# Navigate to the presentation folder
cd argyle-presentation

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Argyle presentation"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/argyle-presentation.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Select **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 4: Access Your Presentation

After a few minutes, your presentation will be live at:
```
https://YOUR_USERNAME.github.io/argyle-presentation/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🔄 Updating the Presentation

After making changes:

```bash
git add .
git commit -m "Update presentation content"
git push
```

GitHub Pages will automatically update within 1-2 minutes.

## 📝 Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file to the repository with your domain name
2. In GitHub Pages settings, add your custom domain
3. Update DNS records as instructed

## ✅ Verification Checklist

- [ ] Repository is public
- [ ] `index.html` is in the root directory
- [ ] GitHub Pages is enabled
- [ ] Source branch is set to `main` and folder to `/ (root)`
- [ ] Presentation loads at the GitHub Pages URL

## 🆘 Troubleshooting

**Presentation not loading?**
- Wait 2-3 minutes after enabling Pages
- Check that repository is public
- Verify `index.html` is in the root directory
- Clear browser cache

**Changes not showing?**
- Wait 1-2 minutes for GitHub to rebuild
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check GitHub Actions tab for build errors

**Need help?**
- Check GitHub Pages documentation: https://docs.github.com/pages
- Verify repository settings

---

**Your presentation will be live and shareable! 🎉**





