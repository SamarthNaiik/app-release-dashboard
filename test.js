const assert = require('assert');
const http = require('http');

// Test 1 - Check server starts correctly
console.log('Test 1 - Checking dependencies...');
const express = require('express');
const axios = require('axios');
assert(express, 'Express should be installed');
assert(axios, 'Axios should be installed');
console.log('✅ Test 1 passed - dependencies OK');

// Test 2 - Check API response format
console.log('Test 2 - Checking API format...');
async function testAPI() {
  try {
    const response = await axios.get('https://itunes.apple.com/lookup?id=284882215');
    const data = response.data.results[0];
    assert(data.trackName, 'App name should exist');
    assert(data.version, 'Version should exist');
    assert(data.averageUserRating, 'Rating should exist');
    console.log('✅ Test 2 passed - API response format OK');
    console.log('✅ All tests passed');
  } catch (err) {
    console.error('❌ Test failed:', err.message);
    process.exit(1);
  }
}

testAPI();