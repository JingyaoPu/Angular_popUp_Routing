import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { WelcomeComponent } from './Welcome/welcome.component';


@Injectable({
  providedIn: 'root'
})
export class PopupService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  /*
  showAsComponent(message: string) {
    // Create element
    const popup = document.createElement('popup-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(WelcomeComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }
  */

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement() {
    // Create element
    const popupEl: NgElement & WithProperties<WelcomeComponent> = document.createElement('welcome-element') as any;

    // Listen to the close event
    popupEl.addEventListener('closed', () => {
      console.log("close")
      document.body.removeChild(popupEl)
    });

    // Set the message
    
    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}
