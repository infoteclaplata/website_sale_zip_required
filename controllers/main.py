from odoo.addons.website_sale.controllers.main import WebsiteSale


class WebsiteSale(WebsiteSale):
    def _get_mandatory_billing_fields(self):
        result = super()._get_mandatory_billing_fields()
        result.append("zip")
        return result
