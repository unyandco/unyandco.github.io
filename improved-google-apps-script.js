/**
 * Google Apps Script for Contact Form Submissions
 * This script receives form data via POST request and saves it to the bound Google Sheet
 */

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', JSON.stringify(e));
    
    // Parse the incoming data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
      console.log('Parsed data:', JSON.stringify(data));
    } else {
      throw new Error('No data received in request');
    }
    
    // Get the active spreadsheet (this script should be bound to your sheet)
    const sheet = SpreadsheetApp.getActiveSheet();
    console.log('Sheet name:', sheet.getName());
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message']
      ]);
      console.log('Headers added to sheet');
    }
    
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
    
    console.log('Row data to be added:', JSON.stringify(rowData));
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    console.log('Data successfully added to sheet');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully!',
        timestamp: timestamp.toISOString()
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

// Test function to verify the script works
function testSubmission() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    subject: 'Test Subject',
    message: 'This is a test message to verify the script works correctly.'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  console.log('Running test...');
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
  return result;
}

// Function to check if the sheet is properly set up
function checkSetup() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    console.log('Sheet name:', sheet.getName());
    console.log('Sheet ID:', sheet.getParent().getId());
    console.log('Last row:', sheet.getLastRow());
    
    if (sheet.getLastRow() > 0) {
      const headers = sheet.getRange(1, 1, 1, 6).getValues()[0];
      console.log('Headers:', headers);
    }
    
    return 'Setup check completed. Check logs for details.';
  } catch (error) {
    console.error('Setup check failed:', error);
    return 'Setup check failed: ' + error.toString();
  }
}
