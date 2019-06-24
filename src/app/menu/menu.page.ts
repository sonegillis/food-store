import { Component, OnInit } from '@angular/core';
import { MenuDataService} from './menu-data.service';
import { Consumable } from './consumable.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menu: Consumable[];
  toDisplayMenu: Consumable[];
  constructor(private menuData: MenuDataService) { }

  ngOnInit() {
    this.menu = this.menuData.getMenu();
    this.filterMenu('food');
  }

  filterMenu(category: string){
    this.toDisplayMenu = this.menu.filter(element => {
      return element.category === category;
    });
  }

  changeCategory(category: string) {
    this.filterMenu(category);
  }
}
