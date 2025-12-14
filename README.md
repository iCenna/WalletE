# WalletE - Electronic Wallet System for ERPNext

<div align="center">
    <h2>Electronic Wallet for ERPNext</h2>
    <p>Transform your business with a powerful electronic wallet system integrated seamlessly with ERPNext</p>
</div>

## Overview

**WalletE** is a comprehensive electronic wallet solution integrated with ERPNext. At first glance, an electronic wallet appears to be just an alternative to traditional payment methods like cash and cards, but in reality, it's much more powerful—it's the beginning of a digital transformation for your business.

This Frappe application provides a complete wallet management system that enables businesses to offer electronic wallet services to their customers, creating new revenue streams, improving customer loyalty, and simplifying administrative processes.

## Why Electronic Wallet?

### 🎯 Powerful Marketing Tool

Electronic wallets create a strong competitive advantage by:

- **Building Customer Loyalty**: Create a high level of loyalty between you and your customers
- **Increasing Retention**: Enable you to increase customer retention rates
- **Larger Shopping Baskets**: Increase the average shopping basket size
- **Promotional Campaigns**: Enable powerful offers like cashback, discounts, or gifts
- **FOMO Creation**: With balance expiration dates, create a sense of urgency (Fear Of Missing Out)
- **Customer Relationship Insights**: Enable you to understand relationships between your customers

### 💳 Acts Like Credit Cards (But Better)

Since customers don't pay directly at the point of purchase, electronic wallets function like credit cards—but even stronger:

- **Reduced Spending Awareness**: Credit cards reduce the feeling of spending value, but wallets can completely eliminate this feeling since you've already paid upfront for what you're currently buying
- **Prepaid Advantage**: Customers have already committed funds, making purchases feel "free"

### 📋 Simplifies Administrative Procedures

Electronic wallets streamline various administrative processes:

- **Return Management**: Simplify return processes that often encounter problems:
  - Store cash shortages
  - Card refund commissions
  - Customer dissatisfaction issues when returning items
- **Automated Reconciliation**: Seamless integration with ERPNext accounting system

### 💰 Provides Interest-Free Liquidity for Companies

Some companies face liquidity problems and may be forced to borrow from banks. With electronic wallets, you can:

- **Utilize Prepaid Cash**: Benefit from cash in wallets as if it were an advance payment
- **No Interest Payments**: Access liquidity without paying any interest
- **Improved Cash Flow**: Better cash flow management

### 💵 New Revenue Stream

Electronic wallets create additional revenue opportunities:

- **Abandoned Wallets**: Similar to abandoned shopping carts, abandoned wallets often represent significant income for wallet-owning companies
- **Expiration Policies**: Link wallets to transaction expiration dates (e.g., 6 months or 1 year). If this period passes, the funds become company profit
- **Unused Balances**: Generate revenue from inactive or forgotten wallet balances

## Features

### Core Functionality

- **Wallet Management**: Create and manage customer wallets with active/inactive status
- **Wallet Entries**: Record wallet transactions including:
  - **Wallet Payment**: Top-up wallets from various payment methods
  - **Wallet Transfer**: Transfer funds between wallets
- **POS Integration**: Seamless integration with Point of Sale (POS) system
- **Sales Invoice Integration**: Use wallet balance for invoice payments
- **Real-time Balance Tracking**: Accurate wallet balance calculations
- **Multi-Company Support**: Support for multiple companies
- **GL Entry Integration**: Automatic General Ledger entries for all wallet transactions

### Technical Features

- **ERPNext Integration**: Deep integration with ERPNext accounting system
- **Account Mapping**: Link wallets to receivable accounts
- **Payment Method Support**: Integration with various payment modes
- **Balance Validation**: Real-time balance checks before transactions
- **Transaction History**: Complete audit trail of all wallet transactions
- **Custom POS Enhancements**: Enhanced POS interface for wallet payments

## Installation

### Prerequisites

- Frappe Framework installed
- ERPNext installed
- Payments app installed

### Installation Steps

1. **Get the app**:
   ```bash
   bench get-app wallete
   ```

2. **Install on your site**:
   ```bash
   bench --site [your-site-name] install-app wallete
   ```

3. **Run migrations**:
   ```bash
   bench --site [your-site-name] migrate
   ```

4. **Restart bench**:
   ```bash
   bench restart
   ```

## Usage

### Setting Up Wallets

1. **Create a Wallet Account**:
   - Go to Accounts → Chart of Accounts
   - Create a new Account with type "Receivable"
   - This account will hold wallet balances

2. **Create Customer Wallets**:
   - Navigate to WalletE → Wallet
   - Create a new Wallet for each customer
   - Link it to the customer and the wallet account
   - Set status to "Active"

3. **Configure Payment Methods**:
   - Go to Accounts → Mode of Payment
   - Enable "Is Wallet Payment" checkbox for wallet-enabled payment methods

### Wallet Operations

#### Wallet Payment (Top-up)
- Navigate to WalletE → Wallet Entry
- Select Transaction Type: "Wallet Payment"
- Choose the payment method (Source of Payment)
- Select the target wallet (To Wallet)
- Enter the amount and submit

#### Wallet Transfer
- Navigate to WalletE → Wallet Entry
- Select Transaction Type: "Wallet Transfer"
- Choose source wallet (Source of Payment)
- Select destination wallet (To Wallet)
- Enter the amount and submit

#### Using Wallet in POS
- When creating a POS Invoice, select "Wallet" as a payment method
- The system automatically deducts from customer's wallet balance
- Real-time balance validation ensures sufficient funds

#### Using Wallet in Sales Invoice
- Wallet balance can be used to pay Sales Invoices
- System automatically checks available balance
- Supports partial payments from wallet

## API Reference

### Get Customer Wallet Balance

```python
wallet_balance = frappe.call(
    "wallete.wallete.wallete.doctype.wallet.wallet.get_customer_wallet_balance",
    customer="CUST-00001",
    exclude_invoice=None
)
```

**Parameters:**
- `customer` (str): Customer name
- `exclude_invoice` (str, optional): POS Invoice name to exclude from balance calculation

**Returns:**
- `float`: Available wallet balance

## Requirements

- ERPNext
- Payments app
- Frappe Framework

## License

LGPL V.3

## Support

For support, feature requests, or bug reports, please contact:
- **Email**: alaa@rukn-software.com

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Related Projects

This application integrates with:
- [ERPNext](https://github.com/frappe/erpnext) - Open source ERP system
- [Payments](https://github.com/frappe/payments) - Payment gateway integration

## Roadmap

Future enhancements may include:
- Mobile wallet application
- Wallet expiration management
- Advanced analytics and reporting
- Cashback and reward programs
- Customer relationship insights
- Multi-currency wallet support

---

**WalletE** - Revolutionizing payment experiences, one wallet at a time.
