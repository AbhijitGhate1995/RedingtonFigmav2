export const ProdShop={
    getProductsData(){
        return[
            {
                id: '1000',
                metrics : 'Gross Revenue (₹)',
                target : '₹ 100 Cr',
                achievement  :'₹ 90 Cr',
                targetvar : '10%',
                period : '₹ 100 Cr',
                var : '-11%'

            },
            {
                id: '1001',
                metrics : 'Gross Margin Rate(₹)',
                target : '₹ 100 Cr',
                achievement  :'₹ 90 Cr',
                targetvar : '10%',
                period : '₹ 100 Cr',
                var : '-11%'
            },
            {
                id: '1002',
                metrics : 'GM Without provision',
                target : '₹ 100 Cr',
                achievement  :'₹ 90 Cr',
                targetvar : '10%',
                period : '₹ 100 Cr',
                var : '-11%'
            },
            {
                id: '1003',
                metrics : 'GM after provision',
                target : '₹ 100 Cr',
                achievement  :'₹ 90 Cr',
                targetvar : '10%',
                period : '₹ 100 Cr',
                var : '-11%'
            },
            {
                id: '1004',
                metrics : 'Stock Provision',
                target : '₹ 100 Cr',
                achievement  :'₹ 90 Cr',
                targetvar : '10%',
                period : '₹ 100 Cr',
                var : '-11%'
            },
            {
                id: '1005',
                metrics : 'Transaction Margin',
                target : '₹ 100 Cr',
                achievement  :'₹ 90 Cr',
                targetvar : '10%',
                period : '₹ 100 Cr',
                var : '-11%'
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