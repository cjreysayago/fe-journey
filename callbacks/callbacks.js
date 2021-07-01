// Simple callback example
const client = {
    __execute(method, endpoint) {
        return {
            code: 200,
        }
    },
    request(method, endpoint, success, error) {
        const response = this.__execute(method, endpoint);
        if (response.code === 200) {
            return success(response);
        }

        return error('Whoops!');
    }
};
const orderService = {
    // Fetch all orders
    all() {
        client.request("GET", "/orders", function (orders) {
            console.log("Orders response", orders);
        }, function(message) {
            console.log(message);
        });
    },
    invoices() {
        // Callback hell example
        client.request("GET", "/customers", function (customers) {
            // const customers = customers; // Let's suppose it's an array of customers [{id: 1, name: "Carlos"}]
            customers = [{id: 1, name: "Carlos"}, {id: 2, name: "Jhon"}];
            const customersIds = customers.map(customer => customer.id);
            client.request("GET", `/invoices?clientIds=${customersIds}`, function(invoices) {
                // Another call
                    //Another call
            }, function(message) {
                console.log(message);
            })                
        }, function (message) {
            console.log(message)
        })
    }
} 

orderService.all();
orderService.invoices();

