---
title: Setting up Jupyter Notebook for Ruby
date_published: 2025-03-18
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - Jupyter
  - Ruby
---

> I heard you liked Ruby and Jupyter so we put them together in your Docker Desktop.
> Your mission awaits.

# Setting up Jupyter Notebook for Ruby

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

> Unlock the power of Ruby, and build something extraordinary.
> This message will self-destruct in 3... 2... 1... 🕶️🚀