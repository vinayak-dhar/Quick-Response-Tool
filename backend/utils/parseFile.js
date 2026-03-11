import fs from "fs";
import csv from "csv-parser";
import xlsx from "xlsx";

const parseFile = (path) => {

  if (path.endsWith(".csv")) {

    return new Promise((resolve) => {

      const results = [];

      fs.createReadStream(path)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => resolve(results));

    });

  } else {

    const workbook = xlsx.readFile(path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    return xlsx.utils.sheet_to_json(sheet);
  }

};

export default parseFile;