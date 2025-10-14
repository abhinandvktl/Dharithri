# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}
Message: {{message}}

Please respond to this inquiry as soon as possible.

Best regards,
Dharithri Postnatal Care Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Configure Environment Variables
Create a `.env` file in your project root with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_RECIPIENT_EMAIL=your-desired-email@example.com
```

## Step 6: Test the Form
1. Start your React app: `npm start`
2. Fill out the contact form
3. Click "Send Message"
4. Check your email for the message

## Production Deployment
- Make sure to add your environment variables to your hosting platform
- For Vercel: Add them in Project Settings > Environment Variables
- For Netlify: Add them in Site Settings > Environment Variables
- For other platforms: Follow their specific instructions for environment variables

## Free Tier Limits
- 200 emails per month
- Perfect for small to medium businesses
- Upgrade plans available if you need more emails
