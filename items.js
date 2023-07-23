export const COLORS = {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#B3B4B6',
    accent: '#FFC231',
    accentRed: '#FB5D2E',
    accentPink: '#F96165'
}

export const Categories = [
    {
        name: 'Burger',
        image: require('../database/images/image/burger'),
        items: [
            {
                name: 'Aloo Tikki Burger',
                weight: 150,
                rating: '4.5',
                price: '99',
                isTopOfTheWeek: false,
                image: require('../database/images/burger/alootikkiburger.png'),
                size: 'Large 12"',
                crust: 'Thick Crust',
                delivery: 20,
                ingredient: [
                    require('../database/images/image/Sliced-Onion.png'),
                    require('../database/images/image/Tomato.png'),
                    require('../database/images/image/cheese.png'),
                    require('../database/images/image/flour.png'),
                ]
            },
            {
                name: 'Classic Burger',
                weight: 120,
                rating: '5.0',
                price: '199',
                isTopOfTheWeek: true,
                image: require('../database/images/image/burger/classicburger.png'),
                size: 'Large 8"',
                crust: 'Thick Crust',
                delivery: 25,
                ingredient: [
                    require('../database/images/image/flour.png'),
                    require('../database/images/image/cheese.png'),
                    require('../database/images/image/Sliced-Onion.png'),
                    require('../database/images/image/Tomato.png'),
                ]
            },
            {
                name: 'Biggie Burger',
                weight: 250,
                rating: '4.2',
                price: '299',
                isTopOfTheWeek: false,
                image: require('../database/images/image/burger/biggieburger.png'),
                size: 'Large 10"',
                crust: 'Thick Crust',
                delivery: 35,
                ingredient: [
                    require('../database/images/image/Tomato.png'),
                    require('../database/images/image/cheese.png'),
                    require('../database/images/image/Sliced-Onion.png'),
                    require('../database/images/image/flour.png'),
                ]
            },
        ]
    },
    {
        name: 'Pizza',
        image: require('../database/images/image/pizza.png'),
        items: [
            {
                name: 'Plain Cheese Pizza',
                weight: 300,
                rating: '4.5',
                price: '299',
                isTopOfTheWeek: tfalse,
                image: require('../database/images/image/burger/plaincheesepizza.png'),
                size: 'Large 16"',
                crust: 'Thin Cheese',
                delivery: 25,
                ingredient: [
                    require('../database/images/image/Sliced-Onion.png'),
                    require('../database/images/image/flour.png'),
                    require('../database/images/image/cheese.png'),
                    require('../database/images/image/Tomato.png'),
                ]
            },
            {
                name: 'Pepperoni Pizza',
                weight: 250,
                rating: '5.0',
                price: '199',
                isTopOfTheWeek: true,
                image: require('../database/images/image/burger/pepperonipizza.png'),
                size: 'Large 14"',
                crust: 'Thin Crust',
                delivery: 30,
                ingredient: [
                    require('../database/images/image/Tomato.png'),
                    require('../database/images/image/cheese.png'),
                    require('../database/images/image/Sliced-Onion.png'),
                    require('../database/images/image/flour.png'),
                ]
            },
            {
                name: 'Mexican Green Wave',
                weight: 350,
                rating: '4.2',
                price: '499',
                isTopOfTheWeek: false,
                image: require('../database/images/image/burger/mexicangreenwave.png'),
                size: 'Large 15"',
                crust: 'Thin Crust',
                delivery: 45,
                ingredient: [
                    require('../database/images/image/flour.png'),
                    require('../database/images/image/cheese.png'),
                    require('../database/images/image/Tomato.png'),
                    require('../database/images/image/Sliced-Onion.png'),
                ]
            },
        ]
    },
    {
        name: 'soft Drinks',
        image: require('../database/images/image/softdrinks.png'),
        items: [
            {
                name: 'Coca Cola',
                weight: 200,
                rating: '5.0',
                price: '299',
                isTopOfTheWeek: true,
                image: require('../database/images/image/softdrinks/cocacola.png'),
                size: 'Medium Glass',
                crust: 'Small ice',
                delivery: 10,
                ingredient: [
                    require('../database/images/image/softdrinks/cocacola.png')
                ]
            },
            {
                name: 'Orange Juice',
                weight: 500,
                rating: '4.5',
                price: '199',
                isTopOfTheWeek: false,
                image: require('../database/images/image/softdrinks/orange.png'),
                size: 'LArge Glass',
                crust: 'Large ice',
                delivery: 8,
                ingredient: [
                    require('../database/images/image/softdrinks/orange.png')
                ]
            },
            {
                name: 'Mango Juice',
                weight: 150,
                rating: '4.2',
                price: '99',
                isTopOfTheWeek: false,
                image: require('../database/images/image/softdrinks/mango.png'),
                size: 'Large Glass',
                crust: 'Small ice',
                delivery: 5,
                ingredient: [
                    require('../database/images/image/softdrinks/mango.png')
                ]
            },
        ]
    }
]