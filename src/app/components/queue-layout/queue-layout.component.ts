import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/models/customer";

@Component({
  selector: "queue-layout",
  templateUrl: "./queue-layout.component.html",
  styleUrls: ["./queue-layout.component.css"],
})
export class QueueLayoutComponent implements OnInit {
  customersInQueue: Customer[] = [];
  customerToAdd: Customer;
  finishedCustomer: Customer;

  onCustomerToAdd(customer: Customer) {
    this.customerToAdd = customer;
  }

  onCustomerToFinish(customer: Customer) {
    this.finishedCustomer = customer;
  }

  constructor() {}

  ngOnInit() {}
}
