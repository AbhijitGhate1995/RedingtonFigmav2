export const ProductDimension={
    getProductsData(){
        return[
            {
                SBU :'+ Cloud',
                south : '₹ 50 Cr',
                north : '₹ 50 Cr',
                east : '₹ 50 Cr',
                west : '₹ 50 Cr',
                central : '₹ 50 Cr',
            },
            {
                SBU :'+ L&S',
                south : '₹ 50 Cr',
                north : '₹ 50 Cr',
                east : '₹ 50 Cr',
                west : '₹ 50 Cr',
                central : '₹ 50 Cr',
            },
            {
                SBU :'Software',
                south : '₹ 50 Cr',
                north : '₹ 50 Cr',
                east : '₹ 50 Cr',
                west : '₹ 50 Cr',
                central : '₹ 50 Cr',
            },
            {
                SBU :'Security',
                south : '₹ 50 Cr',
                north : '₹ 50 Cr',
                east : '₹ 50 Cr',
                west : '₹ 50 Cr',
                central : '₹ 50 Cr',
            },
            {
                SBU :'+ ESS',
                south : '₹ 50 Cr',
                north : '₹ 50 Cr',
                east : '₹ 50 Cr',
                west : '₹ 50 Cr',
                central : '₹ 50 Cr',
            },
            {
                SBU :'+ Networking',
                south : '₹ 50 Cr',
                north : '₹ 50 Cr',
                east : '₹ 50 Cr',
                west : '₹ 50 Cr',
                central : '₹ 50 Cr',
            }

        ];
    },
    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
}
}