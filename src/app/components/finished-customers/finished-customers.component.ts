import { Customer } from "./../../models/customer";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "finished-customers",
  templateUrl: "./finished-customers.component.html",
  styleUrls: ["./finished-customers.component.css"],
})
export class FinishedCustomersComponent implements OnInit {
  finishedCustomers: Customer[] = [];
  @Input() set finishedCustomer(value: Customer) {
    this.finishedCustomers.push(value);
  }

  get finishedCustomer(): Customer {
    return this.finishedCustomer;
  }

  constructor() {}

  ngOnInit() {}
}
