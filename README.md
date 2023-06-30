# ECAST-Web-Frontend
ECAST frontend components and structures.

## Commit Guidelines
Run Prettier before commit
```bash
npm run prettier
``` 

## Warnings
The project will be ported to Next.JS in the future.

A workaround for static hosting is done with basename:
 ```tsx
<BrowserRouter basename="/ECAST-Web-Frontend">
```
Access the page at http://localhost:5173/ECAST-Web-Frontend


## Run
1. ```bash
   npm i
   ```

2. ```bash
   npm run dev
   ```
   The page will be available at http://localhost:5173/ECAST-Web-Frontend.

## Build
1. ```bash
   npm i
   ```
2. ```bash
   npm run build
   ```
