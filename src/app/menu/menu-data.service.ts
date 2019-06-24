import { Injectable } from '@angular/core';
import { Consumable } from './consumable.model';
@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  private menu: Consumable[];
  constructor() {
    this.menu = [
      {
        id: 'm1',
        price: '800',
        name: 'Fufu & Eru',
        imageUrl: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_960/https://www.auletch.com/wp-content/uploads/2019/05/eru9.jpg',
        ingredients: ['maggi', 'pepper', 'tomatoe'],
        category: 'food'
      },
      {
        id: 'm2',
        price: '500',
        name: 'Rice & Beans',
        imageUrl: 'data:image/jpeg;base64,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',
        ingredients: ['rice', 'beans', 'onion'],
        category: 'food'
      },
      {
        id: 'm3',
        price: '2800',
        name: 'Tanchot Soup',
        imageUrl: 'https://www.preciouscore.com/wp-content/uploads/2016/01/plate2Bof2BOgbono2BSoup.jpg',
        ingredients: ['maggi', 'pepper', 'tomatoe'],
        category: 'food'
      },
      {
        id: 'm4',
        price: '750',
        name: 'Koki Beans',
        imageUrl: 'https://i1.wp.com/www.kewanblogs.com/wp-content/uploads/2017/01/Koki-beans6-e1501775450945.jpg?fit=700%2C436&ssl=1',
        ingredients: ['Red oil', 'vegetable', 'tomatoe'],
        category: 'food'
      },
      {
        id: 'm5',
        price: '1800',
        name: 'Okro Soup',
        imageUrl: 'https://wazobiaafricankitchen.com/wp-content/uploads/IMG_6203-1.jpg',
        ingredients: ['maggi', 'pepper', 'tomatoe'],
        category: 'food'
      },
      {
        id: 'm6',
        price: '1200',
        name: 'Tequilla sunrise',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shutterstock-626261780mod-1515166546.jpg',
        ingredients: ['apple', 'mango', 'guava'],
        category: 'drink'
      },
      {
        id: 'm7',
        price: '1000',
        name: 'Festive lemon',
        imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/classic_snowball.jpg',
        ingredients: ['paw-paw', 'pineaple', 'lemon'],
        category: 'drink'
      },
      {
        id: 'm8',
        price: '950',
        name: 'Sugary Vita',
        imageUrl: 'https://cdn1.medicalnewstoday.com/content/images/articles/324/324774/2-soft-drinks-on-a-table-in-a-restaurant.jpg',
        ingredients: ['pineaple', 'mango', 'sour soft'],
        category: 'drink'
      },
      {
        id: 'm9',
        price: '1900',
        name: 'Bandung',
        imageUrl: 'https://cdn1.medicalnewstoday.com/content/images/articles/324/324774/2-soft-drinks-on-a-table-in-a-restaurant.jpg',
        ingredients: ['apple', 'mango', 'guava'],
        category: 'drink'
      },
      {
        id: 'm10',
        price: '2300',
        name: 'Pina Colada',
        imageUrl: 'https://www.maliburumdrinks.com/contentassets/aa7cef789953423fa6e4280d17c2c50c/malibupineapplepinacoladargb.png/CocktailHero',
        ingredients: ['apple', 'mango', 'guava'],
        category: 'drink'
      }
    ];
  }

  getMenu(){
    return [...this.menu];
  }

  getMenuItem(itemId){
    return this.menu.find(element => {
      return element.id === itemId;
    });
  }
}