odoo.define("website_sale_zip_required.tour", function(require) {
    "use strict";

    require("website_sale.tour");
    var tour = require("web_tour.tour");
    var steps = tour.tours.shop_buy_product.steps;

    steps.splice(
        _.findIndex(steps, {content: "go to checkout"}) + 1,
        0,
        {
            content: "Next",
            trigger: ".btn-primary :contains('Next')",
        },
        {
            content: "Set ZIP CODE",
            trigger: "div.o_has_error label[for='zip']",
            extra_trigger: "div.o_has_error label[for='zip']",
            run: function() {
                $('div.o_has_error input[name="zip"]').val("US0123");
                if ($("#div_phone").hasClass("o_has_error")) {
                    $("#div_phone input").val("11111111");
                }
                $('div.o_has_error input[name="accepted_legal_terms"]').prop(
                    "checked",
                    true
                );
            },
        },
        {
            content: "Next",
            trigger: ".btn-primary :contains('Next')",
        },
        {
            content: "Confirm",
            trigger: ".btn-primary :contains('Confirm')",
        }
    );
});
