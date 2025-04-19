---
title: Set up Jupyter Notebook for Ruby
date-published: 2025-03-18
date-modified: 2025-03-26
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - Jupyter
  - Ruby
---

# Set up Jupyter Notebook for Ruby

## Download Jupyter Polyglot

Donwnload docker image, `lukeyoo/jupyter-polyglot`.

```sh
docker pull lukeyoo/jupyter-polyglot
```

## Create a folder and launch the Docker image

Create a notebook directory where you'll write the notebook files.

```sh
mkdir ./my_notebook
```

Spin up the Jupyter container.

```sh
docker run --name 'jupyter-container' -p 8888:8888 -v ./my_notebook:/notebook -dit lukeyoo/jupyter-polyglot
```

## Access Jupyter in Your Browser

Open a web browser and navigate to `http://localhost:8888`.
