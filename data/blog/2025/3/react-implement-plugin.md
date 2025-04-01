---
title: Implement plugin in React
is-draft: true
date-published: null
date-drafted: 2025-03-31
date-modified: null
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - React
  - React 19
  - Javascript
---

# Implement plugin in React

```jsx

const MyApp = () => {
}

const withPlugin = (WrappedComponent, plugin) => {
    return (props) => {
        const pluginProps = plugin(props);
        return <WrappedComponent {...props} {...pluginProps} />;
    };
};
```
