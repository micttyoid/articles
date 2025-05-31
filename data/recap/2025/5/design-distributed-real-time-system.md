---
title: "Design of distributed real-time system"
date-published: 2025-05-31
date-drafted: null
date-modified: 2025-05-31
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Design of distributed real-time system'
---

# Design of distributed real-time system

## Minimal example

### Container

```[c4plantuml]
@startuml
!theme C4_green from https://raw.githubusercontent.com/micttyoid/articles/main/share/c4puml/themes
!include https://raw.githubusercontent.com/micttyoid/articles/main/share/c4puml/C4_Container.puml

LAYOUT_WITH_LEGEND()

title Container view: Minimal distributed real-time system

Person(user, "User", "A person with the account")

Container(client, "Client", "", "Renders subject or handles input")

System_Boundary(c1, "Distributed real-time system") {
    Container(auth_server, "Auth Server", "", "Verifies account/login")
    Container(application, "Application", "", "Provides core functionality")
    ContainerDb(database, "Database", "", "Stores user information, hashed auth credentials, access logs, etc.")
}

Rel(user, client, "Interacts via UI")
Rel(client, auth_server, "", "HTTP")
Rel(client, application, "", "TCP, HTTP")

Rel_Neighbor(auth_server, application, "Handshakes")
Rel(auth_server, database, "", "TCP/IP")
Rel(application, database, "", "TCP/IP")
@enduml
```

### Deployment

TODO: pipeline, devlet, adminlet

```[c4plantuml]
@startuml
!theme C4_green from https://raw.githubusercontent.com/micttyoid/articles/main/share/c4puml/themes
!include https://raw.githubusercontent.com/micttyoid/articles/main/share/c4puml/C4_Container.puml
!include https://raw.githubusercontent.com/micttyoid/articles/main/share/c4puml/C4_Deployment.puml

LAYOUT_WITH_LEGEND()

title Deployment view: Minimal distributed real-time system

Deployment_Node(cloud, "Public cloud / On-premise", "") {
  interface "Gateway(s) / LB(s)" as lb
  Deployment_Node(app_cluster_i, "Application Cluster 1", "") {
    Container(auth_server, "Auth Server", "", "")
    Container(application, "Application", "", "Core Logic")
  }

  Deployment_Node(app_cluster_ii, "Application Cluster 2", "") {
  }

  Deployment_Node(db_tier, "Database Cluster", "") {
    ContainerDb(database, "Database", "", "")
  }
}

Deployment_Node(device, "User devices / User platforms", "") {
  Container(client1, "Client", "", "")
  Container(client2, "Client", "", "")
  Container(clientN, "Client", "", "")
}

Rel(lb, auth_server, "HTTP", "")
Rel(lb, application, "WebSocket/TCP", "")
Rel(lb, app_cluster_ii, "", "")

Rel(auth_server, database, "TCP", "pool")
Rel_Neighbor(auth_server, application, "")
Rel(application, database, "TCP", "pool")
Rel(app_cluster_ii, database, "", "")

Person(user1, "User 1")
Person(user2, "User 2")
Person(userN, "User N")
Rel(user1, client1, "", "")
Rel(user2, client2, "", "")
Rel(userN, clientN, "", "")
Rel(client1, lb, "")
Rel(client2, lb, "")
Rel(clientN, lb, "")
@enduml
```

## Analysis

TODO

## Others

### Additional property and design change

Additional constraint such as high performance or high interactivity does not
come with a big difference at the container/deployment level of design.

### Deployment strategy

It is mostly deducible. For example, blue-green scheme can be obtained by 
coloring two clusters and enabling only another of them at each update.
