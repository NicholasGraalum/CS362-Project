# SETUP and Installation

## Version: v1.0.0  

## 1. System Requirements  
Ensure the following dependencies are installed before proceeding:  

- **Operating System:** Windows/Linux
- **Software Requirements:**  
  - Node.js v20.x +  

---

## 2. Installation Instructions  

### **Step 1: Download and Extract the Package**  
1. Download the **ZIP file** from [GitHub v1.0 Release](https://github.com/NicholasGraalum/CS362-Project/releases/tag/v1.0.0).  
2. Extract the contents and enter the internal project dir
   ```sh 
   cd /project
   ```

### **Step 2: Install Dependencies**  
Run the following command to install all required dependencies:  
```sh
npm install
```

### **Step 3: Configure the Environment** 
Port will default to 3000.
For a custom port, set port number in /.env
```
PORT=[some int 1024-49151]
```

### **Step 4: Start the Server**  
Start the application using:  
```sh
npm start
```

### **Step 5: Verify the Installation**  
1. Open a web browser and go to `http://localhost:PORT` (replace PORT with your port).  
2. You should see the application running.  

---
