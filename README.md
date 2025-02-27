# Object Management App

## Overview

Object Management App is a user-friendly interface for managing different types of objects such as "Desks", "Computers", "Keyboards", "Servers", and "Humans". The application allows users to efficiently create, edit, delete, and establish relationships between these objects while maintaining data persistence using WebStorage, (session storage).

## Live Demo

🔗 [Object Management App](https://object-management-app.surge.sh/)

## Features

- 🔍 **Search Objects**: Quick search with autocomplete functionality by name or description.
- ➕ **Create Objects**: Add new objects with a name, description, and type.
- ✏️ **Edit Objects**: Modify existing objects, with changes persisting in WebStorage.
- 🗑️ **Delete Objects**: Remove objects, with automatic updates to the list.
- 💾 **Data Persistence**: All data is stored in the browser’s cache using WebStorage.

## Tech Stack

- **Frontend**: React, TypeScript, HTML, CSS, SASS
- **State Management**: React Context API
- **Storage**: WebStorage (Session Storage)
- **Deployment**: Surge.sh

## Why Surge.sh?

Surge.sh was selected for deployment due to its: ✅ Simplicity and ease of use ✅ Quick setup for static sites ✅ Free hosting for basic use ✅ Direct integration with build processes

## Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/YOUR_USERNAME/object-management-app.git
cd object-management-app
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Run the application locally

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4️⃣ Build for production

```sh
npm run build
```

### 5️⃣ Deploy to Surge.sh

```sh
cd build
surge
```

Follow the prompts to complete the deployment.

## Folder Structure

```
object-management-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── List.tsx
│   │   ├── Form.tsx
│   ├── context/
│   │   ├── Context.tsx
│   ├── styles/
│   │   ├── searchBar.css
│   │   ├── list.css
│   │   ├── form.css
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
├── public/
├── package.json
├── README.md
```

## Contributing

Feel free to fork the repository and open pull requests to contribute improvements! 🚀

## License

MIT License © [Federico Lacabaratz Duret](https://github.com/FedeLacabaratz)

