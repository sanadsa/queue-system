import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Customer } from "src/app/models/customer";

@Component({
  selector: "customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"],
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [
    { ID: "123", FirstName: "jason", LastName: "statham" },
    { ID: "143", FirstName: "jason2", LastName: "statham2" },
    { ID: "1233", FirstName: "jason3", LastName: "statham3" },
    { ID: "1235", FirstName: "jason4", LastName: "statham4" },
  ];

  @Output() customerToQueue = new EventEmitter<Customer>();

  public addCustomer(customer: Customer): void {
    this.customerToQueue.emit(customer);
    const index = this.customers.indexOf(customer, 0);
    if (index > -1) {
      this.customers.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}
}
