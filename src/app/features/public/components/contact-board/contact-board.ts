import { AfterViewInit, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormUtils } from '@shared/utils/form-utils';
import { ContactApi } from '@core/services/contact-api';
import { ContactResponse } from '@public/interfaces/contact-response.interface';

@Component({
  selector: 'contact-board',
  imports: [],
  templateUrl: './contact-board.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full flex justify-center items-center md:w-1/2'
  }
})
export class ContactBoard implements AfterViewInit {
  // Init
  protected isLoading = signal<boolean>(false);
  protected contactData = signal<ContactResponse[] | null>(null);

  // Inject
  protected contactService = inject(ContactApi);

  // AfterViewInit
  ngAfterViewInit(): void {
    this.principalApiService();
  }

  // Calling principal API
  public principalApiService(): void {
      if(this.isLoading())
        return;

      this.isLoading.set(true);

      this.contactService.getContactInformation()
        .subscribe({
          next: (contactResponse: ContactResponse[]) => {
            this.contactData.set(contactResponse);
            this.isLoading.set(false);
          }
        });
  }

  // Data type
  public contactLink(contactValue: string): string | null {
    if(contactValue.startsWith('+506') || contactValue.match(FormUtils.phonePattern))
      return `tel:${contactValue}`;

    if(contactValue.match(FormUtils.emailPattern))
      return `mailto:${contactValue}`;

    if(contactValue.startsWith('http://') || contactValue.startsWith('https://'))
      return contactValue;

    return null;
  }

  public contactIcon(contactValue: string): string {
    const path = 'assets/icons/icons.svg';

    if(contactValue.startsWith('+506') || contactValue.match(FormUtils.phonePattern))
      return `${path}#phone`;

    if(contactValue.match(FormUtils.emailPattern))
      return `${path}#mail`;

    if(contactValue.startsWith('http://') || contactValue.startsWith('https://'))
      return `${path}#web`;

    if(contactValue.match('[AP]M|[ap].m.|[AP].M.|[ap]m'))
      return `${path}#clock`;

    return `${path}#user`;
  }

  public contactTextMessage(contactValue: string, contactName: string) {
    if(contactValue.startsWith('http://') || contactValue.startsWith('https://'))
      return `Link para ${contactName}`;

    return contactValue;
  }
}
