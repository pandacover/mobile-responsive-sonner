# Smart Sonner

A tiny wrapper around **sonner** that automatically picks the best toast position based on device type.

## What it does

Instead of hardcoding toast positions everywhere, this picks sensible defaults for you:

- Mobile → top-center 
- Desktop → default sonner position 

You can still override anything when you need to.

## Why it exists

One toast position doesn’t fit every screen.
This keeps UX clean without repeating device checks all over your code.

## Example

```ts
import { useToast } from "./use-better-toast";

const toast = useToast();

toast("Saved successfully");
toast("Custom", { position: "top-center" });
```

## Notes

This is just a thin layer over `sonner`, not a replacement.
