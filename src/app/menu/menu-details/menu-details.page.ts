import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consumable } from '../consumable.model';
import { MenuDataService } from '../menu-data.service';
import { CartService } from '../../cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.page.html',
  styleUrls: ['./menu-details.page.scss'],
})
export class MenuDetailsPage implements OnInit {
  item: Consumable;
  total: number;
  quantity: number;
  foundInCart: boolean;
  alert;
  constructor(private route: ActivatedRoute,
              private menuData: MenuDataService,
              private alertCtrl: AlertController,
              private cartservice: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = this.menuData.getMenuItem(params.get('itemId'));
    });
    this.quantity = 1;
    this.total = +this.item.price;
    const cartList = this.cartservice.getCartList();
    console.log(cartList);
    const cartItem = cartList.find(element => {
      return element.id === this.item.id;
    });
    if (cartItem != null) {
      this.foundInCart = true;
    } else {
      this.foundInCart = false;
    }
    
  }

  getQuantity() {
    if (this.quantity == null) {
      this.total = +this.item.price;
      return;
    }
    this.total = +this.quantity * +this.item.price;
  }

  addToCart() {
    this.cartservice.addToCart(this.item);
    this.foundInCart = true;
    // async function presentAlert() {
    //   const alert = await this.alertCtrl.create({
    //     header: 'Alert',
    //     message: 'Item Added to Cart',
    //     buttons: ['Okay']
    //   });
    //   await alert.present();
    // }
    // presentAlert();
  }
}
