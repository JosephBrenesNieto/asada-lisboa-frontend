import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeIcon {
  // Methods
  public documentIcon(fileName: string | undefined | null): string {
    let extension = '';

    if(fileName) {
      const pathSplit: string[] = fileName.split('.');
      extension = pathSplit.reverse()[0];
    }

    const iconsBase = 'assets/icons/icons.svg';
    switch(extension) {
      case 'txt':
        return `${iconsBase}#txt`;
      case 'csv':
        return `${iconsBase}#csv`;
      case 'pdf':
        return `${iconsBase}#pdf`;
      case 'docx':
        return `${iconsBase}#docx`;
      case 'doc':
        return `${iconsBase}#docx`;
      case 'xlsx':
        return `${iconsBase}#xlsx`;
      case 'xls':
        return `${iconsBase}#xlsx`;
      case 'zip':
        return `${iconsBase}#zip`;
      default:
        return `${iconsBase}#document`;
    }
  }
}
