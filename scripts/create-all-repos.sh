#!/bin/bash

# Script to create all 133 GitHub repos under mysafawale-ai
# Run: chmod +x scripts/create-all-repos.sh && ./scripts/create-all-repos.sh

DOMAINS_DIR="/Applications/Safawala ALL/app/domains"
LOG_FILE="/Applications/Safawala ALL/repo-creation-log.txt"

echo "Starting repo creation at $(date)" > "$LOG_FILE"

count=0
total=$(ls -1 "$DOMAINS_DIR" | grep -v ".DS_Store" | wc -l | tr -d ' ')

for domain in $(ls -1 "$DOMAINS_DIR" | grep -v ".DS_Store"); do
    count=$((count + 1))
    
    # Convert domain.com to domain-com format
    repo_name=$(echo "$domain" | sed 's/\./-/g')
    
    # Create description from domain name
    description="$domain website - Safa & Turban Services"
    
    echo "[$count/$total] Creating repo: mysafawale-ai/$repo_name"
    
    # Create repo
    gh repo create "mysafawale-ai/$repo_name" --public --description "$description" 2>&1
    
    if [ $? -eq 0 ]; then
        echo "✓ Created: $repo_name" | tee -a "$LOG_FILE"
    else
        echo "✗ Failed or exists: $repo_name" | tee -a "$LOG_FILE"
    fi
    
    # Small delay to avoid rate limiting
    sleep 1
done

echo ""
echo "Completed at $(date)" | tee -a "$LOG_FILE"
echo "Total repos processed: $count"
