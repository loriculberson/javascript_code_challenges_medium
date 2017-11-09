const { cleanPhoneNumbers } = require('./cleanPhoneNumbers');

test('return array of phone numbers stripped of all non-numeric characters', () => {
    let numbers = [
      '123-456-7890',
      '(613) 555-0122',
      '613/245.9834',
      '303.598.1234',
      '720 634 1234',
      '7208091234'
    ];
    let finalCleanNumbers = cleanPhoneNumbers(numbers);
    let cleanNumbers = [
      1234567890,
      6135550122,
      6132459834,
      3035981234,
      7206341234,
      7208091234
    ];

    expect(finalCleanNumbers).toEqual(cleanNumbers);
  });
