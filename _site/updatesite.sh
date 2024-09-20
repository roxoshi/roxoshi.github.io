git add .
git commit -m "workthing"
git push
aws s3 sync blog/ s3://rajatjoshi.dev/blog/
aws s3 sync papers/ s3://rajatjoshi.dev/papers/
aws s3 cp index.html s3://rajatjoshi.dev/
aws s3 cp style.css s3://rajatjoshi.dev/
