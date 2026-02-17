# Event Management System

A full-stack frontend application for managing technical events. Built with plain HTML, CSS, and JavaScript — no frameworks, no dependencies.

## Project Structure

```
event-management/
├── index.html          # Main application (all 22 screens)
├── css/
│   └── style.css       # All styles
├── js/
│   └── app.js          # All logic and state
└── README.md
```

## How to Run

Just open `index.html` in any browser. No server required.

## Login Credentials

| Role   | Email / ID        | Password   |
|--------|-------------------|------------|
| Admin  | admin             | admin123   |
| Vendor | riya@test.com     | vendor123  |
| Vendor | sun@test.com      | vendor123  |
| Vendor | dream@test.com    | vendor123  |
| Vendor | star@test.com     | vendor123  |
| User   | user@test.com     | user123    |

## Pages / Screens

| Screen               | Description                                        |
|----------------------|----------------------------------------------------|
| Index                | Entry point — Admin / Vendor / User login buttons  |
| Admin Login          | Login for Admin (User Id + Password)               |
| Vendor Login         | Login for Vendor (User Id + Password)              |
| User Login           | Login for User (User Id + Password)                |
| User Sign Up         | New user registration                              |
| Vendor Sign Up       | New vendor registration with category dropdown     |
| Vendor Home          | Vendor main page — Your Item, Add Item, Transaction|
| Vendor Add Item      | Add/delete products with table view                |
| Vendor Items         | Grid view of vendor's products                     |
| Vendor Transactions  | Orders containing vendor's items                   |
| Vendor Request Items | Incoming item requests from users                  |
| Vendor Product Status| Orders with Update / Delete actions                |
| Update Order Status  | Radio buttons: Received / Ready for Shipping / Out for Delivery |
| User Portal          | Browse vendors by category with cart badge         |
| Vendor Page          | All vendors listed with Shop Item button           |
| Products             | Products from a selected vendor with Add to Cart   |
| Cart                 | Shopping cart with qty control, grand total        |
| Checkout             | Order form — Name, Number, Email, Address, Payment |
| Success / Popup      | Thank You confirmation with order details          |
| Request Item         | User requests an item from a vendor                |
| Order Status (User)  | User's order history with delivery status          |
| Guest List           | Add / remove event guests                          |
| Admin Home           | Admin menu — Maintain User, Vendor, Orders, etc.   |
| Maintain User        | Add / Update / Delete users                        |
| Maintain Vendor      | Add / Update / Delete vendors                      |
| All Orders           | All orders across all vendors with status update   |
| User Requests        | All item requests with status management           |
| All Products         | All products across all vendors                    |
| Membership           | Add / Update vendor memberships (6mo / 1yr / 2yr) |

## Instructions Followed (from Excel)

1. Chart shows overall flow and pages
2. Maintenance module is mandatory (Admin only)
3. Basic formatting on screen
4. Chart link on all pages
5. Radio buttons — only one can be selected
6. Passwords are hidden on login pages
7. Admin can access maintenance, reports and transactions
8. User can access reports and transactions (not maintenance)
9. Validations on all forms
10. Session works properly (logout clears session)
11. Flow matches the flow chart
12. Membership — Add (6 months default), Update by Membership Number

## Flow Chart Summary

```
INDEX → LOGIN → ADMIN / VENDOR / USER

VENDOR:
  Main Page → Your Item, Add New Item, Transaction
  Add Item → Insert, Delete, Product Status, Request Item, View Product

USER:
  Portal → Vendor → Products → Cart → Checkout → Success
  Portal → Cart → Request Item
  Portal → Guest List
  Portal → Order Status → Check Status

ADMIN:
  Maintenance Menu (Admin only):
    Add/Update Memberships
    Add/Update Users & Vendors
    Users Management
    Vendor Management
```
# Event-management-System
vent Management System is a frontend web app built using HTML, CSS, and Vanilla JavaScript. It simulates a technical event platform with Admin, Vendor, and User roles. Features include vendor browsing, cart, checkout, order tracking, product management, and membership control 
LIve Link -->  https://strong-alfajores-3e8e0e.netlify.app/
