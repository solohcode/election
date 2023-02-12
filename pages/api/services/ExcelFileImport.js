const excelToJson = require("convert-excel-to-json");
const fs = require('fs')

export default async function importExcelData2MongoDB(filePath){
    // -> Read Excel File to Json Data
    const excelData = excelToJson({
        sourceFile: filePath,
        sheets: [{
            // Excel Sheet Name
            name: 'agent',
            // Header Row -> be skipped and will not be present at our result object.
            header:{
                rows: 1
            },
            // Mapping columns to keys
            columnToKey: {
                A: 'email',
                B: 'fullname',
                C: 'user_type',
                D: 'phone',
                E: 'gender',
                F: 'ward',
                G: 'memberId',
                H: 'pvc',
                I: 'dob',
                J: 'password'
            }
        }]
    });
    // -> Log Excel Data to Console
    // console.log(excelData);
    /**
    { 
    Customers:
    [ 
    { _id: 1, name: 'Jack Smith', address: 'Massachusetts', age: 23 },
    { _id: 2, name: 'Adam Johnson', address: 'New York', age: 27 },
    { _id: 3, name: 'Katherin Carter', address: 'Washington DC', age: 26 },
    { _id: 4, name: 'Jack London', address: 'Nevada', age: 33 },
    { _id: 5, name: 'Jason Bourne', address: 'California', age: 36 } 
    ] 
    }
    */  

    fs.unlinkSync(filePath);
    return excelData;
}