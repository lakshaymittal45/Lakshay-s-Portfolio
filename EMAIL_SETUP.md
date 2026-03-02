# Email Setup Instructions for Portfolio Contact Form

## Setup EmailJS (Free - 200 emails/month)

### Step 1: Install EmailJS Package
```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 3: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the prompts to connect your email
5. Copy the **Service ID** (e.g., `service_abc123`)   

### Step 4: Create Email Template
1. Go to **Email Templates** section
2. Click **Create New Template**
3. Configure the template:

**Template Name:** `Portfolio Contact Form`

**Subject:** `New Message from {{name}} - Portfolio`

**Content (Switch to HTML editor):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #7f8c8d; font-size: 13px">{{email}}</div>
          <div style="color: #95a5a6; font-size: 12px; margin-top: 5px">Sent at: {{time}}</div>
          <p style="font-size: 16px; margin-top: 10px; color: #34495e">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ecf0f1; color: #95a5a6; font-size: 11px">
    📧 Sent from your portfolio contact form
  </div>
</div>
```

**Important:** Make sure to switch to the **HTML** editor tab in EmailJS when pasting this template.

4. Save and copy the **Template ID** (e.g., `template_xyz789`)  

### Step 5: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abcdefghijklmnop`)

### Step 6: Update Your Code
Open `src/components/Contact/Contact.jsx` and replace these lines (around line 23-25):

```javascript
const serviceID = 'YOUR_SERVICE_ID' // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID' // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

### Example:
```javascript
const serviceID = 'service_yj8ahdq'  
const templateID = 'template_5gxr2ht'
const publicKey = 'dYXNNOgQTS7KPBjU2'
```

### Step 7: Test Your Form
1. Run your portfolio: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email (mittalakshay89@gmail.com)

---

## Important Notes

- ✅ **Free Tier:** 200 emails per month
- ✅ **No Backend Required:** Works entirely from frontend
- ✅ **Spam Protection:** EmailJS includes reCAPTCHA option
- ⚠️ **Keep Keys Safe:** Don't share your EmailJS credentials
- 📧 **Delivery:** Emails arrive instantly (check spam folder initially)

## Troubleshooting

### Form shows error message
- Verify all three credentials are correct (Service ID, Template ID, Public Key)
- Check EmailJS dashboard for any service issues
- Ensure email service is connected and verified

### Not receiving emails
- Check spam/junk folder
- Verify email service is active in EmailJS dashboard
- Test with EmailJS's testing feature first

### Rate limit reached
- Free tier: 200 emails/month
- Upgrade to paid plan if needed
- Contact info is still visible for direct email

---

## Alternative: Use Direct Email Link (No Setup)

If you prefer not to use EmailJS, users can still contact you via the email link in the contact section or by clicking the Email channel card, which opens their default email client.

---

**Your Email:** mittalakshay89@gmail.com
**GitHub:** lakshaymittal45
**LinkedIn:** lakshaymittal45
