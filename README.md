# DigitalDreams API 🧑‍💻

## Description 📚
This API allows an app to collect and send data about the computer and its users to a server. The data can include information such as the operating system, hardware specs, usernames, names, emails.

## NPM Packages 📦
* **bcrypt**
* **cors**
* **dotenv**
* **express**
* **express-validator**
* **jwt**
* **mongoose**
* **morgan**

## How to start 📌
1. Clone this repository
```
git clone <repository>
```

2. Install all the packges with:

```javascript
    npm i
```

## Database connection 💾
I use MongoDB Atlas so you need to create **.env** in **/src** with your **MONGODB_URI** (this is the name that I use to name that variable).
### EXAMPLE OF MONGODB_URI:
```
mongodb+srv://<username>:<password>@cluster0.tjpcdqu.mongodb.net/<database>?retryWrites=true&w=majority
```
