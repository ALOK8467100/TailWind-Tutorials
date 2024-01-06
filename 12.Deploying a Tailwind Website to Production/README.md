## How to deploy a tailwind website to production:

###### By using tailwind & vite we can easily make production bundles and deploy it.

>So, open package.json, it's look like this.

```
{
  "name": "5.creative-responsive-designs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "vite"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0"
  },
  "dependencies": {
    "vite": "^5.0.10"
  }
}

```

> In this,
```
"scripts": {
    "start": "vite"
  },
```
> We have to have add ** "build": "vite build" **
```
"build": "vite build"
```

> After that go to **index.html** file and correct it as 
style.css to /style.cc

```  <link rel="stylesheet" href="/style.css">```

>After that  open terminal and run **npm run build**