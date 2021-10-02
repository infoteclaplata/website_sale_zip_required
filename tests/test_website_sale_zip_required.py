from odoo.tests.common import HttpCase


class TestWebsiteSaleZipRequired(HttpCase):
    def test_website_sale_zip_required(self):
        self.env.user.partner_id.zip = False
        self.browser_js(
            url_path="/",
            code="odoo.__DEBUG__.services['web_tour.tour']" ".run('shop_buy_product')",
            ready="odoo.__DEBUG__.services['web_tour.tour']"
            ".tours.shop_buy_product.ready",
            login="admin",
        )
