# Project Workflow Rules: Documentation & Implementation Records

## Rule: Mandatory Implementation Planning & Change Tracking via IDE Artifacts
1. **Never Save Markdown Files into the Repository Directory**:
   - Do NOT create or save `.md` files directly in `c:\Users\s\Desktop\CLUBS\ATC\AlanTuringClub`.
   - Always create documents as IDE Artifacts (`UserFacing: true`), which automatically open in a new tab in the IDE so the user can review and save them to their dedicated folder (`C:\Users\s\Desktop\CLUBS\ATC\New folder`).
2. **Implementation Workflow Protocol**:
   - **Step 1 (Plan First)**: Whenever given a prompt to build, configure, refactor, or migrate anything, draft the implementation strategy, architecture, and planned changes in a dedicated Markdown artifact first.
   - **Step 2 (Execute Changes)**: Execute the code changes in the codebase.
   - **Step 3 (Log Changes)**: Update the Markdown artifact with the exact record of changes made, files touched, components created, and status so the user maintains a complete, historical track record of all modifications.
