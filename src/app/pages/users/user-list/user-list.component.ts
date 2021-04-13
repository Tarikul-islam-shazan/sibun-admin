import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from '../../../@core/service/user.service';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  data: any;
  source: LocalDataSource;

  // text = ` hgfjhs shdkjfhsdk jkshfkjhsdkf jkshkjhfkhsdkfhsjks 
  // jkshkyuiywielorem jhgakj hjgjsa bvczxvc
  // hgsgjfb nmcmz jhdjh`;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: 'ID',
        type: 'number',
        hideSubHeader: true
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      }
    },
  };
  
  constructor(private service: UserService) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
   this.service.getUserData().subscribe(response => {
    this.data = response;
    this.source.load(this.data);
    // console.log(response);
    },err => {
      // console.log(err)
    });
  }

  deleteAuser(id) {
    this.service.deleteUser(id).subscribe(response => {
      // this.data = response;
      // this.source.load(this.data);
      // console.log(response);
        if(!response) window.confirm('User deleted');
      },err => {
        window.confirm('Error occured');
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event.data._id);
      const userId = event.data._id; 
      let userData = [...this.data];
      this.data = userData.filter( u => u._id !== event.data._id);
      this.deleteAuser(userId);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
