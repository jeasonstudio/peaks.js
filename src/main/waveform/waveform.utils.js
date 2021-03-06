/**
 * @file
 *
 * Some general utility functions.
 *
 * @module peaks/waveform/waveform.utils
 */
define(function() {
  'use strict';

  function zeroPad(number) {
    return number < 10 ? '0' + number : number;
  }

  return {

    /**
     * Returns a formatted time string.
     *
     * @param {int}     time            Time in seconds to be formatted
     * @param {Boolean} dropHundredths  Don't display hundredths of a second if true
     * @returns {String}
     */

    formatTime: function(time, dropHundredths) {
      var result = [];

      var hundredths = Math.floor((time % 1) * 100);
      var seconds = Math.floor(time);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);

      if (hours > 0) {
        result.push(hours); // Hours
      }
      result.push(minutes % 60); // Mins
      result.push(seconds % 60); // Seconds

      for (var i = 0; i < result.length; i++) {
        result[i] = zeroPad(result[i]);
      }

      result = result.join(':');

      if (!dropHundredths) {
        result += '.' + zeroPad(hundredths);
      }

      return result;
    },

    /**
     * Checks whether the given value is a valid timestamp.
     *
     * @param {Number} value The value to test.
     * @returns {Boolean}
     */

    isValidTime: function(value) {
      return (typeof value === 'number') && Number.isFinite(value);
    },

    /**
     * Checks whether the given value is a valid object.
     *
     * @param {Number} value The value to test.
     * @returns {Boolean}
     */

    isObject: function(value) {
      return (value !== null) && (typeof value === 'object')
        && !Array.isArray(value);
    },

    /**
     * Checks whether the given value is a valid string.
     *
     * @param {String} value The value to test.
     * @returns {Boolean}
     */

    isString: function(value) {
      return typeof value === 'string';
    },

    /**
     * Checks whether the given value is null or undefined.
     *
     * @param {Object} value The value to test.
     * @returns {Boolean}
     */

    isNullOrUndefined: function(value) {
      return value === undefined || value === null;
    },

    /**
     * Checks whether the given value is a function.
     *
     * @param {Function} value The value to test.
     * @returns {Boolean}
     */

    isFunction: function(value) {
      return typeof value === 'function';
    }
  };
});
