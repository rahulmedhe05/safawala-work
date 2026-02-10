#!/bin/bash

# Deploy all domain projects to Vercel
# This script deploys each project from /Applications/Safawala-Projects/

PROJECTS_DIR="/Applications/Safawala-Projects"
LOG_FILE="/Applications/Safawala ALL/vercel-deploy.log"

echo "=========================================="
echo "Vercel Deployment Script"
echo "Started at $(date)"
echo "=========================================="

# Count total projects
total=$(ls -d "$PROJECTS_DIR"/*/ 2>/dev/null | wc -l | tr -d ' ')
echo "Total projects to deploy: $total"
echo ""

count=0
success=0
failed=0

# Loop through each project
for project_dir in "$PROJECTS_DIR"/*/; do
    if [ -d "$project_dir" ]; then
        domain=$(basename "$project_dir")
        count=$((count + 1))
        
        echo "[$count/$total] Deploying: $domain"
        
        cd "$project_dir"
        
        # Create project name (replace . with -)
        project_name=$(echo "$domain" | tr '.' '-')
        
        # Deploy to Vercel with production flag
        # --yes to confirm all prompts
        # --prod to deploy to production
        if vercel --yes --prod --name "$project_name" 2>&1 | tee -a "$LOG_FILE"; then
            echo "✓ Successfully deployed: $domain"
            success=$((success + 1))
        else
            echo "✗ Failed to deploy: $domain"
            failed=$((failed + 1))
        fi
        
        echo ""
    fi
done

echo "=========================================="
echo "Deployment Complete!"
echo "Completed at $(date)"
echo "Total: $total | Success: $success | Failed: $failed"
echo "Log saved to: $LOG_FILE"
echo "=========================================="
