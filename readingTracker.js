// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Definition: Adds a new reading entry to the log
// Inputs: day of week, book title, and minutes read.
// Outputs: no output but it adds the new entry into the readingLog array built above 
function addReadBook(day, book, minutes) {
  /// creates an obj with newly provided data
  const newEntry = { day, book, minutes };
  /// adds new entry to the reading log
  readingLog.push(newEntry);
}

// Definition: Returns total minutes spent reading all week
// Inputs: reading log array
// Outputs: total minutes read
function totalReadingMinutes(log) {
  let total = 0;
  /// loops through the reading entries in the log
  for (let entry of log) {
    /// adds minutes from each entry to total
    total += entry.minutes;
  }
  /// outputs the total minutes read
  return total;
}

// Sumamry: Returns the book read most frequently
// Inputs: reading log array
// Outputs: title of most read book 
function mostReadBook(log) {
  /// tracks how many times a book was read
  const bookCounts = {}; 
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  /// loop to find out book with highest count
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Sumamry: Prints a summary of minutes read per day
// Inputs: reading log array
// Outputs: logs the output of day of week, minutes and book read to the console
function printDailySummary(log) {
  for (let entry of log) {
    /// prints formatted reading info from log
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

/// SUGGESTION: add in another function that calculates and prints out reading minutes per day for each book

// Example usage
addReadBook("Saturday", "Dune", 50);  // adds new entry to reading log
printDailySummary(readingLog); // shows full reading log 
console.log("Total minutes read:", totalReadingMinutes(readingLog)); // prints weekly toal 
console.log("Most read book:", mostReadBook(readingLog)); // shows most read book

addReadBook("Sunday", "Star Wars Episode IV", 25); // Test case: new reading entry
