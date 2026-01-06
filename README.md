# CAKE_STREET

# 🎂 Cake Street

## Overview
**Cake Street** is a professional, production-ready online cake ordering system designed for a single bakery.  
Customers can browse cakes, customize orders, and place orders online, while **payments are completed offline after a physical meeting** (at the bakery or on delivery).

The system is built using modern web technologies and follows industry best practices in security, scalability, and system design.

---

## Key Features

### Customer Features
- User registration and authentication
- Browse cakes by category
- View cake details (image, description, price)
- Customize cake orders (quantity, message on cake)
- Place orders online
- Track order status
- View order history

### Admin Features
- Secure admin dashboard
- Add, update, and remove cakes
- Manage customer orders
- Update order and payment status
- Monitor daily operations

---

## Payment Model
- **Offline payments only**
- Customers pay after a physical meeting
- Payment is confirmed manually by the admin
- Suitable for custom and high-value cake orders

---

## User Roles

### Customer
- Places cake orders
- Tracks order progress
- Views past orders

### Admin (Bakery Staff)
- Confirms and processes orders
- Manages cakes and availability
- Confirms offline payments
- Updates order status

---

## Technology Stack

### Backend
- Django
- Django REST Framework (DRF)
- JWT Authentication
- PostgreSQL (Production)

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

### Supporting Tools
- Pillow (image handling)
- CORS Headers

---

## System Architecture

React Frontend
|
| REST API (HTTPS)
|
Django Backend (DRF)
|
PostgreSQL Database
|
Media Storage (Images)



---

## Order Lifecycle

1. Pending Confirmation  
2. Confirmed  
3. Payment Pending (Offline)  
4. Paid  
5. In Preparation  
6. Ready  
7. Completed  

---

## Security Features
- JWT-based authentication
- Secure password hashing
- Role-based access control
- Admin-only payment confirmation
- Protected API endpoints

---

## Project Structure

cakestreet_backend/
├── accounts/
├── cakes/
├── orders/
├── cakestreet_backend/
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── manage.py
└── requirements.txt


---

## Installation (Development)

1. Clone the repository  
2. Create and activate a virtual environment  
3. Install dependencies  
4. Apply database migrations  
5. Create a superuser  
6. Run the development server  

---

## Deployment (Production)

- Backend hosted on Render / Railway / DigitalOcean
- Frontend hosted on Vercel
- PostgreSQL managed database
- Custom domain with SSL enabled

---

## Future Enhancements
- Delivery management module
- SMS and email notifications
- Mobile application
- Multi-bakery marketplace support

---

## License
This project is developed for real commercial use.  
Licensing terms can be defined according to business requirements.

---

## Author
**SHABANI HUSSEIN NDEKUPE AND VICTOR SOSTENESS MPAMBIJE**

---

*Cake Street – Your destination for perfect cakes.* 🎂
