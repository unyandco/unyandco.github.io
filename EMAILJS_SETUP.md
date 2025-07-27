# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your UNY & CO website contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update the Code
In `src/components/ContactSection.tsx`, replace these values:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your email for the submission

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- For more emails, upgrade to paid plan

## Security Note
The public key is safe to use in frontend code. EmailJS handles the security on their end.
