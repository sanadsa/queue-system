import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CustomersListComponent } from "./components/customers-list/customers-list.component";
import { CustomersQueueComponent } from "./components/customers-queue/customers-queue.component";
import { FinishedCustomersComponent } from "./components/finished-customers/finished-customers.component";
import { QueueLayoutComponent } from "./components/queue-layout/queue-layout.component";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersQueueComponent,
    FinishedCustomersComponent,
    QueueLayoutComponent,
  ],
  imports: [BrowserModule, MatListModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
