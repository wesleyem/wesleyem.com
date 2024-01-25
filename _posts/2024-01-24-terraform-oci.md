---
layout: post
title: "Infrastructure as Code: Setting Up Oracle's Always Free Eligible Compute Intances with Terraform"
date: 2024-01-24
---

# Intro

I'd like to share a snapshot of my journey when I stumbled upon the enticing world of free cloud infrastructure services. Amidst the constraints of my limited free time, I find solace and excitement in exploring new technologies, a passion reflected in the development of my homelab environment over the years.

My homelab has become a playground where I've dabbled in various endeavors, from self-hosting applications to a complete overhaul of my home network. The latest chapter in this adventure revolves around the utilization of automation and Infrastructure as Code (IaC) to tap into the offerings of Oracle's Cloud Free Tier, specifically targeting a compute instance. In this documentation, I'll delve into two key aspects: Terraform and a bash script. Let's jump right in.

### Terraform Unveiled

For those unfamiliar, Terraform stands as an open-source Infrastructure as Code (IaC) tool meticulously crafted by HashiCorp. It empowers users to define and provision infrastructure resources through a declarative configuration language. Unlike the traditional manual setup and management of infrastructure, Terraform allows you to articulate your desired infrastructure state in code. It then takes charge, automating the provisioning and configuration of resources to align precisely with that specified state.

### Oracle's Free Tier Temptation

Direct from the [Oracle](https://www.oracle.com/cloud/free/) website, Oracle's Cloud Free Tier beckons with an invitation to sign up for an Oracle Cloud account. This opens doors to a plethora of Always Free services and a Free Trial boasting $300 in credits. The Always Free services remain at your disposal indefinitely, while the Free Trial services extend until either your $300 credits are depleted or the 30 days conclude—whichever comes first.

Armed with this knowledge, consider securing yourself an Oracle Cloud Account. I'll guide you through my attempts to harness the potential of free cloud computing resources. The journey awaits!

# Install Terraform

To install Terraform, follow the clear and concise guide provided on the HashiCorp website. You can access the guide [here](https://developer.hashicorp.com/terraform/install). The installation process is straightforward and well-documented. I won't delve into extensive details since the guide is comprehensive, but overall, installing Terraform was a simple and hassle-free experience.

# Terraform Project Setup

I initially attempted to provision a cloud compute instance using Oracle Cloud Infrastructure's web interface. However, I encountered a roadblock when I discovered that the web interface itself was utilizing Terraform on the backend. Unfortunately, the region I was working in was heavily saturated with users who had also taken the same approach. As a result, my attempt to provision a new compute instance through the web interface failed, showing an error: Error: 500-InternalError, Out of host capacity.

Determined to overcome this challenge, I decided to take matters into my own hands and leverage Terraform directly on my local machine. My goal was not only to learn more about this Infrastructure as Code (IaC) tool but also to automate the process of creating a free compute instance. I wanted to create a script that would handle the attempt to provision the Oracle Cloud Free Tier compute instance from my command line.

As I delved into the world of Terraform, one thing led to another, and I found myself captivated by its capabilities. The initial objective evolved into a commitment to not only provision my Oracle Cloud Free Tier compute instance efficiently but also to automate the process persistently until success was achieved. This journey became an exploration of both the technical aspects of Terraform and the satisfaction of overcoming infrastructure provisioning challenges through automation.

### Project Layout

I decided to develop this project within my [homelab](https://github.com/wesleyem/homelab) repository for easy cloning onto the target machine. Within the repository, I created a `terraform` folder, and inside it, a subfolder named `oci` specifically for structuring my Terraform projects. The resulting folder structure looks like this:

```
├── logs
│   ├── repeater-errlog
│   ├── repeater-errlog-1705855935
│   ├── repeaterlog
│   └── repeaterlog-1705855935
├── main.tf
├── provider.tf
├── terraform.tfvars
└── variables.tf
```

The purpose of each file is as follows:

- **main.tf:** Defines the resources to be created in the project.
- **provider.tf:** Specifies the details of the provider, which, in this case, is 'oci' (Oracle Cloud Infrastructure).
- **variables.tf:** Contains the definitions of the variables used in the project.
- **terraform.tfvars:** This file is automatically loaded by Terraform and is used to define the values for the variables.
- **logs/*:** This simply houses the log files that my script makes when trying to provision this resource.

For detailed contents of these files, you can refer to the respective files in my [GitHub repository](https://github.com/wesleyem/homelab).

This structure aims to provide clarity and organization to the Terraform project within the homelab repository.

### Bash Script

To automate the process of provisioning or attempting to provision using Terraform I chose to write a simple script in bash that I could then hook to a cronjob and run on a set schedule. Simply put, this script iterates over three directories (corresponding to the three availability domains that are in my region) and attempts to provision the compute instance writing stderr to one file and stdout to another. A separate script runs on a cronjob to rotate the log files every 24 hours. Lets look at the `repeater.sh` script as I've so eloquently put it. /s

```bash
# repeater.sh
#!/bin/bash

# defines the working directory
base_dir="$HOME/projects/homelab/terraform/oci"

# defines the three directories that correspond to the three availability domains in my region
directories=("arm-compute-1" "arm-compute-2" "arm-compute-3")

# I probably could have chosen a better name but this is what happens when its 2 a.m. and a decision like this is on my plate
error_log_filename="repeater-errlog"

# Same as above, not my best names
log_filename="repeaterlog"

# Simple bash for loop that writes the timestamp to the log files then attempts to run terraform apply with some options directing stderr and stdout to their respective log files
for dir in "${directories[@]}"; do
    log_dir="$base_dir/$dir/logs"
    timestamp="Timestamp: $(date)"
    echo "$timestamp" >> "$log_dir/$error_log_filename"
    echo "$timestamp" >> "$log_dir/$log_filename"
    (cd "$log_dir/.." && terraform apply -auto-approve -no-color 2>> "$log_dir/$error_log_filename" 1>> "$log_dir/$log_filename")
done
exit
```

I set this up to run as a cronjob with `crontab -e` to run every hour. Should space become available my cronjob would snatch it up without me having to be hands on keyboard.

# Wrapping it all up

In this journey into the realms of Terraform and Oracle Cloud Infrastructure's Always Free Tier, we started by understanding Terraform as an open-source Infrastructure as Code (IaC) tool. Terraform empowers users to define and provision infrastructure resources declaratively, automating the configuration process to align with the specified state.

Venturing into the Oracle Cloud Free Tier, we explored the generous offerings, providing users with a range of Always Free services and a Free Trial with $300 of credits. Armed with this knowledge, the mission was clear - to grab some free cloud computing resources.

Installing Terraform proved to be a breeze, thanks to the clear and concise guide provided by HashiCorp. With the tool at our disposal, we then delved into configuring our Terraform project. Initially attempting manual provisioning through the web interface hit a snag, leading to the realization that the interface was powered by Terraform on the backend. Undeterred, we transitioned to direct Terraform usage on our local machine, embracing Infrastructure as Code and setting the stage for automation with the introduction of the repeater.sh bash script. This script, hooked to a cronjob, tirelessly attempted to provision compute instances in three availability domains, documenting each attempt in log files. The hands-free, scheduled execution provided a seamless approach to cloud resource acquisition, ready to capitalize on available space whenever it appeared.

As we wrap up this exploration, the journey from manual attempts to automated provisioning via Terraform stands as a testament to the flexibility and power of Infrastructure as Code. Happy Terraforming!