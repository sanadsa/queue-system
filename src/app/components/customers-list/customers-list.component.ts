import { CustomerService } from "./../../services/customer-service.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Customer } from "src/app/models/customer";

@Component({
  selector: "customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"],
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [];

  @Output() customerToQueue = new EventEmitter<Customer>();

  public addCustomer(customer: Customer): void {
    this.customerToQueue.emit(customer);
    const index = this.customers.indexOf(customer, 0);
    if (index > -1) {
      this.customers.splice(index, 1);
    }
  }

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.service.getCustomers().subscribe((res) => {
      this.customers = res;
    });
  }
}
