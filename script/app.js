    
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let imgPath = `./image/${img}.png`;
        let customer = new Customer(imgPath, name, text);
      
        customers.push(customer);
      }

    createCustomer(0, 'Jessica', 'I had an amazing experience with this company. From start to finish, the service was impeccable. The product was of great quality and exceeded my expectations. I would definitely recommend this company to anyone.')
    createCustomer(1, 'Samanta', 'I am extremely satisfied with the product and service provided by this company. The product was of great quality and arrived promptly. The customer service team was also very responsive and helpful. I highly recommend this company to others.')
    createCustomer(2, 'Arnold', 'I had a great experience with this product. It was high-quality and exactly what I was looking for. The customer service was also excellent and very responsive. I would definitely recommend this product to others.')
    createCustomer(3, 'Lana', 'I was pleasantly surprised by the exceptional service provided by this company. The product was of great quality, and the customer support team was very helpful and responsive. I highly recommend this company to anyone looking for a reliable and trustworthy service.')
    createCustomer(4, 'Veronica', 'The cozy atmosphere and attentive service made for a delightful dining experience. While the menu offered a limited selection, the dishes were well-prepared and flavorful. I would recommend this restaurant for a nice night out.')
    createCustomer(0, 'Jessica', 'I had an amazing experience with this company. From start to finish, the service was impeccable. The product was of great quality and exceeded my expectations. I would definitely recommend this company to anyone.')

    btn.forEach(function(button) {
        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                if(index === customers.length){
                    index = 0
                }
                index++
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })