import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MenuItem } from 'model/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // 只用於home中
  menu: MenuItem[] = [];

  // 首先第一執行部分
  // 把服務加入元件裡面
  // 取public表示是公開使用(所有檔案類型都可以使用)
  // 若使取為private就會只能在ts檔裡面使用
  // 取services的名字
  constructor(public ms: MenuService) {
    ms.add({title: '首頁', url: '#'});
   }
   // 第一種加的方式

  // 第二執行的部分
  ngOnInit(): void {
    // 用變數加入的方式
    const item = {title: '關於我們', url: 'http://about.me'};
    this.ms.add(item);
    this.menu = this.ms.getAll();
  }
  // 第二種加的方式 (要加this)

}
