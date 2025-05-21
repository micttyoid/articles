---
title: 'Graphs'
date-published: 2025-05-20
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Graph'
---

# Graphs

**Definition.** A _graph_ is a set of _vertices_ and a collection of _edges_ that each connect a pair of vertices.

**Remarks**.
- Also known as or emphasized by _Undirected graph_.
- Vertex is often called "node": For all graphs $G$, a node $v$ is equivalent to vertex $v$ for every $v$ in $V$

## Tree

**Definition.** A _tree_ is an acyclic connected graph. A disjoint set of trees is called a _forest_. A _spanning tree_ of a connected graph is a subgraph that contains all of that graph's vertices and is a single tree. A _spanning forest_ of a graph is the union of spanning trees of its connected components.

## Directed graph

**Definition.** A _directed graph_ (or _digraph_) is a set of vertices and a collection of directed edges. Each directed edge connects an ordered pair of vertices.

**Remark**. aka. Digraph

## Directed acyclic graph

**Definition.** A _directed acyclic graph_ is a digraph with no directed cycles.

**Remark**. aka. DAG

## Bipartite graph

**Definition.** A graph $G = (V, E)$ is _bipartite_ if its vertex set $V$ can be partitioned into two sets $X$ and $Y$ such that every edge has one end in $X$ and the other end in $Y$.


**Properties**
- If a graph $G$ is bipartite, then it **cannot contain an odd cycle**.

## Common definitions among graphs and nomenclature

### General

**Definitions**
- A _simple cycle_ is a cycle with no repeated edges or vertices (except the requisite repetition of the first and last vertices).
- The _length_ of a path or a cycle is its number of edges.

**Odd cycle**: a cycle of odd length.

### Adjacency, Degree, and Subgraph

**Adjacency**: When there is an edge connecting two vertices, we say that the vertices are _adjacent to_ one another and that the edge is _incident to_ both vertices. 

**Degree of vertices**: The _degree_ of a vertex is the number of edges incident to it.

**Subgraph**: A _subgraph_ is a subset of a graph's edges (and associated vertices) that constitutes a graph.

### Undirected Context

**Definition.** A graph is _connected_ if there is a path from every vertex to every other vertex in the graph. A graph that is _not connected_ consists of a set of _connected components_, which are maximal connected subgraphs.

**Definitions**
- A _path_ in a graph is a sequence of vertices connected by edges.
- A _simple path_ is one with no repeated vertices.
- A _cycle_ is a path with at least one edge whose first and last vertices are the same.

### Directed Context

**Definitions**
- A _directed path_ in a digraph is a sequence of vertices in which there is a (directed) edge pointing from each vertex in the sequence to its successor in the sequence.
- A _directed cycle_ is a directed path with at least one edge whose first and last vertices are the same.
- A directed graph is _strongly connected_ if,
for every two vertices $u$ and $v$, there is a path from $u$ to $v$ and a path 
from $v$ to $u$.

**Outdegree**: the number of edges going from it.

**Indegree**: the number of edge going to it.

**Mutually reachable**: Two vertices $u$ and $v$ in a directed graph are _mutually reachable_ if there is a path from $u$ to $v$ and also a path from $v$ to $u$. For example, a (directed) graph is _strongly connected_ if every pair of vertices is _mutually reachable_.

**Strong component**: A _strong component containing vertex_ $s$ is the set of all $v$ such that $s$ and $v$ are mutually reachable.

## Reference(s)

- J. Kleinberg and É. Tardos, _Algorithm Design_. Pearson, 2006.
- R. Sedgewick and K. Wayne, _Algorithms_, 4th ed. Addison-Wesley, 2011.
