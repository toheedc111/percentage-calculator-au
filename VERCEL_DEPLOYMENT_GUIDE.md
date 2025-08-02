# Vercel Deployment Guide for Australian Percentage Calculator

## 🚀 Quick Deployment Steps

### 1. Import Project to Vercel
1. Go to https://vercel.com/dashboard
2. Click **"New Project"**
3. Select repository: `toheedc111/percentage-calculator-au`
4. **Important:** Choose branch `devin/1754127567-initial-deployment`

### 2. Configure Build Settings
```
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x (recommended)
```

### 3. Environment Variables (if needed)
No environment variables required for this static site.

### 4. Deploy
Click **"Deploy"** - Vercel will automatically:
- Install dependencies
- Run TypeScript compilation
- Build the Vite project
- Deploy to a temporary URL

### 5. Add Custom Domain
After successful deployment:
1. Go to **Project Settings → Domains**
2. Add domain: `calculatorpercentage.com.au`
3. Configure DNS records as instructed by Vercel

## 🔧 DNS Configuration
Vercel will provide specific DNS records to configure:
- A record or CNAME record pointing to Vercel's servers
- SSL certificate will be automatically provisioned

## ✅ Verification Checklist
After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All calculator tools work
- [ ] Blog pages load
- [ ] Privacy Policy and Disclaimer pages work
- [ ] Mobile responsiveness
- [ ] SSL certificate is active
- [ ] Custom domain redirects properly

## 📱 Features Included
- 🧮 5 Calculator tools (increase, decrease, difference, X% of Y, GST)
- 📝 8 Blog articles with Australian examples
- 📄 Privacy Policy and Disclaimer pages
- 🔍 SEO optimized with structured data
- ♿ Accessibility features
- 📱 Mobile-first responsive design

## 🛠️ Technical Stack
- React 18 + TypeScript
- Vite build system
- Tailwind CSS + shadcn/ui
- React Router for navigation
- React Helmet for SEO

## 🆘 Troubleshooting
If build fails:
1. Check that Root Directory is set to `frontend`
2. Verify Build Command is `npm run build`
3. Ensure Output Directory is `dist`
4. Try Node.js version 18.x if using different version

## 📞 Support
If you need help with domain configuration, I have your domain credentials and can assist with DNS setup.
