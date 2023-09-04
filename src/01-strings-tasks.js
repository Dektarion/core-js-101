/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return `${value1}${value2}`;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.replace('<', '').replace('>', '');
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const startLine = `┌${'─'.repeat(width - 2)}┐\n`;
  const endLine = `└${'─'.repeat(width - 2)}┘\n`;
  const middle = `│${' '.repeat(width - 2)}│\n`;

  return `${startLine}${middle.repeat(height - 2)}${endLine}`;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const dictionary = {
    // eslint-disable-next-line quote-props
    'A': 'N',
    // eslint-disable-next-line quote-props
    'B': 'O',
    // eslint-disable-next-line quote-props
    'C': 'P',
    // eslint-disable-next-line quote-props
    'D': 'Q',
    // eslint-disable-next-line quote-props
    'E': 'R',
    // eslint-disable-next-line quote-props
    'F': 'S',
    // eslint-disable-next-line quote-props
    'G': 'T',
    // eslint-disable-next-line quote-props
    'H': 'U',
    // eslint-disable-next-line quote-props
    'I': 'V',
    // eslint-disable-next-line quote-props
    'J': 'W',
    // eslint-disable-next-line quote-props
    'K': 'X',
    // eslint-disable-next-line quote-props
    'L': 'Y',
    // eslint-disable-next-line quote-props
    'M': 'Z',
    // eslint-disable-next-line quote-props
    'N': 'A',
    // eslint-disable-next-line quote-props
    'O': 'B',
    // eslint-disable-next-line quote-props
    'P': 'C',
    // eslint-disable-next-line quote-props
    'Q': 'D',
    // eslint-disable-next-line quote-props
    'R': 'E',
    // eslint-disable-next-line quote-props
    'S': 'F',
    // eslint-disable-next-line quote-props
    'T': 'G',
    // eslint-disable-next-line quote-props
    'U': 'H',
    // eslint-disable-next-line quote-props
    'V': 'I',
    // eslint-disable-next-line quote-props
    'W': 'J',
    // eslint-disable-next-line quote-props
    'X': 'K',
    // eslint-disable-next-line quote-props
    'Y': 'L',
    // eslint-disable-next-line quote-props
    'Z': 'M',
    // eslint-disable-next-line quote-props
    'a': 'n',
    // eslint-disable-next-line quote-props
    'b': 'o',
    // eslint-disable-next-line quote-props
    'c': 'p',
    // eslint-disable-next-line quote-props
    'd': 'q',
    // eslint-disable-next-line quote-props
    'e': 'r',
    // eslint-disable-next-line quote-props
    'f': 's',
    // eslint-disable-next-line quote-props
    'g': 't',
    // eslint-disable-next-line quote-props
    'h': 'u',
    // eslint-disable-next-line quote-props
    'i': 'v',
    // eslint-disable-next-line quote-props
    'j': 'w',
    // eslint-disable-next-line quote-props
    'k': 'x',
    // eslint-disable-next-line quote-props
    'l': 'y',
    // eslint-disable-next-line quote-props
    'm': 'z',
    // eslint-disable-next-line quote-props
    'n': 'a',
    // eslint-disable-next-line quote-props
    'o': 'b',
    // eslint-disable-next-line quote-props
    'p': 'c',
    // eslint-disable-next-line quote-props
    'q': 'd',
    // eslint-disable-next-line quote-props
    'r': 'e',
    // eslint-disable-next-line quote-props
    's': 'f',
    // eslint-disable-next-line quote-props
    't': 'g',
    // eslint-disable-next-line quote-props
    'u': 'h',
    // eslint-disable-next-line quote-props
    'v': 'i',
    // eslint-disable-next-line quote-props
    'w': 'j',
    // eslint-disable-next-line quote-props
    'x': 'k',
    // eslint-disable-next-line quote-props
    'y': 'l',
    // eslint-disable-next-line quote-props
    'z': 'm',
    ' ': ' ',
    '!': '!',
    '?': '?',
  };

  let result = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const value of str) {
    result = `${result}${dictionary[value]}`;
  }

  return result;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString() => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (value instanceof String) {
    return true;
  }
  return typeof value === 'string';
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(/* value */) {
  throw new Error('Not implemented');
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
