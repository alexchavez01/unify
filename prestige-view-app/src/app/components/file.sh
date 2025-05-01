#!/bin/bash

# Install core dependencies
npm install react react-dom next

npx shadcn@latest init
npx shadcn@latest add avatar badge button card input select tabs

npm install lucide-react
npm install class-variance-authority
npm install clsx
npm install tailwind-merge