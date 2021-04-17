---
title: Getting Started
slug: /
hide_table_of_contents: true
---

## Step 1: Generate a new Docusaurus site

If you haven't already, generate a new Docusaurus site using the classic template:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Step 2: Start your Docusaurus site

Run the development server in the newly created `my-website` folder:

```shell
cd my-website

npx docusaurus start
```

Open `docs/getting-started.md` and edit some lines. The site reloads automatically and display your changes.

## That's it!

Congratulations! You've successfully run and modified your Docusaurus project.


```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">
  Facebook blue
</Highlight> are my favorite colors.



## Rendering HTML

HTML code does work directly because this is using MDX (MD + JSX) parser.
So to render HTML code, write HTML as accepted in JSX

For example, to render this:
```html
This is <span style="background-color:#25c2a0;color:white;">HTML</span> <span style="background-color:#1877F2;color:white;">code</span>
```
write this:
```jsx
This is <span style={{backgroundColor:'#25c2a0',color:'white'}}>HTML</span> <span style={{backgroundColor:'#1877F2',color:'#white'}}>code</span>
```

Output: <br/>
This is <span style={{backgroundColor:'#25c2a0',color:'white'}}>HTML</span> <span style={{backgroundColor:'#1877F2',color:'#white'}}>code</span>