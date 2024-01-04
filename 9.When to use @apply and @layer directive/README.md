## When to use @layer & @apply directive

>In tailwind css we have to use @layer and @apply directive when the same class or code is used again and again.
>Using unnecessarily @layer and @apply create a mess and rdability of code get lower.

#### Some sample of @layer & @apply directive are given below 
```
    @tailwind base;
@tailwind components;
.btn1{
    @apply text-blue-700 bg-red-600 rounded-xl hover:bg-orange-500 px-2 py-2 text-sm
}
@tailwind utilities;

@layer components{
    btn2{
        @apply text-blue-700 bg-red-600 rounded-xl hover:bg-orange-500 px-2 py-2 text-sm
    }
}


```
