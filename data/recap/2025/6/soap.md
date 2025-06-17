---
title: "SOAP: Simple Object Access Protocol"
date-published: 2025-06-17
date-drafted: null
date-modified: 2025-06-17
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Protocol"
  - "SOAP"
  - "XML-messaging"
  - "XML-based protocol"
  - "RPC-handling protocol"
  - "XML-RPC"
---

# SOAP: Simple Object Access Protocol

```xml
<ENV:Envelope
    xmlns:ENV="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ENC="http://schemas.xmlsoap.org/soap/encoding/"
    xmlns:xsi="http://www.w3.org/1999/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/1999/XMLSchema"
    xmlns:bar="urn:FOO"
>
<ENV:Header>
</ENV:Header>
<ENV:Body>
    <bar:drink>water</bar:drink>
</ENV:Body>
</ENV:Envelope>
```

## Table of Contents
- [SOAP over TCP/IP](#soap-over-tcpip)
  - [HTTP binding](#http-binding)
- [SOAP over UDP](#soap-over-udp)
- [In distributed real-time system](#in-distributed-real-time-system)
- [Implementation-specific behaviors](#implementation-specific-behaviors)

## SOAP over TCP/IP

### HTTP binding

TODO: Header forms

## SOAP over UDP

TODO: _SOAP-over-UDP_

## In distributed real-time system

Used to achieve features of the application that are for example:
- Optional: establish if it's enabled
- Limited: admin command

## Implementation-specific behaviors

Version bridging
ex. starts with 1.1 and accept other versions

## Reference(s)

- [H. Comb](https://www.devharryc.com/) et al. [_SOAP-over-UDP_](
https://recruiter-magnet.lukeyoo.fyi/static/docs/soap-over-udp.pdf). 
BEA Systems Inc., Lexmark, Microsoft Corporation, Inc, and Ricoh. 2004.

- [_SOAP Version 1.2 Part 1: Messaging Framework (Second Edition)_](
https://www.w3.org/TR/soap12-part1/). XML Protocol Working Group, 
World Wide Web Consortium (W3C), 2007.

- [SOAP Version 1.2 Part 0: Primer (Second Edition)](
https://www.w3.org/TR/soap12-part0/). XML Protocol Working Group, 
World Wide Web Consortium (W3C), 2007.



