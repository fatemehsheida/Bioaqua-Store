# 🛍️ Bioaqua Cosmetics Clone

![Project Banner](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnRupECchBvuidZXZjhy_X-i918AD8fE5_g&s)  
*Modern e-commerce platform inspired by Bioaqua Cosmetics*  
Developed by **Fatemeh Sheida** 👩💻  
*Junior Front-End Developer*

## 🛠️ Tech Stack

### Core Frameworks
[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Material UI](https://img.shields.io/badge/Material_UI-6.4.4-007FFF?style=flat&logo=mui)](https://mui.com/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)

### State Management & Forms
[![Redux](https://img.shields.io/badge/Redux-5.0.1-764ABC?style=flat&logo=redux)](https://redux.js.org/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.54.2-EC5990?style=flat)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-3.24.1-1E90FF?style=flat)](https://zod.dev/)

### UI & Icons
[![Material Tailwind](https://img.shields.io/badge/Material_Tailwind-2.1.10-06B6D4?style=flat)](https://material-tailwind.com/)
[![Hero Icons](https://img.shields.io/badge/Hero_Icons-2.2.0-FF4081?style=flat)](https://heroicons.com/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-0.473.0-FF6F61?style=flat)](https://lucide.dev/)

### API & Data Fetching
[![Axios](https://img.shields.io/badge/Axios-1.7.9-5A29E4?style=flat)](https://axios-http.com/)
[![React Query](https://img.shields.io/badge/React_Query-5.64.2-FF4154?style=flat)](https://tanstack.com/query)

### Utilities
[![Lodash](https://img.shields.io/badge/Lodash-4.17.21-3492FF?style=flat)](https://lodash.com/)
[![Tailwind Merge](https://img.shields.io/badge/Tailwind_Merge-2.6.0-38B2AC?style=flat)](https://github.com/dcastil/tailwind-merge)
[![Tailwind Animate](https://img.shields.io/badge/Tailwind_Animate-1.0.7-38B2AC?style=flat)](https://github.com/jamiebuilds/tailwindcss-animate)

### Editor & Forms
[![CKEditor](https://img.shields.io/badge/CKEditor-44.2.0-0287D0?style=flat)](https://ckeditor.com/)
[![React Date Pickers](https://img.shields.io/badge/React_Date_Pickers-7.26.0-007FFF?style=flat)](https://mui.com/x/react-date-pickers/)



---

## 🚀 Features

### 👑 Admin Panel
- **CRUD Operations** for products, categories, brands, and users
- **Advanced Dashboard** with data visualization
- **Order Management** system
- **Role-Based Access Control**

### 🛍 Seller Portal
- Product inventory management
- Price & discount configuration
- Order fulfillment tracking
- Sales analytics

### 👤 Customer Experience
- Product browsing with advanced filters
- Shopping cart management
- Secure checkout process
- Order history tracking

---

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + Material UI
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form
- **API Client**: Axios + React Query
- **Validation**: Zod

### Backend
- Node.js (Provided by [Divar Backend](https://github.com/alikomijani/divar-backend-nodejs))

---

## 🏗️ Project Structure

```bash
src/
├── app/               # Next.js app router
    ├──(admin)/
        ├──auth/
            ├──login
            └──register
        ├──dashboard/
            ├──badges
            ├──brands
            ├──categories
            ├──cities
            ├──colors
            ├──orders
            ├──products
            ├──properties
            ├──sellers
            └──users
    ├──(user)/
        ├──aboutme
        ├──auth/
            ├──login
            └──register
        ├──checkout/
            └──payment
        ├──products/
            ├──[id]
            └──category/
              └──[slug]
        └──profile/
            └──order/
              └──[id]
    └──payment
├── components/        # Reusable components
    ├──Auth
    ├──cart
    ├──checkout
    ├──darkmode
    ├──dashboard-layout/
       └──components
    ├──fields
    ├──filter
    ├──forms
    ├──home
    ├──layout
    ├──order
    ├──payment
    ├──product
    ├──profile
    ├──svg
    ├──tables
    ├──Theme
    ├──ui
    └──upload
├── actions/             # Custom hooks
   └──auth
├── lib/               # Utility functions
├── API/               # API client and server functions
    ├──client-api
    └──server-api
├── types/             # TypeScript types
├── utils/             # Utility functions
├──validations         #validations functions
└── public/            # Static assets
    ├──best sellers
    ├──collections
    ├──fonts
        ├──woff
        └──woff2
    ├──Makeup
    ├──Multimedia collage
    ├──new & Restock
    ├──sheet-mask
      └──product
    └──Shop What's Popular Now
```

## ⚙️ Installation
### Clone repository

```
  git clone https://github.com/fatemehsheida/shopping.git
```
### Install dependencies

```
npm install
```
### Set up backend
```
git clone https://github.com/alikomijani/divar-backend-nodejs
cd divar-backend-nodejs
npm install
```
### Run development servers


```
# Frontend
npm run dev

# Backend (in separate terminal)
npm run dev
```


###### 💖 *Made with Love by Fatemeh Sheida 2025*


