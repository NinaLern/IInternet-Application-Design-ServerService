import { Injectable } from '@angular/core';
import { MenuItem } from 'model/menu';

// Injectable 表示為服務架構，專門提供服務的地方。
@Injectable({
  providedIn: 'root'
})

export class MenuService {

  // 會一直存在(類似資料庫的東西)
  menu: MenuItem[] = [];  // 暫存選單項目的陣列

  constructor() { }

  // 功能1: 新增一個選單項目
  // void 表示不回傳
  add(m: MenuItem): void {
    // this 用來指那個的屬性名稱 (.屬性名稱)
    this.menu.push(m);
  }

  // 功能2: 取得所有選單
  getAll(): MenuItem[] {
    return this.menu;
  }

}
