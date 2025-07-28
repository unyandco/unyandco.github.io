/**
 * Google Apps Script for Contact Form Submissions
 * This script receives form data via POST request and saves it to Google Sheets
 */

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (make sure this script is bound to your sheet)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.subject || '',
      data.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error submitting form. Please try again.',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Optional: Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Contact form endpoint is working!',
      timestamp: new Date()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
