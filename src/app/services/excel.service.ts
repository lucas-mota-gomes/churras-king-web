import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

Injectable({ providedIn: "root" })
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public exportAsExcelFileMulti(json: any[], excelFileName: string): void {
    let workSheetArray: any[] = [];
    let obj: any = {};
    for (const item of json) {
      let collectionName = item.data[0].collectionName;
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(item.data);
      obj[collectionName] = worksheet;
      workSheetArray.push(obj);
    }
    const workbook: XLSX.WorkBook = { Sheets: { 'data': workSheetArray }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().toJSON().slice(0, 10).replace(/-/g, '-') + EXCEL_EXTENSION);
  }

}
