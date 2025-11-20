import React from 'react'

const card = () => {
  return (
    <div>
      <p id='para'>Github all Informationq</p>
      
    <pre className="whitespace-pre-wrap text-sm p-4">
{`⭐ NOTES: How to update my uploaded GitHub project

✔️ Use these steps EVERY TIME I make changes in my project:

1️⃣ Save my file changes in VS Code
(CTRL + S or auto-save)

2️⃣ Add all updated files to Git
git add .

3️⃣ Commit my changes
git commit -m "Your message here"
Examples:
• “Updated About section”
• “Added new images”
• “Fixed CSS issues”

4️⃣ Push the update to GitHub
git push

⭐ Important Rules
• I never use git init again after the first time.
• I never make a new GitHub repo for the same project.
• I always use:
👉 git add .
👉 git commit -m "message"
👉 git push

✔️ Finished!
Now my GitHub project is updated.

⭐ FULL NOTES: How to Upload Any Project to GitHub (From Start to Finish)

🔵 PART 1 — Uploading a NEW Project to GitHub (FIRST TIME)

1. Open your project folder in VS Code
2. Check if Git is already initialized
ls -a
3. Initialize Git
git init
4. Create a .gitignore file
touch .gitignore
(node_modules/, dist/, .vscode/, .env, .DS_Store)
5. Add all project files
git add .
6. Commit your project
git commit -m "Initial project upload"
7. Create a NEW GitHub Repository
8. Connect local project
git branch -M main
git remote add origin <url>
9. Push it
git push -u origin main

🔵 PART 2 — Updating your project later
1. git add .
2. git commit -m "Describe what you changed"
3. git push

🔵 PART 3 — Important Rules
• DO NOT use git init again
• DO NOT create new repo for same project
• ONLY use: add, commit, push
`}
    </pre>
  );
    </div>
  )
}

export default card
