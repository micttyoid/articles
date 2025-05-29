---
title: 'Single-server queue'
date-published: 2025-05-29
date-drafted: null
date-modified: 2025-05-29
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Queueing theory'
  - 'Single-server queue'
---

# Single-server-queue

## Simple single-server queueing system

```[dot]
digraph G {
    rankdir=LR;
    labelloc=t;
    MainStart [shape=none, label="", width=0, height=0];
    MainEnd   [shape=none, label="", width=0, height=0];
    subgraph cluster_OuterBox {
        style="rounded";
        label="Service Facility";
        OuterBoxStart [shape=none label="" width=0, height=0];
        OuterBoxEnd   [shape=none label="" width=0, height=0];
        subgraph cluster_Queue {
            border=0;
            label="Queue"
            border=0;
            nodesep=0.3;
            ranksep=0;
            node [shape=circle, style=filled, fillcolor="#666666", width=0.35, fixedsize=true];
            Enqueue [shape=rect, style=invis, width=0.35, fixedsize=true];
            //Dequeue [shape=circle, style=invis, width=0.35, fixedsize=true];
            A,B,C,D [label=""];
            edge [style=invis];
            Enqueue -> A;
            A -> B -> C -> D[shape=circle, weight=10];
        }
        
        subgraph cluster_Server {
            style=invis;
            border=0;            
            Server [label="" shape=doublecircle, width=0.35, fixedsize=true, style=filled; fillcolor="#666666"];
            D -> Server [arrowhead=none];
            server_label [shape=plaintext, label="Server", fixedsize=true, height="-1"];
        }
        Server -> OuterBoxEnd;
    }
    MainStart -> OuterBoxStart [label="Arrivals"];
    OuterBoxStart -> A;

    OuterBoxEnd-> MainEnd [label="Departures"];    
}
```

## Common assumptions about queueing systems for analysis

**Immediacy of service and departure**
- If the server is free, ex. not already serving a customer, an arriving customer goes immediately into service. No time at all is spent in the queue.
- When the server becomes free, a customer is chosen from the queue according to a scheduling policy and immediately enters into service. The time between the departure of one customer and the start of service of the next customer is zero.

**Perfectly patient customers**
- If the server is not free (busy), then the customer joins a queue of waiting customers and stays in the queue until entering service.
- Customers remain in the facility until their service is completed and then they depart. Customers do not become impatient and leave before they receive service.

## Reference(s)

- W. J. Stewart, _Probability, Markov Chains, Queues, and Simulation: The Mathematical Basis of Performance Modeling_. Princeton, NJ, USA: Princeton University Press, 2009.
