# .gitignore Guide for HTML-CSS Tutorial

## What is .gitignore?

The `.gitignore` file tells Git which files and folders to ignore when tracking changes. This is important for:
- Keeping your repository clean
- Avoiding accidental commits of sensitive or unnecessary files
- Reducing repository size
- Preventing conflicts between different operating systems

## Current .gitignore Breakdown

### Operating System Files
- **Windows**: `Thumbs.db`, `Desktop.ini` - Windows creates these automatically
- **macOS**: `.DS_Store` - macOS creates these in every folder
- **Linux**: Various temporary and trash files

### Editor Files
- **VS Code**: `.vscode/` folder contains workspace settings
- **Other editors**: Sublime Text, Atom, JetBrains IDEs, Vim, Emacs

### Web Development
- **Node.js**: `node_modules/` (if you add npm packages later)
- **Build tools**: Output folders like `dist/`, `build/`
- **CSS preprocessors**: Source maps and cache files

### Project-Specific
- `finished-portfolio-example/` - Keeps solution code private
- Temporary and backup files
- Log files

## Customization Options

### For Instructors
If you want to hide instructor materials, uncomment these lines:
```
# instructor-notes.md
# private-notes/
# lesson-plans/
```

### For Student Submissions
If students will submit work to this repo, uncomment:
```
# student-submissions/
# student-work/
```

### For Large Media Files
If you have large images or videos, uncomment the media section to avoid pushing them to GitHub.

## Best Practices

### 1. Add .gitignore Early
- Create `.gitignore` before making your first commit
- Once files are tracked, `.gitignore` won't remove them

### 2. Check Your Repository
Run these commands to see what's being tracked:
```bash
git status
git ls-files
```

### 3. Remove Already-Tracked Files
If you need to untrack files that are already committed:
```bash
git rm --cached filename
git rm -r --cached foldername/
```

### 4. Global .gitignore
For files you never want to track (like OS files), create a global `.gitignore`:
```bash
git config --global core.excludesfile ~/.gitignore_global
```

## Common Additions for Web Projects

### If you add Sass/SCSS:
```
*.sass.cache
.sass-cache/
*.css.map
```

### If you add a task runner:
```
# Gulp
gulpfile.babel.js
.gulp/

# Webpack
webpack.config.js
.webpack/
```

### If you use a CMS or database:
```
# WordPress
wp-config.php
wp-content/uploads/

# Database
*.sql
*.sqlite
*.db
```

## Troubleshooting

### File Still Being Tracked?
If a file is still being tracked after adding it to `.gitignore`:
1. The file was already committed before being ignored
2. Remove it from tracking: `git rm --cached filename`
3. Commit the change

### Want to Track an Ignored File?
Use the force flag: `git add -f filename`

### Check if File is Ignored
Test if a file would be ignored: `git check-ignore filename`

## Testing Your .gitignore

Create some test files to verify your `.gitignore` works:
```bash
# Create test files
touch Thumbs.db
touch .DS_Store
mkdir node_modules
touch node_modules/test.js

# Check git status - these shouldn't appear
git status
```

Your `.gitignore` is now ready for a professional HTML/CSS educational project!
