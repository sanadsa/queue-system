import { Customer } from "./../../models/customer";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "customers-queue",
  templateUrl: "./customers-queue.component.html",
  styleUrls: ["./customers-queue.component.css"],
})
export class CustomersQueueComponent implements OnInit {
  @Input() customersInQueue: Customer[];
  customer: Customer;
  @Output() customerToFinish = new EventEmitter<Customer>();
  @Input() set customerToAdd(value: Customer) {
    this.customer = value;
    this.customersInQueue.push(value);
  }
  get customerToAdd(): Customer {
    return this.customer;
  }

  finishCustomer() {
    this.customerToFinish.emit(this.customersInQueue.pop());
  }

  constructor() {}

  ngOnInit() {}
}
