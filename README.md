# Stella Backend Setup

## Requirements
- Node.js 18 or newer  
- npm  
- Git  
- PM2 (installed automatically by the script)

## Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/Fadheal/stella-backend.git
   cd stella-backend
   ```

2. Make the deploy script executable  
   ```bash
   chmod +x deploy.sh
   ```

3. Run the deployment  
   ```bash
   ./deploy.sh
   ```

4. Optional: enable PM2 auto-start  
   When prompted:  
   ```bash
   Do you want to enable PM2 startup on reboot? (y/n):
   ```
   Type `y` to enable auto-start on boot.
   

## Useful Commands
Restart app  
```bash
pm2 restart express-backend
```

View logs  
```bash
pm2 logs express-backend
```

Stop app  
```bash
pm2 stop express-backend
```

List running apps  
```bash
pm2 list
```


## Environment Variables
Create a `.env` file in the project root:  
```bash
PORT=your_port
DB_HOST=your_database_host
DB_USER=your_databse_username
DB_PASS=your_database_password
DB_NAME=your_database_name

API_KEY=your_own_api_key
```
