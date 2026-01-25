// Copyright (c) 2024, Hamza Abuabada and contributors
// For license information, please see license.txt

frappe.ui.form.on('Wallet', {
	setup: function(frm) {
		frm.set_query("account", ()=> {
			return {
				filters: [
					['account_type', '=', 'Receivable'],
					['is_group', '=', 0],
					['company', '=', frm.doc.company]
				]
			};
		});
	},
	
	refresh: function(frm) {
		if (frm.doc.customer) {
			frm.trigger('update_balance');
		}
	},
	
	customer: function(frm) {
		if (frm.doc.customer) {
			frm.trigger('update_balance');
		} else {
			frm.set_value('current_balance', 0);
		}
	},
	
	update_balance: function(frm) {
		if (frm.doc.customer) {
			frappe.call({
				method: 'wallete.wallete.doctype.wallet.wallet.get_customer_wallet_balance',
				args: {
					customer: frm.doc.customer
				},
				callback: function(r) {
					if (r.message !== undefined) {
						frm.set_value('current_balance', r.message);
					}
				}
			});
		}
	}
});
