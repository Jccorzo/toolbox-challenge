#!/usr/bin/env bash
mkdir build;
babel helper.js --out-file build/helper.js;
babel route.js --out-file build/route.js;
babel index.js --out-file build/index.js;