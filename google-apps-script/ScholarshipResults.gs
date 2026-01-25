/**
 * Google Apps Script for Scholarship Result Lookup
 *
 * SETUP:
 * 1) Create a Google Sheet with headers (example):
 *    S.N | Registrationnumber | Name | Class | MobileNo | Father's Name | Date of Birth | Score | CopyLink | TotalMarks
 * 2) Paste this code in Apps Script and set SPREADSHEET_ID.
 * 3) Deploy as Web App (Execute as: Me, Who has access: Anyone).
 * 4) Use the Web App URL in ScholarshipResult.jsx.
 */

const SPREADSHEET_ID = '164b0M-nlLzR6CgFVJ-bTZT_qTX9QT__BX1V-kFStrr8';
const SHEET_NAME = 'Sheet1';

function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doGet() {
  return respond({
    success: true,
    message: 'Scholarship Results API is running. Use POST to fetch results.'
  });
}

function doPost(e) {
  try {
    const payload = parsePayload(e);

    const registrationNumber = normalize(payload.registrationNumber);
    const name = normalize(payload.name);
    const mobileNumber = normalize(payload.mobileNumber);
    const className = normalize(payload.className);
    const fatherName = normalize(payload.fatherName);
    const dateOfBirth = normalize(payload.dateOfBirth);

    // Only registration number and mobile number are required
    if (!registrationNumber || !mobileNumber) {
      return respond({
        success: false,
        message: 'Registration number and mobile number are required.'
      });
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return respond({ success: false, message: 'Sheet not found.' });
    }

    const range = sheet.getDataRange();
    const data = range.getValues();
    const richData = range.getRichTextValues();

    if (data.length < 2) {
      return respond({ success: false, message: 'No data found.' });
    }

    const headers = data[0].map((h) => normalizeHeader(h));
    const indexMap = mapHeaders(headers);
    
    // Debug: Log headers and indexMap to help identify issues
    // Uncomment the line below if you need to debug in Apps Script execution log
    // Logger.log('Headers: ' + JSON.stringify(headers));
    // Logger.log('TotalMarks index: ' + indexMap.totalMarks);

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const rowReg = normalize(getCell(row, indexMap.registration));
      const rowName = normalize(getCell(row, indexMap.name));
      const rowMobile = normalize(getCell(row, indexMap.mobile));

      // Match on registration number and mobile number (name is optional)
      if (rowReg === registrationNumber && rowMobile === mobileNumber) {
        // If name is provided, it must match (optional validation)
        if (name && rowName !== name) {
          continue;
        }
        // Optional field validations
        if (className && normalize(getCell(row, indexMap.className)) !== className) {
          continue;
        }
        if (fatherName && normalize(getCell(row, indexMap.fatherName)) !== fatherName) {
          continue;
        }
        if (dateOfBirth && normalize(getCell(row, indexMap.dateOfBirth)) !== dateOfBirth) {
          continue;
        }

        // Extract copyLink from hyperlink if available
        let copyLink = getCell(row, indexMap.copyLink);
        if (indexMap.copyLink !== -1 && richData[i] && richData[i][indexMap.copyLink]) {
          const richValue = richData[i][indexMap.copyLink];
          const linkUrl = richValue && richValue.getLinkUrl ? richValue.getLinkUrl() : '';
          if (linkUrl) {
            copyLink = linkUrl;
          }
        }

        // Get TotalMarks - handle both string and number values
        let totalMarks = '';
        if (indexMap.totalMarks !== -1 && indexMap.totalMarks !== undefined) {
          const rawValue = row[indexMap.totalMarks];
          // Handle number values (Google Sheets returns numbers as numbers)
          if (rawValue !== undefined && rawValue !== null && rawValue !== '') {
            totalMarks = rawValue.toString().trim();
          }
        }
        // Always include totalMarks in response, even if empty or not found
        // This ensures the field exists in the JSON response

        return respond({
          success: true,
          result: {
            registrationNumber: getCell(row, indexMap.registration),
            name: getCell(row, indexMap.name),
            mobileNumber: getCell(row, indexMap.mobile),
            className: getCell(row, indexMap.className),
            fatherName: getCell(row, indexMap.fatherName),
            dateOfBirth: getCell(row, indexMap.dateOfBirth),
            score: getCell(row, indexMap.score),
            copyLink: copyLink,
            totalMarks: totalMarks || ''
          }
        });
      }
    }

    return respond({ success: false, message: 'Result not found.' });
  } catch (error) {
    return respond({ success: false, message: 'Server error.', error: error.toString() });
  }
}

function normalize(value) {
  return (value || '').toString().trim().toLowerCase();
}

function normalizeHeader(value) {
  return (value || '').toString().trim().toLowerCase().replace(/\s+/g, '');
}

function getCell(row, index) {
  if (index === -1 || index === undefined) return '';
  const value = row[index];
  // Handle empty, null, undefined
  if (value === null || value === undefined || value === '') return '';
  // Convert to string for consistency
  return value.toString();
}

function mapHeaders(headers) {
  return {
    registration: findHeader(headers, ['registrationnumber', 'registrationno', 'registration']),
    name: findHeader(headers, ['name', 'studentname']),
    className: findHeader(headers, ['class', 'classname']),
    mobile: findHeader(headers, ['mobileno', 'mobile', 'phone', 'phonenumber']),
    fatherName: findHeader(headers, ['father', 'fathername', 'fathersname']),
    dateOfBirth: findHeader(headers, ['dateofbirth', 'dob', 'birth']),
    score: findHeader(headers, ['score', 'marks', 'result']),
    copyLink: findHeader(headers, ['copylink', 'link', 'pdflink', 'answerlink', 'answersheet']),
    totalMarks: findHeader(headers, ['totalmarks', 'totalmark', 'total', 'maxmarks', 'maximummarks', 'max'])
  };
}

function findHeader(headers, candidates) {
  // First, try exact matches (case-insensitive after normalization)
  for (let i = 0; i < headers.length; i++) {
    const normalizedHeader = headers[i];
    for (let j = 0; j < candidates.length; j++) {
      if (normalizedHeader === candidates[j]) {
        return i;
      }
    }
  }
  // Then try partial matches (contains) - check if header contains candidate
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    for (let j = 0; j < candidates.length; j++) {
      const candidate = candidates[j];
      // Check both directions: header contains candidate OR candidate contains header
      if (header.includes(candidate) || candidate.includes(header)) {
        return i;
      }
    }
  }
  return -1;
}

function respond(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function parsePayload(e) {
  if (!e) return {};
  const contentType = (e.postData && e.postData.type) || '';
  if (contentType.indexOf('application/json') !== -1) {
    try {
      return JSON.parse(e.postData.contents || '{}');
    } catch (error) {
      return {};
    }
  }
  // Fallback for form-encoded or query parameters
  return e.parameter || {};
}
