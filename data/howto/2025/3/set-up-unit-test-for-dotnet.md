---
title: 'Set up unit test for C#/.NET'
is-draft: true
date-published: null
date-drafted: 2025-03-18
date-modified: 2025-03-31
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'C#/.NET'
  - 'Unit test'
---

# Set up unit test for C#/.NET

In this example, _XUnit_ is used for the unit testing.
There are few more popular options.

## Before starting: intial project structure

```txt
Foo/
|-- Foo/
|    '-- Foo.csproj
'-- Foo.Unit/
     '-- Foo.Unit.csproj
```

## Set up

```sh
dotnet new sln -n foo -o .

dotnet sln add ./Foo/Foo.csproj

dotnet new xunit -o ./Foo.Unit

dotnet add ./Foo.Unit/Foo.Unit.csproj reference ./Foo/Foo.csproj
  # In sub project Foo, add unit test reference

dotnet sln add ./Foo.Unit/Foo.Unit.csproj
```


## Test

```
dotnet test
```

## Basic CI/CD using the setup: GitHub example

```sh
mkdir -p .github/workflows/
touch .github/workflows/dotnet.yml
```

The workflow file `dotnet.yml` looks like the following:

```yaml
name: .NET

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: 8.0.x
      - name: Restore dependencies
        run: dotnet restore foo.sln
      - name: Build
        run: dotnet build foo.sln --no-restore
      - name: Pack
        run: dotnet pack foo.sln --no-restore
      - name: Test
        run: dotnet test foo.sln --verbosity normal
```

## After setup: project structure

```txt
Foo/
|-- .github/workflows/dotnet.yml
|-- foo.sln
|-- Foo/
|    '-- Foo.csproj
'-- Foo.Unit/
     '-- Foo.Unit.csproj
```

## See also

[Example](https://github.com/micttyoid/Sincere)

[Unit Testing with .NET](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test)

[Getting Started with xUnit.net](https://xunit.net/docs/getting-started/v2/netcore/cmdline)