import { Component, computed, EventEmitter, Input, input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.module';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  // NEW SIGNAL APPROACH
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar() )

  // onSelectedUser() {
  // }


  // @Input() id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  // select = output<string>();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
