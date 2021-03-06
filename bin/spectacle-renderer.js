#!/usr/bin/env node
"use strict";

const createPDF = require("../lib/index");

const argv = require("yargs")
  .usage("Usage: spectacle-renderer [options] filename")
  .command("* [options]", "Render your presentation", {
    u: {
      alias: "url",
      default: "http://localhost:3000"
    },
    o: {
      alias: "output",
      default: "presentation.pdf"
    },
    p: {
      alias: "print",
      default: false
    },
    d: {
      alias: "delay",
      default: 2000
    },
    c: {
      alias: "chromium"
    },
    w: {
      alias: "width",
      default: 800
    },
    h: {
      alias: "height",
      default: 600
    }
  })
  .help().argv;

createPDF(argv);
