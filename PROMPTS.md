### ***AB TALKS - AI Prompts Log***







##### **PROMPT 1***-* *BUILD A FULL WEBSITE - NOT A LOGO*





*Recreate this website exactly like the uploaded reference image. 3 pages. Dark neon glassmorphism.*



*YOU ARE BUILDING: "AB TALKS" - 60-day coding challenge platform*



*=== DESIGN === Colors: #6B21A8 Purple, #FF4ECB Pink, #3B82F6 Blue, #F97316 Orange Style: Glassmorphism cards, backdrop-blur, neon glow borders, gradient mesh background Font: Inter Animations: Framer Motion - fade in, hover glow, scroll animations Mobile: Must work perfect at 390px width first*



*=== BUILD EXACTLY THESE 3 PAGES ===*



*ROUTE 1: "/" LANDING PAGE Navbar: Logo "AB TALKS" white, Links: Home Challenge Dashboard About, Button "Join Challenge" Hero: "Master DSA. Build in Public. Get Hired." + Subtext + "Join Challenge →" button + 3D glowing purple cube on right Features: 4 cards - Daily Tasks, Track Progress, Build in Public, Earn Badges How It Works: 4 steps with numbers - Join, Complete, Track \& Share, Get Hired Footer: See below*



*ROUTE 2: "/dashboard" DASHBOARD Sidebar: Dashboard Challenge Calendar Badges AI Mentor Profile Settings Header: "Good evening, \[Name]!" + "Keep building, keep growing!" 4 Stat Cards with data: Streak: 12 days, Tasks: 48/60, Day: 12/60, Badges: 5 Progress Bar: 80% - "12/60 days completed" Sections: Recent Activity, Streak Calendar, Badges Earned, Leaderboard, AI Mentor Card Mock data: {streak: 12, tasksCompleted: 48, currentDay: 12, badgesEarned: 5, totalDays: 60}*



*ROUTE 3: "/day/12" CHALLENGE DAY Title: "Day 12 Task" Description: "Build a responsive navbar using React and Tailwind" Form: Input 1 "GitHub Link", Input 2 "LinkedIn Post Link" Button: "Submit Proof of Work"*



*=== FOOTER FOR ALL PAGES === Logo: "AB TALKS" white Tagline: "60-Day Coding Challenge for Indian Students" Social: Instagram https://www.instagram.com/abtalksonai?igsh=YnEwcmFlMmw4a3J6 | LinkedIn https://www.linkedin.com/company/abtalks-on-ai/ | YouTube https://youtube.com/@abtalksonai?si=hoEXKKHCr8CIZSdH | X https://x.com/abtalksonai | Discord https://discord.com/invite/j4Q8tvDj6 Email: Team@abtalks.in Copyright: © 2026 AB TALKS*



*=== RULES === Use mocked JSON data. No login. No database. Production ready code.*









##### **PROMPT 2***-*  *MAKE EVERYTHING CLICKABLE AND FUNCTIONAL. KEEP CURRENT DESIGN.*



*FIX THESE 4 THINGS:*



*1. SOCIAL LINKS IN FOOTER:*

*Make all icons clickable and open in new tab.*

*Instagram: https://www.instagram.com/abtalksonai?igsh=YnEwcmFlMmw4a3J6*

*LinkedIn: https://www.linkedin.com/company/abtalks-on-ai/*

*YouTube: https://youtube.com/@abtalksonai?si=hoEXKKHCr8CIZSdH*

*X: https://x.com/abtalksonai*

*Discord: https://discord.com/invite/j4Q8tvDj6*

*Email: mailto:Team@abtalks.in*



*2. NAVIGATION:*

*Make Navbar links work: Home -> /, Challenge -> /day/12, Dashboard -> /dashboard, About -> scroll to how-it-works section*

*Make "Join Challenge" button go to /day/12*

*Make logo "AB TALKS" clickable -> goes to /*

*Keep the current logo icon, don't change it.*



*3. DASHBOARD INTERACTIONS:*

*Add mock data and make cards interactive.*

*Streak Calendar: Show 12 days marked as completed with purple glow*

*Recent Activity: Add 3 fake activities with timestamps*

*Leaderboard: Add 5 fake users with ranks*

*AI Mentor Button: On click show alert "AI Mentor coming soon!"*

*Progress Bar: Animate to 80%*



*4. DAY 12 FORM FUNCTIONALITY:*

*Make "Submit Proof of Work" button work.*

*On click: Validate both GitHub and LinkedIn inputs are not empty.*

*If empty show error "Please add both links"*

*If filled show success toast "Submitted! Day 12 completed" and clear inputs.*

*Store submitted data in localStorage with key "day12\_submission"*



*IMPORTANT: Don't change colors or layout. Only add functionality. Test all buttons.*





##### **PROMPT 3-** *ADD PREMIUM ANIMATIONS AND STRONGER GLASSMORPHISM. KEEP EXISTING DESIGN.*





*ANIMATION UPGRADES - USE FRAMER MOTION:*



*1. CURSOR SPARKLE EFFECT:*



*Add a custom cursor that follows mouse. When user moves cursor, show small glowing balls/sparkles that trail behind and fade out. Color: Pink #FF4ECB and Purple #6B21A8. 3-4 small dots that shimmer and float up. Don't show on mobile.*



*2. GLASSMORPHISM UPGRADE:*



*Make all cards 2x more glassy. Add backdrop-blur-xl, semi-transparent border white/10, and stronger neon glow on hover. Glow color should match card. Add subtle gradient mesh background animation that slowly moves.*



*3. EXTRA ANIMATIONS TO ADD:*



*Page Load: Each section fades in with stagger 0.1s delay*



*Cards: On hover - lift 8px, scale 1.03, add neon glow border*



*Buttons: On hover - scale 1.05 + pink/purple shadow glow + shimmer effect passing left to right*



*Navbar: On scroll add glass background with blur*



*Icons: Float up and down slowly 2px*



*Stat Cards: Number count-up animation from 0 to value*



*Progress Bar: Smooth fill animation with glowing end*



*3D Robot: Add floating animation + slow rotation + glow pulse*



*Page Transitions: Fade + slide up when changing routes*



*4. SCROLL ANIMATIONS:*



*When user scrolls, elements fade in + slide up from bottom. Use "whileInView"*



*5. PARTICLES:*



*Add subtle floating particles/orbs in background. Very light, not distracting.*



*IMPORTANT: Keep performance smooth. Don't lag on mobile. All animations must feel premium and motivating. Don't break existing functionality.*



##### **PROMPT 4-** *Update the AB TALKS 60-Day DSA Challenge website with these changes. DO NOT change any existing text/content.*



*1. DARK MODE TOGGLE*

*Add a toggle button at top-right of navbar with sun/moon icon.* 

*On click, switch entire website to "Glassmorphism Dark Mode".* 

*Dark mode theme: deep black + blue + purplish gradient background with glassmorphism effect.* 

*All cards, navbar, buttons should have semi-transparent glass + blur + glowing blue/purple border.* 

*Make it super shiny, glowy, animated.* 

*In dark mode, all text should stay the same, only colors/background should change.* 

*Save user preference in localStorage.*



*2. FIX NAVBAR LINKS*

*Right now clicking Home, Challenge, Dashboard, About shows "Coming Soon".* 

*Remove "Coming Soon".* 

*Create separate sections for each: #home, #challenge, #dashboard, #about*

*Make navbar links scroll smoothly to those sections.* 

*For Dashboard, use the dashboard UI we already made.* 

*Add 2 more sections: #calendar and #badges with placeholder content for now.*



*3. ANIMATIONS + EFFECTS*

*Keep all existing animations.* 

*Add more:* 

*- Floating particles in background for dark mode*

*- Glow hover effect on all buttons and cards*

*- Glassmorphism shine animation on hover*

*- Staggered fade-in animation for sections on scroll*

*- Make everything feel "premium, hard, shiny"*



*4. MOBILE CURSOR EFFECT*

*On desktop we have cursor glow effect.* 

*Add the same effect for mobile: where user touches, show a glowing blue/purple ripple that follows finger.*



*5. POLISH*

*Make everything fully responsive.* 

*Navbar should be sticky.* 

*Use Tailwind + Framer Motion for animations.* 

*Keep existing design language, just enhance it.*



*Important: Do not delete or change any existing text. Only add features and change styling/colors.*

