const getLastIndex = function(sourceArray){
  return sourceArray.length - 1;
};


//filePath or description? bcz total is not a filePath
const justifyEachReport = function(values) {
  const lastIndex = getLastIndex(values);
  const filePath = values[lastIndex];
  const counts = values.slice(0, lastIndex);
  const onlyCounts = counts.map(count => "\t" + count).join("");
  const countsWithFilePath = onlyCounts + " " + filePath;
  return countsWithFilePath;
};


const generateTotalReport = function(reports) {
  let totalLineCount = 0;
  let totalCharCount = 0;
  let totalWordCount = 0;

  reports.map(function(eachReport) {
    const { lineCount, wordCount, charCount } = eachReport;
    totalLineCount += lineCount;
    totalWordCount += wordCount;
    totalCharCount += charCount;
  });
  
  const allInputs = [totalLineCount, totalWordCount, totalCharCount, "total"];
  const validateInputs = allInputs.filter(x => x);//filter undefined+0 = NaN
  const totalCountMessage = justifyEachReport(validateInputs);
  return totalCountMessage;
};


const formatOutput = function(reports) {
  let justifiedReports = reports.map(function(eachReport) {
    const allNames = Object.keys(eachReport);
    const allValues = allNames.map(name => eachReport[name]); 
    return justifyEachReport(allValues);
  });

  if (reports.length > 1) {
    justifiedReports.push(generateTotalReport(reports));
    return justifiedReports.join("\n");
  }
  return justifiedReports.join("");
};


module.exports = {
  formatOutput
};
