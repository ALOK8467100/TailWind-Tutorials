## 10.Customizing Tailwind CSS using tailwind.config.js file

> The best beauty of tailwind is to change the config file accourding to our requirment.
> In tailwind css we can customize margin, border, background, spacing, breakpoints, values etc.


#### HOw to setup.

> 1. We have to open terminal & run this command
    > npx tailwindcss init --full
> With some changes by adding creating new file having any name like confAlok.
> So we run ```npx tailwindcss init confAlok --full``` in our terminal.
> Now when we open this confAlok file it shows this kind of code.

```
@type {import('tailwindcss').Config}
module.exports = {
  content: [],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    accentColor: ({ theme }) => ({
      ...theme('colors'),
      auto: 'auto',
    }),
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
  }
}

```   
> In confAlok it contain content[], presets[], darkmode:, theme:{}

> When we click on theme{}
> Inside it we have various components like colors, screens etc.
> let's take spacing for example:
```
spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },

``` 
> Now see in spacing we have 3rem and 3.5rem 
> If we want to use 3.25rem in out tailwind so we can customize it.


#### How to  customize it 

> For customizing it we open our tailwind.config.js file which look like this.
```
@type {import('tailwindcss').Config}
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}
```
> Inside theme:{ extend:{here we make our changes }} we make our changes.

```
@type {import('tailwindcss').Config}
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      
      spacing:{
        13: '3.25rem'
      },
      
    
    },
  },
  plugins: [],
}


```
#### Now see one more example how we change screen size on tailwind.config.js

> So in tailwind we have five screen size 

      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
     '2xl': '1536px',


> We want to add one more screen size let xsm = 'extra scmall having 500px'
> So for this we add this screen size in tailwind.config.js 



screens:{
        xsm: '500px'
      },


```
@type {import('tailwindcss').Config} 
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        xsm: '500px'
      },
      spacing:{
        13: '3.25rem'
      },
      fontSize:{
        '10xl':['9rem',{lineHeight: '1.5'}],
      }
    },
  },
  plugins: [],
}

```
