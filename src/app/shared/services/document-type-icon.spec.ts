import { DocumentTypeIcon } from './document-type-icon';

describe('DocumentTypeIcon', () => {
  let service: DocumentTypeIcon;

  beforeEach(() => {
    service = new DocumentTypeIcon();
  });

  it('should return txt icon', () => {
    expect(service.documentIcon('file.txt')).toBe('assets/icons/icons.svg#txt');
  });

  it('should return csv icon', () => {
    expect(service.documentIcon('data.csv')).toBe('assets/icons/icons.svg#csv');
  });

  it('should return pdf icon', () => {
    expect(service.documentIcon('document.pdf')).toBe('assets/icons/icons.svg#pdf');
  });

  it('should return docx icon', () => {
    expect(service.documentIcon('word.docx')).toBe('assets/icons/icons.svg#docx');
  });

  it('should return doc icon as docx', () => {
    expect(service.documentIcon('word.doc')).toBe('assets/icons/icons.svg#docx');
  });

  it('should return xlsx icon', () => {
    expect(service.documentIcon('sheet.xlsx')).toBe('assets/icons/icons.svg#xlsx');
  });

  it('should return xls icon as xlsx', () => {
    expect(service.documentIcon('sheet.xls')).toBe('assets/icons/icons.svg#xlsx');
  });

  it('should return zip icon', () => {
    expect(service.documentIcon('archive.zip')).toBe('assets/icons/icons.svg#zip');
  });

  it('should return default icon when extension is unknown', () => {
    expect(service.documentIcon('file.unknown')).toBe('assets/icons/icons.svg#document');
  });

  it('should return default icon when fileName is undefined', () => {
    expect(service.documentIcon(undefined)).toBe('assets/icons/icons.svg#document');
  });

  it('should return default icon when fileName is null', () => {
    expect(service.documentIcon(null)).toBe('assets/icons/icons.svg#document');
  });

  it('should handle filenames with multiple dots', () => {
    expect(service.documentIcon('report.final.v1.pdf')).toBe('assets/icons/icons.svg#pdf');
  });

  it('should return default icon when no extension exists', () => {
    expect(service.documentIcon('filename')).toBe('assets/icons/icons.svg#document');
  });
});
