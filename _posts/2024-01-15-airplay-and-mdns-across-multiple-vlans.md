---
layout: post
title: "When Smart Tech Plays Hard to Get: My Quest to Un-Segment and Reconnect"
subtitle: "Getting AirPlay to work across VLANs"
date: 2024-01-15
---

# Introduction

Hey tech-savvy pals! So, I recently decided to level up my home network game and went all-in on segmentation – you know, the whole IoT VLAN and Trusted VLAN shebang. All in the name of security, right? Well, turns out, I inadvertently kicked my beloved AirPlay and casting features to the curb in the process!

Picture this: You're all set to binge-watch your favorite show, ready to cast it on the big screen, and bam! Your devices are like, "Nah, we're on different networks now, good luck with that." Cue the frustration.

But fear not, my fellow victims of tech-induced woes! I embarked on a mission to bring back the good vibes of seamless casting and AirPlay, even with my network playing hard to get. In this blog post, I'm spilling the beans on the struggles, the "aha" moments, and the hacks I discovered to reunite my devices across VLAN borders.

So, grab your popcorn (or whatever snack suits your fancy), because we're diving into the wild world of home networks, untangling the mess, and ensuring our gadgets play nice with each other again. Let the un-segmentation adventure begin!

# Getting mDNS to resolve across VLANs

#### Install Avahi on your OpenWRT router

```bash
opkg update && opkg install avahi-daemon
```  

#### Edit the Avahi-daemon config

```bash
[reflector]
enable-reflector=yes

[server]
# br_VLAN10 and br_VLAN20 are the Trusted and IoT vlan interfaces
# found under Network -> Interfaces
allow-interfaces=br_VLAN10,br_VLAN20
```

#### Restart Avahi service

```bash
/etc/init.d/avahi-daemon start
/etc/init.d/avahi-daemon enable
```

#### Update firewall rules

This rule allows UDP traffic on port 5353 between any source and the multicast address 224.0.0.251, facilitating the proper functioning of mDNS services, often used for device discovery and service advertisement in local networks

```
firewall.cfg0592bd=rule
firewall.cfg0592bd.name='Allow-mDNS'
firewall.cfg0592bd.proto='udp'
firewall.cfg0592bd.src='*'
firewall.cfg0592bd.src_port='5353'
firewall.cfg0592bd.dest_ip='224.0.0.251'
firewall.cfg0592bd.dest_port='5353'
firewall.cfg0592bd.target='ACCEPT'
```

The second, third, and fourth rules collectively enable AirPlay communication between devices in the 'IoT' network and the 'Trusted' network. They cover a range of destination ports and use both TCP and UDP protocols to facilitate various aspects of AirPlay functionality.

```
firewall.cfg0692bd=rule
firewall.cfg0692bd.src='IoT'
firewall.cfg0692bd.dest='Trusted'
firewall.cfg0692bd.dest_port='49152-65535'
firewall.cfg0692bd.target='ACCEPT'
firewall.cfg0692bd.name='Allow-AirPlay-1'

firewall.cfg0792bd=rule
firewall.cfg0792bd.name='Allow-AirPlay-2'
firewall.cfg0792bd.proto='tcp'
firewall.cfg0792bd.src='IoT'
firewall.cfg0792bd.src_port='7000'
firewall.cfg0792bd.dest='Trusted'
firewall.cfg0792bd.target='ACCEPT'

firewall.cfg0892bd=rule
firewall.cfg0892bd.name='Allow-AirPlay-3'
firewall.cfg0892bd.proto='udp'
firewall.cfg0892bd.src='IoT'
firewall.cfg0892bd.src_port='6002'
firewall.cfg0892bd.dest='Trusted'
firewall.cfg0892bd.target='ACCEPT'
```

Make sure you run `uci commit` to ensure the changes are saved. You could also do all this from the web interface. Here is a screenshot of the rules as they sit in my configuration.

![firewall rules](/assets/jpg/2024/openwrt/2024-01-15-firewallrulesforairplay.png)

# Thanks for reading

In untangling the web of segmented networks, we've cracked the code to revive seamless AirPlay magic. From the all-encompassing 'Allow-AirPlay-1' to the precision strikes of 'Allow-AirPlay-2' and 'Allow-AirPlay-3,' our devices are back in sync.

This journey isn't just about rules; it's a testament to adaptability in our tech-driven lives. We've learned that security doesn't mean sacrificing convenience; it's about finding the sweet spot.

So, whether you're a tech whiz or just want your smart gadgets to play nice, remember: connectivity triumphs. Here's to rules that bridge gaps, devices that dance, and the endless possibilities in our connected havens!