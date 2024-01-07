---
layout: post
title: "How to Enable Secure Shell (SSH) Access to Your Synology NAS"
date: 2022-10-08
---

Enabling SSH access to your Synology NAS can enhance its functionality and provide greater control and efficiency. Here are the steps to enable SSH access to your Synology NAS:

## Step 1:

Log in to your Synology NAS and launch the Control Panel. Then, select Terminal & SNMP.

![screenshot of the synology control panel](/assets/jpg/2022/synology/2022-10-08-control-panel.png){: class="img-fluid"}

## Step 2:

Check the box that says "Enable SSH service." The default port is 22, but you can change it to another port for added security.

## Step 3:

If you use Synology's firewall, create an "allow" rule for the port you specified in step 2. You can do this through the Control Panel at Security > Firewall > Edit Rules.

![screenshot of the synology firewall panel](/assets/jpg/2022/synology/2022-10-08-ssh-firewall-config.png){: class="img-fluid"}

## Step 4:

To connect to your NAS via SSH, open your terminal or use an SSH tool like Putty and run the command below:

```bash
ssh -p PORT USERNAME@SYNOLOGY_NAS_IP
```

Replace PORT with the port number you specified in step 2, USERNAME with the username you use to log in to your NAS, and SYNOLOGY_NAS_IP with the IP address of your NAS.

## Step 5:

Keep in mind that enabling SSH access can introduce security concerns. In a separate article, we will discuss ways to mitigate these concerns and reduce your attack surface by hardening your NAS.
