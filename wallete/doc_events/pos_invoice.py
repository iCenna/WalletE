from frappe import _, throw

from wallete.wallete.doctype.wallet.wallet import (
	get_customer_wallet_balance,
	get_wallet_amount_from_payments,
)


def override_on_submit(doc, method):
	wallet_amount = get_wallet_amount_from_payments(doc.payments)
	customer_wallet = get_customer_wallet_balance(doc.customer, doc.name)
	customer_wallet = abs(customer_wallet)
	if wallet_amount > customer_wallet:
		throw(_(f"Customer Wallet Balance Must grater than or equal paid from amount {wallet_amount} {customer_wallet}"))
